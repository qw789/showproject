// JavaScript Document
//设置日期
function addDate(num){
	var d = new Date();
	d.setDate(d.getDate() + num);
	return d;
}

//创建cookie(写入)
function setCookie(key,value,expires){
	var cVal = key + "=" + value;
	if(expires){
		cVal += ";expires=" + expires;
	}
	//console.log(cVal);
	
	document.cookie = cVal;
	//console.log(document.cookie);
}

//获取指定的cookie(读取)
function getCookie(key){
	var result = "";
	var cookies = document.cookie.split("; ");  //a1=王召; a2=班长; a3=黄龙杰
	//console.log(cookies);  //cookies[0]:a1=王召
	for(var i = 0;i < cookies.length;i++){
		var cookie = cookies[i].split("=");	  //cookie[0]:存放key   cookie[1]存放:值
		if(cookie[0] == key){
			result = cookie[1];
			break;
		}
	}
	return result;
}

//删除指定的cookie
function delCookie(key){
	document.cookie = key + "=;expires=" + new Date(0);
}

function getStyle(obj,att){
	if(obj.currentStyle){//IE样式
		return obj.currentStyle[att];
	}else{//非IE样式
		return getComputedStyle(obj,null)[att]
	}
}

function getRandom(_min,_max){
	return Math.random()*(_max-_min)+_min;
}
 function getColor(){
 	return "rgb("+parseInt(getRandom(0,256))+","+parseInt(getRandom(0,256))+","+parseInt(getRandom(0,256))+")"
 }
 	//缓冲运动
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
				}, 50);
			}
//根据ID获取元素
function $(eleID){
	return document.getElementById(eleID)
}