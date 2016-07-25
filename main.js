//Inicia uma requisição
var AjaxRequest = (function(){
	return {
		init: function(obj) {
			return new Promise(function(resolve, reject) {
				var req;
				var method = obj.method;
				var url = obj.url;
				var data = obj.data;
				var loading = obj.loading;

				req = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

				req.onreadystatechange = function() {
					if(req.readyState == 4 && req.status == 200) {
						resolve(req.response);	
					} 
				};

				//GIF CARREGANDO
				if (typeof loading !== 'undefined') {
					loading.innerHTML = '<center><img src="assets/images/loading.gif" width="30" style="margin:0;" /></center>';
				}

				//Validando o método da requisição
				if (method.toUpperCase() == 'POST' ) {
					if (typeof data !== 'undefined') {
						req.open(method.toUpperCase(), url, true);
						req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
						req.send(JSON.stringify(data));
					} else {
						reject(new Error('Informe os parâmtros para a requisição!'));
					}
				} else if (method.toUpperCase() == 'GET') {
					req.open(method.toUpperCase(), url, true);
					req.send();
				} else {
					reject(new Error('O método da requisição não é válido!'));
				}
			});
		}
	};
})();