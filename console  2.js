function start () {
	  settimeout(function(){
		  alert("Wellcome Back!");
	  },2000)
}

var id =0;
var message =() //alert("wellcome to simplicode");

function start(){
	id = setInterval(message,5000);
}

function stop(){
	 clearTimeout(id);
}