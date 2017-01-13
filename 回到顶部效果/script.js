/**
 * Created by Administrator on 2017/1/13.
 */
window.onload = function(){
    var clientHight = document.documentElement.clientHeight;
    var btn = window.document.getElementById('btn');
    var isTop = true;
    var timer = null;

    window.onscroll = function(){
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(osTop > clientHight){
            btn.style.display='block';
        }else{
            btn.style.display='none';
        }
        if(!isTop){
            clearInterval(timer);
        }
        isTop = false;

    }

    btn.onclick=function(){
        timer = setInterval(function(){
           var osTop = document.documentElement.scrollTop || document.body.scrollTop;
           var isSpeed = Math.floor(-osTop / 6);
           document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed;
           if(osTop == 0){
               clearInterval(timer);
           }
           isTop = true;
       },60);
   }
}