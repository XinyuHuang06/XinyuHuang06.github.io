function showMarkdown(value)
{
	// 创建XMLHttpRequest对象
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	// 得到服务器响应后，对得到的Markdown文档进行解析
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			// 这里调用了marked框架中的marked函数实现Markdown2HTML的解析
			document.getElementById("content").innerHTML = marked.parse(xmlhttp.responseText);
		}
	}
	// 向服务器发送请求，获取你需要的Markdown文档
	xmlhttp.open("GET",value,true);
	xmlhttp.send();
}