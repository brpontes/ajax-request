var AjaxRequest = (function(){
	var request = function(callback) {
		req = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		req.onreadystatechange = function() {
			if (req.readyState == 4 && req.status == 200) {
				callback(req.response);	
			} 
		};
	};
	var initLoading = function(obj, callback) {
		var loading = obj.loading;
		var loadImg = obj.loadImg;

		if (loading) {
			(loadImg) ? loading.innerHTML = loadImg : callback(new Error('Informe o elemento HTML a ser inserido no carregamento'));
		}
	};
	var methodValidator = function(obj, callback) {
		var method = obj.method;
		var url = obj.url;
		var data = obj.data;
		if (method.toUpperCase() == 'POST' ) {
			if (data) {
				req.open(method.toUpperCase(), url, true);
				req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				req.send(JSON.stringify(data));
			} else {
				callback(new Error('Informe os parâmetros para a requisição!'));
			}
		} else if (method.toUpperCase() == 'GET') {
			req.open(method.toUpperCase(), url, true);
			req.send();
		} else {
			callback(new Error('O método de requisição não é válido!'));
		}
	};
	return {
		init: function(obj) {
			return new Promise(function(resolve, reject) {
				request(resolve);
				initLoading(obj, reject);
				methodValidator(obj, reject);
			});
		}
	};
})();