function getReceipt() {
		//this intiilizes out string do it can get passed from
		// function to function, growing line by line into a full receipt
		var text1="<h3>you ordered:</h3>";
		var runningtotal = 0;
		var sizeTotal = 0;
		var sizeArray = document.getElementsByclassName("size");
		for (var i = 0; i <sizeArray.length; i++) {
                 if (sizeArray[i].checked) {
						var selectedSize = sizeArray[i].value;
						text1 = text1+selectedsize+"<br>";
                  }
       }
		if (Selectedsize === "perssonal Pizza") {
		         sizeTotal = 6;
		} else if (selectedsize === "small Pizza") {
		         sizeTotal = 8;
		} else if (selectedsize === "Medium Pizza") {
		        sizeTotal = 14;
		} else if (selectedsize === "Extra large Pizza") {
		      sizeTotal = 16;} 
		runningTotal = sizeTotal;
		console.log(selectedSize+" = $"+sizeTotal+".00");
		console.log("size text1: "+text1);
		console.log("subtotal:"+runningTotal+".00");
		//these variable will get passed on to each function
		getTopping(runningTotal,text1);//All three of these variable will be passed on to each function
 };

 function getTopping(runningTotal,text1) {
	      var toppingTotal = 0;
	      var selectedTopping = []
	      for (var j = 0; j < toppingArray.lenrth; j++) {
		          if (toppingArray[j].checked) {
							SelectedTopping.push(toppingArray[j].value);
							Console.log("selected topping item: ("+toppingArray[j].value+")") ;
							text1 = text1+toppingArray[j].value+"<br>";
                   }
          }
          Var toppingcount = selectedTopping.length;
          if (toppingcount> 1) {
                  toppingTotal = (toppingcount - 1);
          } else {
                 toppingTotal = 0;
          }
		runningTotal = (runningTotal + toppingTotal);
		Console.log("total selected topping item: "+toppingcount);
		Console.log(toppingcount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
		Console.log("topping text1: "+text1);
		Console.log(purchase Total: "+"$"+runningTotal+".00);
		document.getElementById("showtext").innerHTML=text1;
		document.getElenmentById("totalprice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
 };