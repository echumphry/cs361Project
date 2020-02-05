
class Transaction {
  constructor() {
    this.total = 0;
    alert("a new transaction has started");
    
    
  }
  addNickel() {

    this.total += .05;
    
  }

  addDime() {

    this.total += .10;
  
  }

  addQuarter(){

    this.total += .25;

  }

  addDollar(){

    this.total += 1.00;
  

  }
}


var transactionTotal = 0;  

mainDisplay(transactionTotal);
cashModalDisplay(transactionTotal);





// func startCashTransaction runs when the coin button is pushed
// it creates a new object(transaction) where the user can click on 
// the coin buttons adding to the total. 

function startCashTransaction(){

var myTransaction = new Transaction();

    $('#nickel').click(function(){

        myTransaction.addNickel();
        cashModalDisplay(myTransaction.total);

  
    });

    $('#dime').click(function(){

      myTransaction.addDime();
      cashModalDisplay(myTransaction.total);
     
    });

     $('#quarter').click(function(){

      myTransaction.addQuarter();
      cashModalDisplay(myTransaction.total);
     
    });

     $('#dollar').click(function(){

      myTransaction.addDollar();
      cashModalDisplay(myTransaction.total);

    });

    $('#coinClose').click(function(){

      myTransaction.total = 0;
      cashModalDisplay(myTransaction.total);

    }); 

    $('#coinOk').click(function(){

      cashModalDisplay(myTransaction.total);
      return mainDisplay(myTransaction.total);

    }); 

  }


  function cancelReturn(){

    var amount = document.getElementsByClassName("amountContainer")[0].innerHTML;
    alert( amount+" was returned");
    amount = 0;
    mainDisplay(amount);
   

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






	
	
  // Retrieve
  //document.getElementById("result").innerHTML = sessionStorage.getItem("storedTransaction");
  //converts strings back to numbers
  // var = Number(checking.amount);  



// function insertCoins(myTransaction){

//   var thisTransaction;

//   while (myTransaction != getElementById("coinClose"){

//     thisTransaction = $('#nickel').click(function(){

//       myTransaction.addNickel();

  
//     });

//     thisTransaction = $('#dime').click(function(){

//       myTransaction.addDime();
     
//     });

//     thisTransaction = $('#quarter').click(function(){

//       myTransaction.addQuarter();
     
//     });

//     thisTransaction = $('#dollar').click(function(){

//       myTransaction.addDime();

//     });

//   }


// }


// function addNickel(){  

// alert("made it to addNickel function") 


// }

// function addDime(){
 
//  alert("made it to addDime function") 
	
// }

// function addQuarter(){

// alert("made it to addQuarter function") 
	
// }

// function addDollar(){

// alert("made it to addDollar function") 
	
// }











