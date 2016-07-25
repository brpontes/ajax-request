//Inicia uma requisição
var AjaxRequest = (function(){
	//Funções públicas
	//Requisição ao servidor
	var request = function(callback) {
		//Instâncai do objeto XHR
		req = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		//Observa a mudança do status
		req.onreadystatechange = function() {
			if (req.readyState == 4 && req.status == 200) {
				callback(req.response);	
			} 
		};
	};
	//Loading
	var initLoading = function(obj, callback) {
		var loading = obj.loading;
		var loadImg = obj.loadImg;

		if (loading) {
			//Se existir a propriedade loading
			//a propriedade loadImg será obrigatória
			(loadImg) ? loading.innerHTML = loadImg : callback(new Error('Informe o elemento HTML a ser inserido no carregamento'));
		}
	};
	//Valida os métodos
	var methodValidator = function(obj, callback) {
		//Propriedades do objeto
		var method = obj.method;
		var url = obj.url;
		var data = obj.data;
		//Validação
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
	//Funções privadas
	return {
		init: function(obj) {
			return new Promise(function(resolve, reject) {
				//Inicia a requisição
				request(resolve);
				//GIF carregando
				initLoading(obj, reject);
				//Validando o método da requisição
				methodValidator(obj, reject);
			});
		}
	};
})();