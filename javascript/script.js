window.onload=function(){/* 현재에 있는 모든 코드를 다 읽은 다음에 JS를 호출해라 window.onload를 쓰는 경우는 js파일을 head안에 위치할 때*/
    var hw=document.getElementById('hw');
    hw.addEventListener('click', function(){
        alert('Hello World')
    });

}