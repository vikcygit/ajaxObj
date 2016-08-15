function createAjaxObject(callback){
	try { var ajax = new XMLHttpRequest() }
	catch(e1) { try {ajax = new ActiveXObject ("Msxml2.XMLHTTP")}
	catch(e2) { try {ajax = new ActiveXObject ("Microsoft.XMLHTTP")}
	catch(e3) { ajax = false}}}

	if (ajax) ajax.onreadystatechange = function(){
		if (this.readyState == 4 &&
			this.status == 200 &&
			this.responseText !=null)
		callback.call(this.responseText)
	}

  return ajax	
}

function PostAjaxRequest(callback, url, args){
	var contenttype = 'application/x-www-form-urlencoded'
	var ajax = new createAjaxObject(callback)
	if (!ajax) return false

	ajax.open('POST', url, true)
	ajax.setRequestHeader('Content-type', contenttype)
	//ajax.setRequestHeader('Content-length', args.length)
	//ajax.setRequestHeader('Connection', 'close')
	ajax.send(args)
	return true
}