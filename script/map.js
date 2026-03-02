function showMap(num) {
    // すべてのiframeとボタンからactiveクラスを削除
    const maps = document.querySelectorAll('.map-container iframe');
    const buttons = document.querySelectorAll('.nav-button');
    
    maps.forEach(map => map.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // 指定された番号の地図とボタンにactiveクラスを追加
    document.getElementById('map' + num).classList.add('active');
    buttons[num - 1].classList.add('active');
}