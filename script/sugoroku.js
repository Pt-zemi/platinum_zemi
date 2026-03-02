// --- 座標データ ---
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
    { "name": "武笠農園", "type": "event-good", "text": "イチゴカ(4)進む", "move": 4, "top": 46.3, "left": 65.27 },
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

// --- クイズデータ ---
const quizData = [
    { q: "中原区にある大型ショッピングモールといえば「〇〇〇」ツリー？", options: ["クリスマス", "スカイ", "グラン", "サカナ"], a: 2 },
    { q: "川崎市内で人口が最も多い区は？", options: ["中原区", "川崎区", "宮前区", "高津区"], a: 0 },
    { q: "宮前区のPRキャラクターは「宮前兄妹」のメローと？", options: ["カッピー", "コスミン", "ロケット", "ミライ"], a: 1 },
    { q: "「馬絹古墳」の読み方は？", options: ["うまきぬこふん", "まぎぬこふん", "ばーきんこふん", "ばきこふん"], a: 1 },
    { q: "中原区の有名な商店街は？", options: ["モトスミ・ブレーメン通り", "たちばな通り", "サライ通り", "銀座通り"], a: 0 },
    { q: "高津区にある「岡本かの子文学碑」の形は？", options: ["本", "ペン", "誇り(抽象的)", "愛"], a: 2 },
    { q: "川崎フロンターレのホームスタジアムがあるのは？", options: ["等々力緑地", "生田緑地", "夢見ヶ崎動物公園", "多摩川河川敷"], a: 0 }
];

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let players = [];
let currentPlayerIndex = 0;
let playerCount = 2;
let isAnimating = false;
const colors = ["#e74c3c", "#3498db", "#f1c40f", "#2ecc71"];

// ゲーム開始処理
function startGame(count) {
    if (mapData.length === 0) {
        alert("エラー：mapDataが空です。");
        return;
    }
    playerCount = count;
    
    // 画面切り替え
    const startScreen = document.getElementById('start-screen');
    startScreen.style.opacity = 0;
    setTimeout(() => startScreen.style.display = 'none', 500);

    showToast("ゲームスタート！");

    const gameContainer = document.getElementById('game-container');
    for (let i = 0; i < playerCount; i++) {
        players.push({ id: i, name: `プレイヤー${i + 1}`, pos: 0, color: colors[i], skipTurn: false });
        const token = document.createElement('div');
        token.className = 'token';
        token.id = `player-token-${i}`;
        token.style.backgroundColor = colors[i];
        gameContainer.appendChild(token);
    }
    updatePlayerPositions();
    updateStatus();
}

// サイコロを振る
function startDiceRoll() {
    if (isAnimating) return;
    isAnimating = true;
    document.getElementById('roll-btn').disabled = true;

    const player = players[currentPlayerIndex];
    
    // 休み判定
    if (player.skipTurn) {
        showToast(`${player.name}は1回休みです💤`);
        player.skipTurn = false;
        setTimeout(endTurn, 1500);
        return;
    }

    // サイコロ演出表示
    const overlay = document.getElementById('dice-overlay');
    const diceChar = document.getElementById('dice-char');
    overlay.style.display = 'flex';
    diceChar.classList.add('dice-rolling');

    // ルーレットアニメーション
    let rollCount = 0;
    const rollInterval = setInterval(() => {
        diceChar.textContent = diceFaces[rollCount % 6];
        rollCount++;
    }, 80);

    // 決定
    setTimeout(() => {
        clearInterval(rollInterval);
        diceChar.classList.remove('dice-rolling');
        const diceResult = Math.floor(Math.random() * 6) + 1;
        diceChar.textContent = diceFaces[diceResult - 1];
        
        showToast(`${player.name}の目は【${diceResult}】！`);

        // 少し待ってから移動開始
        setTimeout(() => {
            overlay.style.display = 'none';
            movePlayer(player, diceResult);
        }, 1000);
    }, 1200);
}

// プレイヤー移動
function movePlayer(player, steps) {
    let currentSteps = 0;
    const direction = steps > 0 ? 1 : -1;
    const targetSteps = Math.abs(steps);
    
    // 移動中はコマを目立たせる
    document.getElementById(`player-token-${player.id}`).classList.add('active');

    const moveInterval = setInterval(() => {
        if (currentSteps < targetSteps) {
            // ゴール判定
            if (direction > 0 && player.pos >= mapData.length - 1) {
                player.pos = mapData.length - 1;
                clearInterval(moveInterval);
                updatePlayerPositions();
                goalEffect(player);
                return;
            }
            // スタート地点より前には戻らない
            if (direction < 0 && player.pos <= 0) {
                player.pos = 0;
                clearInterval(moveInterval);
                updatePlayerPositions();
                checkSpaceEffect(player);
                return;
            }
            
            player.pos += direction;
            updatePlayerPositions();
            currentSteps++;
        } else {
            clearInterval(moveInterval);
            document.getElementById(`player-token-${player.id}`).classList.remove('active');
            checkSpaceEffect(player);
        }
    }, 300); // 移動速度
}

// マスの効果判定
function checkSpaceEffect(player) {
    const cell = mapData[player.pos];

    if (cell.type === 'goal') {
        goalEffect(player);
        return;
    }
    if (cell.type === 'quiz') {
        showToast("❓ クイズマス ❓");
        setTimeout(() => startQuiz(player), 1000);
        return;
    }
    if (cell.type === 'star') {
        showToast("★ カワサキ☆カード GET! (演出)");
        setTimeout(endTurn, 1500);
        return;
    }
    
    if (cell.move) {
        const dirStr = cell.move > 0 ? "進む" : "戻る";
        showToast(`イベント発生！ ${Math.abs(cell.move)}マス${dirStr} 🚀`);
        setTimeout(() => movePlayer(player, cell.move), 1500);
        return;
    }
    if (cell.skipTurn) {
        showToast("次回一回休み... 💤");
        player.skipTurn = true;
    }
    if (cell.rollAgain) {
        showToast("ラッキー！もう一回！ 🎲");
        document.getElementById('roll-btn').disabled = false;
        isAnimating = false;
        return; 
    }
    endTurn();
}

// クイズ
function startQuiz(player) {
    const modal = document.getElementById('quiz-modal');
    const qText = document.getElementById('quiz-question');
    const qOptions = document.getElementById('quiz-options');
    const qData = quizData[Math.floor(Math.random() * quizData.length)];
    
    qText.textContent = qData.q;
    qOptions.innerHTML = '';
    qData.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.onclick = () => {
            modal.style.display = 'none';
            if (idx === qData.a) {
                showToast("🙆‍♂️ 正解！ 1マス進みます");
                setTimeout(() => movePlayer(player, 1), 500);
            } else {
                showToast(`🙅‍♀️ 不正解... 正解は「${qData.options[qData.a]}」`);
                setTimeout(endTurn, 1000);
            }
        };
        qOptions.appendChild(btn);
    });
    modal.style.display = 'flex';
}

// プレイヤーの位置更新（座標計算）
function updatePlayerPositions() {
    players.forEach(p => {
        const token = document.getElementById(`player-token-${p.id}`);
        if(mapData[p.pos]) {
            // 重なり防止のため少しずらす
            const offset = (p.id * 3) - (playerCount * 1.5); 
            
            token.style.top = `calc(${mapData[p.pos].top}% + ${offset}px)`;
            token.style.left = `calc(${mapData[p.pos].left}% + ${offset}px)`;
            token.style.zIndex = (p.id === currentPlayerIndex) ? 50 : 10;
        }
    });
}

// ターン終了処理
function endTurn() {
    currentPlayerIndex = (currentPlayerIndex + 1) % playerCount;
    isAnimating = false;
    updateStatus();
}

// UI更新
function updateStatus() {
    const nextPlayer = players[currentPlayerIndex];
    const statusText = document.getElementById('status-text');
    const rollBtn = document.getElementById('roll-btn');
    
    statusText.innerHTML = `<span style="color:${nextPlayer.color}">●</span> ${nextPlayer.name} の番です`;
    rollBtn.style.background = nextPlayer.color;
    rollBtn.disabled = false;
    
    // ボタンを少しアニメーションさせて注目させる
    rollBtn.style.transform = "scale(1.05)";
    setTimeout(() => rollBtn.style.transform = "scale(1)", 200);
}

// トースト通知を表示
function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    
    // アニメーション終了後に削除
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ゴール演出
function goalEffect(player) {
    showToast(`🎉 ゴール！ ${player.name} の優勝！ 🎉`);
    const statusText = document.getElementById('status-text');
    statusText.innerHTML = `👑 優勝：${player.name} 👑`;
    statusText.style.fontSize = "1.5rem";
    statusText.style.color = "#e67e22";
    
    // 紙吹雪などを出したければここに追加
    document.getElementById('roll-btn').disabled = true;
    document.getElementById('roll-btn').innerText = "ゲーム終了";
    document.getElementById('roll-btn').style.background = "#95a5a6";
    isAnimating = false;
}