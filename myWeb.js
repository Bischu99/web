function openWin(){
    location.href="http://naver.com";
}
function SNS(SnsLink){
    switch (SnsLink){
        case 'facebook':    location.href="https://www.facebook.com/"; break;
        case 'instagram':    location.href="https://www.instagram.com/"; break;
        case 'twitter':    location.href="https://twitter.com/"; break;
    }
}

function GameStart(){
    var file = document.getElementById('FileInput');
    var filePath = file.value;
    var filePathSplit = filePath.split('\\');
    var filePathLength = filePathSplit.length;
    var fileNameSplit = filePathSplit[filePathLength -1].split('.');
    var fileName = fileNameSplit[0];
    var fileExt = fileNameSplit[1];
    var fileSize = file.files[0].size;

    console.log('파일 경로 : ' + filePath);
    console.log('파일명 : ' + fileName);
    console.log('파일 확장자 : ' + fileExt);
    console.log('파일 크기 : ' + fileSize);

    
    // var image1=new image()
    // image1.src=filePath;
    // var newTEST = document.createElement("img");

    // newTEST.innerHTML = "";
}

function make(){
    var img = document.createElement("img");

    var rnd = Math.round(Math.random() * 15) + 1;
    rnd == 10 || rnd == 11 ? rnd = Math.round(Math.random()* 10) : rnd == 12 ? rnd = Math.round(Math.random()* 10) : rnd ;
    
    // 10 11 12

    img.onclick = function(){document.getElementById('board').removeChild(this)};
    // img.src = "C:\\Users\IOT\Desktop\web_image\Design\Shape" + rnd +'.png';
    img.src = 'C:/Users/IOT/Desktop/web_image/Design/Shape' + rnd + '.png'; // 이미지 경로 설정 (랜덤)
    img.style.cursor = 'pointer'; 
    document.getElementById('board').appendChild(img);
}
function del(){
    document.getElementById('board').innerHTML = "";
}