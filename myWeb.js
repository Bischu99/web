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
var FileInput = document.getElementById("FileInput");
// 값이 변경될떄 호출 되는 이벤트 리스너
FileInput.addEventListener("change",function(e){
    console.log(e.target.files)
})
function GameStart(){
    document.createElement('h1')
}