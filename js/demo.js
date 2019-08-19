var oBox= document.getElementById('timer');

var oBoxU= document.getElementById('timerU');
      
var maxtime = 16 * 60;  

var video = document.getElementsByTagName('video')

function CountDown() {
    if (maxtime >= 0) {
        minutes = Math.floor(maxtime / 60);

        seconds = Math.floor(maxtime % 60);
       
        yellow =  minutes + "mins" +" "+ seconds + "secs"+"!";
        oBox.innerHTML =   yellow;
       
        oBoxU.innerHTML =   yellow;
        
        if (maxtime == 5 * 60)location.reload();
                    --maxtime;
        } else{
                clearInterval(timer);
                alert("时间到，结束!");
            }
        }
        timer = setInterval("CountDown()", 1000);     


window.onscroll=function(){
    var t =document.documentElement.scrollTop||document.body.scrollTop; //变量t就是滚动条滚动时，到顶部的距离

    var img = document.getElementById('target');

    var video = document.getElementById('headline');

    var imgRight = img.offsetTop;

    var videoT = video.offsetTop;

    if(t >=videoT){
        document.getElementById('er').classList.remove("do");
    }
    if(t < videoT){
        document.getElementById('er').classList.add("do");
    }
    if( t >= imgRight){
        document.getElementById('no').classList.remove("yes");
    }if(t < imgRight){
        document.getElementById('no').classList.add("yes");
    }
                         }

function closed(){
        document.getElementById('er').style.display = 'none';
                  }

video[0].addEventListener('play',function(){
    video[1].play()
})


var videop = document.getElementById('model')
videop.onclick = function(){
    
    if(videop.paused){
        videop.play();
    }else{
        videop.pause();
    }
}

   


