
function init(){
//	document.getElementById("iframe").style.height=iframe.document.body.scrollHeight + "px";
	 var iframe=document.getElementById("iframe");    
	 if (document.getElementById){    
		 if (iframe && !window.opera){     
			 if (iframe.contentDocument && iframe.contentDocument.body.offsetHeight){//GooGle Firefox      
			 	iframe.height = iframe.contentDocument.body.offsetHeight + "px";     
			 }else if(iframe.Document && iframe.Document.body.scrollHeight){//IE 360 
				iframe.height = iframe.Document.body.scrollHeight + "px";     
			 }    
		 }   
	 } 
}
//首页顶部图片切换
var q = 1;//记录上一次图片的序号
function changeImg() 
{	
	var t = '';
	if(document.getElementById("pd")!=null){
		t = document.getElementById("pd").style.background;
	}
	if(t == 'url(resources/images/jingtong.jpg)'){
		q = 1;
	}else if(t == 'url(resources/images/jingxin.jpg)'){
		q = 2;
	}else if(t == 'url(resources/images/jingzhi.jpg)'){
		q = 3;
	}else if(t == 'url(resources/images/jingcai.jpg)'){
		q = 4;
	}
      if(q==4 && document.getElementById("pd")!=null){
      	document.getElementById("pd").style.background="url('resources/images/jingtong.jpg')";
      	setBC("a1");
      }else if(q==1 && document.getElementById("pd")!=null){
      	document.getElementById("pd").style.background="url('resources/images/jingxin.jpg')";
      	setBC("a2");
      }else if(q==2 && document.getElementById("pd")!=null){
      	document.getElementById("pd").style.background="url('resources/images/jingzhi.jpg')";
      	setBC("a3");
      }else if(q==3 && document.getElementById("pd")!=null){
      	document.getElementById("pd").style.background="url('resources/images/jingcai.jpg')";
      	setBC("a4");
      }
      q++;
      if(q==5){
      	q=1;
      }
} 
setInterval( "changeImg() ",3000);   //3秒换一次
//设置按钮底色
function setBC(v){
	if(v=="a1"){
		document.getElementById("a2").style.backgroundColor = '#FFFFFF';
		document.getElementById("a3").style.backgroundColor = '#FFFFFF';
		document.getElementById("a4").style.backgroundColor = '#FFFFFF';
	}else if(v=="a2"){
		document.getElementById("a1").style.backgroundColor = '#FFFFFF';
		document.getElementById("a3").style.backgroundColor = '#FFFFFF';
		document.getElementById("a4").style.backgroundColor = '#FFFFFF';
	}else if(v=="a3"){
		document.getElementById("a1").style.backgroundColor = '#FFFFFF';
		document.getElementById("a2").style.backgroundColor = '#FFFFFF';
		document.getElementById("a4").style.backgroundColor = '#FFFFFF';
	}else if(v=="a4"){
		document.getElementById("a1").style.backgroundColor = '#FFFFFF';
		document.getElementById("a2").style.backgroundColor = '#FFFFFF';
		document.getElementById("a3").style.backgroundColor = '#FFFFFF';
	}
	document.getElementById(v).style.backgroundColor = '#880000';
}
function click1(v){
	if(v==1){
       	document.getElementById("pd").style.background="url('resources/images/jingtong.jpg')";
      	setBC("a1");
      }else if(v==2){
      	document.getElementById("pd").style.background="url('resources/images/jingxin.jpg')";
      	setBC("a2");
      }else if(v==3){
      	document.getElementById("pd").style.background="url('resources/images/jingzhi.jpg')";
      	setBC("a3");
      }else if(v==4){
      	document.getElementById("pd").style.background="url('resources/images/jingcai.jpg')";
      	setBC("a4");
      }
}


var srcs = new Array("resources/images/qiyezhengshu.jpg", "resources/images/chanpinrending.jpg", "resources/images/zhuzuo-fuwu.jpg", "resources/images/zhuzuo-jiankong.jpg");
var index = 0;
function changeZizhiImage(msg) {
    if(msg =="left"){
        if(index>0){
            index--;
        }else if(index==0){
        	index=3;
        }
    }else if(msg == "right"){
        if(index<3){
            index++;
        }else if(index==3){
        	index=0;
        }
    }
    document.getElementById("img2").src = srcs[index];
}
function changeZizhiImgAuto() 
{
	var t='';
	if(document.getElementById("img2") != null){
		t = document.getElementById("img2").src;
	}
	if(t == 'http://localhost:8080/Hanshun/resources/images/qiyezhengshu.jpg'){
		index = 0;
	}else if(t == 'http://localhost:8080/Hanshun/resources/images/chanpinrending.jpg'){
		index = 1;
	}else if(t == 'http://localhost:8080/Hanshun/resources/images/zhuzuo-fuwu.jpg'){
		index = 2;
	}else if(t == 'http://localhost:8080/Hanshun/resources/images/zhuzuo-jiankong.jpg'){
		index = 3;
	}
       if(index==3 && document.getElementById("img2")!=null){
       	document.getElementById("img2").src= srcs[0];
       }else if(index==0 && document.getElementById("img2")!=null){
       	document.getElementById("img2").src= srcs[1];
       }else if(index==1 && document.getElementById("img2")!=null){
       	document.getElementById("img2").src= srcs[2];
       }else if(index==2 && document.getElementById("img2")!=null){
       	document.getElementById("img2").src= srcs[3];
       }
       index++;
       if(index==4){
       	 index=0;
       }
} 
setInterval( "changeZizhiImgAuto() ",3000);   //3miao huan yi ci














