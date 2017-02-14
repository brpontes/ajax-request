[![N|Solid](https://cdn1.iconfinder.com/data/icons/shop-payment-vol-6/128/shop-08-3-128.png)](#)

# Ajax Request

Ajax Request is a easy-to-use javascript module that sends request to the server and get response your way.

# Getting Started
### Instalation

To install you'll just need:

* [Bower](https://bower.io/) - A package manager for the web

```sh
# Installing bower globally
$ npm install -g bower

# Getting package
$ bower install ajax-requests
```

### Basic Usage

Insert the file above your ```</body>``` element:
```sh
<!doctype>
<html>
    <head>
        <title>Ajax Request</title>
    </head>
    <body>
        <!-- Your content goes here -->
        <script src="/path/to/script/ajax-request.min.js"></script>
    </body>
<html>
```
Make the request:
```sh
AjaxRequest.init({
    url: 'src/php/foobar.php',
    method: 'POST', # Could be POST or GET
    loading: foo, # Optional. ID of element that will contains the gif loading
    loadImg: '<img src="src/images/loading.gif" alt="loading" />', # Optional. The GIF
    data: {foo: bar} # Object with the parameters to the server file
}).then(function(res){
    # If you get a json response
    var result = JSON.parse(res);
    try {
        console.log(result); # Log the result
    } catch (e) {
        console.log(new Error(e));
    }
}, function(err){
    console.log(new Error(err));
});
```

### Parameters
  - ```url```: the file within the server [Required]
  - ```method```: (GET | POST) [Required]
  - ```loading```: ID of the element that will contains the processing status image [Optional]
  - ```loadImg```: The GIF image [Required if ```loading``` parameter was defined]
  - ```data```: Object containing the data that will be send to the server [Required if the ```method``` parameter was POST]
 
### Contributing
Feel free to send pull requets!