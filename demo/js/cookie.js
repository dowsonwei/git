function writeCookie(name,value,days){
	var expires="";
	if(days){
		var date=new Date();
		date.setTime(date.getDate()+(days*24*60*60));
		expires="; expires"+date.toGMTString();
	}
	document.cookie=name+"="+value+expires+"; path=/";
	//alert(document.cookie);
}
function readCookie(name){
	var searchName=name+"=";

	var cookies=document.cookie.split(";");
	for(var i=0;i<cookies.length;i++){
		var c=cookies[i];
		while(c.charAt(0)==' ')
			c=c.substring(1,c.length);
		if(c.indexOf(searchName)==0)
			return c.substring(searchName.length,c.length);
	}
	return null;
}