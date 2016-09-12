$(document).ready(function() {
  $(".fullSlide").hover(function() {
    $(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.5)
},
function() {
    $(this).find(".prev,.next").fadeOut()
});
$(".fullSlide").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
    effect: "fold",
    autoPlay: true,
    autoPage: true,
    trigger: "click",
    startFun: function(i) {
        var curLi = $(".fullSlide .bd li").eq(i);
        if ( !! curLi.attr("_src")) {
            curLi.css("background-image", curLi.attr("_src")).removeAttr("_src")
        }
    }
});

  //旋转
  $(".imgs").mouseenter(function rotate(){
     $(this).animate({rotate: '360'}, 500, 'linear', function() {
       rotate();
     });
  });
  //放大

  function getStyle(obj,att){
  if(obj.currentStyle){//IE样式
    return obj.currentStyle[att];
  }else{//非IE样式
    return getComputedStyle(obj,null)[att]
  }
}
  
function startMove(obj,json,fn){  
        clearInterval(obj.timer);
            obj.timer=setInterval(function(){
          for(var att in json){
            var cc=parseInt(getStyle(obj,att));
            var speed=(json[att]-cc)/10;
            speed=speed>0?Math.ceil(speed):Math.floor(speed)
            if(cc==json[att]){
              clearInterval(obj.timer)
              if(fn){
                fn();
              }
            }else{
              obj.style[att]=cc+speed+"px";
            }
          }
        }, 5);
      };
      var lis=$(".show-icon");
      for (var i = 0; i < lis.length; i++) {
            lis[i].style.left = lis[i].offsetLeft + "px";
            lis[i].style.top = lis[i].offsetTop + "px";

        }

         for (i = 0; i < lis.length; i++) {
             lis[i].style.position = "absolute"; //3、设置定位
            lis[i].style.margin = 0; //4、margin清0
         }
         var zIndex = 1;
        for (var i = 0; i < lis.length; i++) {
            lis[i].onmouseover = function() {
                this.style.zIndex = 2;
                startMove(this, {
                    width: 160,
                    height:160,
                    marginLeft: -5,
                    marginTop: -5
                })
            }
            lis[i].onmouseout = function() {
                this.style.zIndex = 1;
                startMove(this, {
                    width: 140,
                    height: 140,
                    marginLeft: 0,
                    marginTop: 0
                })
            }
        }
//循环
var lis=$(".loop-num li");
var text=$(".loop-text li");
var serviceFlowIndicator = 0;
function change(){
  lis.each(function(){
    $(this).removeClass("info1");
  });
  text.each(function(){
    $(this).removeClass("info2");
  })
  $(".loop-num li").eq(serviceFlowIndicator).addClass("info1");
  $(".loop-text li").eq(serviceFlowIndicator).addClass("info2");
  if(serviceFlowIndicator < 5){
    serviceFlowIndicator++;
  }else{
    serviceFlowIndicator = 0;
  }
}
setInterval(change,1000);
//师傅故事
$(".left-title .top").mouseenter(function(){
   $(this).animate({left:"240px"})
})
$(".flow-right-top").mouseenter(function(){
   $(".left-title .top").animate({left:"504px"})
})

$(".left-title .bottom").mouseenter(function(){
   $(this).animate({left:"240px"})
})
$(".flow-right-bottom").mouseenter(function(){
   $(".left-title .bottom").animate({left:"504px"})
})
//banner
 $(".banner-content").hide();
$(".list>li").on("mouseover",function(){

    var i=$(this).index();
    $(this).addClass("positive").siblings().removeClass("positive");
    $(".banner-item>li").eq(i).show().siblings().hide();
     $(".banner-content").show();
})
$(".banner-content").on("mouseout",function(){
  $(".banner-content").hide();
})

//show-move
var currnetIndex=0;
function showMove(){
 
 if(currnetIndex<25){
   currnetIndex++;
 }else{
  currnetIndex=0;
 }
  $(".move-show").animate({left:(-240*currnetIndex)+"px"});
}
stopMove=setInterval(showMove,2000);
$(".move-show").on("mouseout",function(){
   clearInterval(stopMove);
   stopMove=setInterval(showMove,2000);
})
$(".move-show").on("mouseover",function(){
   clearInterval(stopMove);
})
//nav
$(".nav-right li").on("mouseover",function(){
  $(this).addClass("active").siblings().removeClass("active");
})







 }); 

