const mapData = [
    { "name": "スタート", "type": "start", "text": "東名川崎IC", "top": 38.81, "left": 10.47 },
    { "name": "マス1", "type": "normal", "text": "", "top": 38.61, "left": 17.76 },
    { "name": "マス2", "type": "normal", "text": "", "top": 38.61, "left": 23.83 },
    { "name": "高速移動", "type": "event-good", "text": "3マス進む", "move": 3, "top": 46.38, "left": 23.83 },
    { "name": "マス4", "type": "normal", "text": "", "top": 54.27, "left": 23.68 },
    { "name": "マス5", "type": "normal", "text": "", "top": 62.17, "left": 23.68 },
    { "name": "マス6", "type": "normal", "text": "", "top": 70.06, "left": 23.68 },
    { "name": "クイズ", "type": "quiz", "text": "クイズ！", "top": 70.06, "left": 29.75 },
    { "name": "マス8", "type": "normal", "text": "", "top": 69.86, "left": 35.52 },
    { "name": "マス9", "type": "normal", "text": "", "top": 69.86, "left": 41.59 },
    { "name": "マス10", "type": "normal", "text": "", "top": 69.86, "left": 47.36 },
    { "name": "クイズ", "type": "quiz", "text": "クイズ！", "top": 69.86, "left": 53.28 },
    { "name": "マス12", "type": "normal", "text": "", "top": 61.96, "left": 53.28 },
    { "name": "マス13", "type": "normal", "text": "", "top": 53.87, "left": 53.13 },
    { "name": "クイズ", "type": "quiz", "text": "クイズ！", "top": 54.07, "left": 47.36 },
    { "name": "マス15", "type": "normal", "text": "", "top": 54.27, "left": 41.44 },
    { "name": "マス16", "type": "normal", "text": "", "top": 46.18, "left": 41.44 },
    { "name": "脱炭素", "type": "event-good", "text": "もう1回振る", "rollAgain": true, "top": 38.49, "left": 41.44 },
    { "name": "マス18", "type": "normal", "text": "", "top": 30.39, "left": 41.44 },
    { "name": "クイズ", "type": "quiz", "text": "クイズ！", "top": 30.59, "left": 47.66 },
    { "name": "マス20", "type": "normal", "text": "", "top": 30.59, "left": 53.28 },
    { "name": "一回休み", "type": "event-bad", "text": "お休み...", "skip": true, "top": 30.59, "left": 59.35 },
    { "name": "マス22", "type": "normal", "text": "", "top": 38.49, "left": 59.2 },
    { "name": "★マス", "type": "star", "text": "カードGET!", "top": 38.41, "left": 65.27 },
    { "name": "武笠農園", "type": "event-good", "text": "イチゴで4進む", "move": 4, "top": 46.3, "left": 65.27 },
    { "name": "マス25", "type": "normal", "text": "", "top": 53.99, "left": 65.12 },
    { "name": "マス26", "type": "normal", "text": "", "top": 62.09, "left": 65.27 },
    { "name": "昔へ戻る", "type": "event-bad", "text": "2マス戻る", "move": -2, "top": 69.78, "left": 65.27 },
    { "name": "マス28", "type": "normal", "text": "", "top": 77.67, "left": 65.27 },
    { "name": "マス29", "type": "normal", "text": "", "top": 77.87, "left": 71.19 },
    { "name": "クイズ", "type": "quiz", "text": "クイズ！", "top": 77.67, "left": 76.96 },
    { "name": "マス31", "type": "normal", "text": "", "top": 77.67, "left": 82.88 },
    { "name": "一回休み", "type": "event-bad", "text": "お休み...", "skip": true, "top": 69.98, "left": 82.88 },
    { "name": "マス33", "type": "normal", "text": "", "top": 61.68, "left": 82.73 },
    { "name": "ゴール", "type": "goal", "text": "こすぎコアパーク", "top": 51.97, "left": 82.88 }
];

const quizData = [
    { q: "中原区にある大型ショッピングモールといえば「〇〇〇」ツリー？", options: ["クリスマス", "スカイ", "グラン", "サカナ"], a: 2 },
    { q: "川崎市内で人口が最も多い区は？", options: ["中原区", "川崎区", "宮前区", "高津区"], a: 0 },
    { q: "宮前区のPRキャラクターは「宮前兄妹」のメローと？", options: ["カッピー", "コスミン", "ロケット", "ミライ"], a: 1 }
];

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let players = [];
let currentPlayerIndex = 0;
let playerCount = 2;
let isAnimating = false;
const colors = ["#e74c3c", "#3498db", "#f1c40f", "#2ecc71"];

function startGame(count) {
    playerCount = count;
    document.getElementById('start-screen').style.display = 'none';
    const boardArea = document.getElementById('board-area');
    
    for (let i = 0; i < playerCount; i++) {
        players.push({ id: i, name: `プレイヤー${i + 1}`, pos: 0, color: colors[i], skipTurn: false });
        const token = document.createElement('div');
        token.className = 'token';
        token.id = `player-token-${i}`;
        token.style.backgroundColor = colors[i];
        boardArea.appendChild(token);
    }
    updatePlayerPositions();
    updateStatus();
}

function startDiceRoll() {
    if (isAnimating) return;
    const player = players[currentPlayerIndex];
    if (player.skipTurn) {
        showToast(`${player.name}はお休みです💤`);
        player.skipTurn = false;
        setTimeout(endTurn, 1500);
        return;
    }

    isAnimating = true;
    document.getElementById('roll-btn').disabled = true;
    const overlay = document.getElementById('dice-overlay');
    const diceChar = document.getElementById('dice-char');
    overlay.style.display = 'flex';

    let count = 0;
    const rollInterval = setInterval(() => {
        diceChar.textContent = diceFaces[count % 6];
        count++;
    }, 80);

    setTimeout(() => {
        clearInterval(rollInterval);
        const result = Math.floor(Math.random() * 6) + 1;
        diceChar.textContent = diceFaces[result - 1];
        showToast(`${player.name}：【${result}】！`);
        setTimeout(() => {
            overlay.style.display = 'none';
            movePlayer(player, result);
        }, 800);
    }, 1000);
}

function movePlayer(player, steps) {
    let currentSteps = 0;
    const direction = steps > 0 ? 1 : -1;
    const targetSteps = Math.abs(steps);
    const token = document.getElementById(`player-token-${player.id}`);
    token.classList.add('active');

    const moveInterval = setInterval(() => {
        if (currentSteps < targetSteps) {
            player.pos += direction;
            if (player.pos >= mapData.length - 1) {
                player.pos = mapData.length - 1;
                clearInterval(moveInterval);
                updatePlayerPositions();
                goalEffect(player);
                return;
            }
            if (player.pos < 0) player.pos = 0;
            updatePlayerPositions();
            currentSteps++;
        } else {
            clearInterval(moveInterval);
            token.classList.remove('active');
            checkSpaceEffect(player);
        }
    }, 400);
}

function checkSpaceEffect(player) {
    const cell = mapData[player.pos];
    if (cell.type === 'goal') return goalEffect(player);
    if (cell.type === 'quiz') return startQuiz(player);
    if (cell.move) {
        showToast(`${Math.abs(cell.move)}マス移動！🚀`);
        return setTimeout(() => movePlayer(player, cell.move), 1000);
    }
    if (cell.skip) {
        showToast("一回休み... 💤");
        player.skipTurn = true;
    }
    if (cell.rollAgain) {
        showToast("もう一回！🎲");
        isAnimating = false;
        document.getElementById('roll-btn').disabled = false;
        return;
    }
    endTurn();
}

function updatePlayerPositions() {
    players.forEach(p => {
        const token = document.getElementById(`player-token-${p.id}`);
        const data = mapData[p.pos];
        if(data) {
            const offset = (p.id * 2) - (playerCount * 1.0);
            token.style.top = `calc(${data.top}% + ${offset}px)`;
            token.style.left = `calc(${data.left}% + ${offset}px)`;
        }
    });
}

function startQuiz(player) {
    const modal = document.getElementById('quiz-modal');
    const qData = quizData[Math.floor(Math.random() * quizData.length)];
    document.getElementById('quiz-question').textContent = qData.q;
    const options = document.getElementById('quiz-options');
    options.innerHTML = '';
    qData.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.onclick = () => {
            modal.style.display = 'none';
            if (i === qData.a) {
                showToast("正解！1マス進む🙆‍♂️");
                setTimeout(() => movePlayer(player, 1), 500);
            } else {
                showToast("残念！正解は「" + qData.options[qData.a] + "」でした🙅‍♀️");
                setTimeout(endTurn, 800);
            }
        };
        options.appendChild(btn);
    });
    modal.style.display = 'flex';
}

function endTurn() {
    currentPlayerIndex = (currentPlayerIndex + 1) % playerCount;
    isAnimating = false;
    updateStatus();
}

function updateStatus() {
    const p = players[currentPlayerIndex];
    const btn = document.getElementById('roll-btn');
    document.getElementById('status-text').innerHTML = `<span style="color:${p.color}">●</span> ${p.name} の番です`;
    btn.style.background = p.color;
    btn.disabled = false;
}

function showToast(msg) {
    const container = document.getElementById('toast-container');
    const t = document.createElement('div');
    t.style.cssText = "background:rgba(0,0,0,0.8); color:white; padding:10px 20px; border-radius:50px; margin-top:10px; pointer-events:none;";
    t.textContent = msg;
    container.appendChild(t);
    setTimeout(() => t.remove(), 2500);
}

function goalEffect(player) {
    showToast(`🎉 ゴール！ ${player.name} 優勝！ 🎉`);
    document.getElementById('status-text').textContent = `👑 優勝：${player.name} 👑`;
    document.getElementById('roll-btn').disabled = true;
    isAnimating = false;
}
