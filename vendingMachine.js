

var transactionTotal = 0;  

mainDisplay(transactionTotal);
cashModalDisplay(transactionTotal);


class insertCash {
  constructor() {
  	this.total = 0;
    this.nickel = .05;
    this.dime = .10;
    this.quarter = .25;
    this.dollar = 1.00;
  }
  addNickel() {

  	this.total = this.total + this.nickel;
    return this.total; 
  }

  addDime() {

  	this.total = this.total + this.dime;
    return this.total; 
  }

  addQuarter(){

  	this.total = this.total + this.quarter;
  	return this.total;

  }

  addDollar(){

  	this.total = this.total + this.quarter;
  	return this.total;

  }
}

// var myTransaction = new insertCash();
//  myTransaction.addDollar;
//  myTransaction.addQuarter;
//  myTransaction.total = myTransaction.quarter  +  myTransaction.dollar;
//  alert(myTransaction.total);


function startCashTransaction(){

	var myTransaction = new insertCash();


	alert("start cash transaction funct works");


	myTransaction = $('#nickel').click(function(){
     addNickel()
	});

	myTransaction = $('#dime').click(function(){
     addDime()
	});

	myTransaction = $('#quarter').click(function(){
     addQuarter()
	});

	myTransaction = $('#dollar').click(function(){
     addDollar()
	});

	
	//alert("Transaction Started, value is: " + myTransaction.total)

	
  // Retrieve
  //document.getElementById("result").innerHTML = sessionStorage.getItem("storedTransaction");
  //converts strings back to numbers
  // var = Number(checking.amount);  

}


function addNickel(){  

alert("made it to addNickel function") 


}

function addDime(){
 
 alert("made it to addDime function") 
	
}

function addQuarter(){

alert("made it to addQuarter function") 
	
}

function addDollar(){

alert("made it to addDollar function") 
	
}


function currencyFormat(amount){

	const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })	

	amount = formatter.format(amount);

	return amount;

}




function mainDisplay(total){



		const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })	



  	total = formatter.format(total);

 	document.getElementsByClassName("amountContainer")[0].innerHTML = total;
 	


}

function cashModalDisplay(amount){

	const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })	



  	amount = formatter.format(amount);

 	document.getElementsByClassName("amountContainer")[1].innerHTML = amount;

 	return amount;

}


function addCash(){




}






