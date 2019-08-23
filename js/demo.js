var oBox= document.getElementById('timer');

var oBoxU= document.getElementById('timerU');
      
var maxtime = 16 * 60;  

var video = document.getElementsByTagName('video')

var videop = document.getElementById('model')

function CountDown() {
    if (maxtime >= 0) {
        minutes = Math.floor(maxtime / 60);

        seconds = Math.floor(maxtime % 60);
       
        yellow =  minutes + "mins" +" "+ seconds + "secs"+"!";
        oBox.innerHTML =   yellow;
       
        oBoxU.innerHTML =   yellow;
        
        if (maxtime == 5 * 60)clearInterval(timer);
                    --maxtime;
                       } 
        }
timer = setInterval("CountDown()", 1000);     
var ak = document.getElementsByClassName('ak')[0]
function closed(){
        document.getElementById('er').style.display = 'none';
        headroom.destroy();
                  }

var span = document.getElementById("data");
var span1 = document.getElementById("data1");
var now = new Date();
var year = now.getFullYear();//年
var month = now.getMonth() + 1;//月  (注意：月份+1)
var date = now.getDate() ;//日
var day = now.getDay();
var weeks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var week = weeks[day];//根据day值，获取星期数组中的星期数。
if (month < 10) {
        month = "0" + month;
    }
if (date < 10) {
        date = "0" + date;
    }
   
span.innerText = " " + week + "," + " " + date + "/" + month + "/" + year;
span1.innerText = " " + week + "," + " " + date + "/" + month + "/" + year;

/* var player = videojs('model',{},function(){
    player.on('play',function(){
        video[1].play()
    })
    player.on('pause',function(){
        video[1].pause();
        
    })
})
var player1 = videojs('slr',{},function(){
    player1.volume(0);
    player1.on('play',function(){
        video[0].play()
    })
    player1.on('pause',function(){
        video[0].pause()
    })
}) */

window.onscroll=function(){
    var t =document.documentElement.scrollTop||document.body.scrollTop; //变量t就是滚动条滚动时，到顶部的距离

    var img = document.getElementById('target');

    var video = document.getElementById('HeadTitle');

    var imgRight = img.offsetTop;

    var videoT = video.offsetTop;
    
    
   /* if(t >= videoT){
        document.getElementById('er').classList.remove("do");
    }
    if(t < videoT){
        document.getElementById('er').classList.add("do");
    } */
    if( t >= imgRight){
        document.getElementById('no').classList.remove("yes");
    }if(t < imgRight){
        document.getElementById('no').classList.add("yes");
    }
    }

var videoM = document.querySelectorAll('video')[0];
enableInlineVideo(videoM);
var ak = document.getElementsByClassName('ak')[0]
var headroom;

var temp = 0;
var myplayer = videojs('model');
myplayer.on("pause", function(){
    var b = myplayer.currentTime();
    temp = b;
    
    headroom.destroy();
    headroom = null;
});

var aa = setInterval(function(){
    var a = myplayer.currentTime();
    if( a === temp){
        temp = a
        // headroom.destroy();
    } else {
        if (!headroom) {
            headroom = new Headroom(ak, {
                "tolerance": 5,
                "offset": 205,
                "classes": {
                  "initial": "",
                  "pinned": "",
                  "unpinned": "undo"
                }
            });
            headroom.init();
        }
    }
},1)



