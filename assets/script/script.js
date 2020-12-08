 // Code to make number buttons work starts here
function insert(num){
   var myString = document.form.textview.value;
   var lastChar = myString[myString.length - 1];
   if (myString.length < 30) {
    if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
     document.form.textview.value = myString + num;
    }else if(num != lastChar){
     document.form.textview.value = myString.replace(lastChar, num);
    }
   }
  }
// Code to make number buttons work ends here

// Code to make equal button work starts here
  function equal(){
   var sum = document.form.textview.value;
   if (sum) {
    document.form.textview.value = eval(sum);
   }
  }
// Code to make equal button work ends here

// Code to make clear button work starts here
  function clean(){
   document.form.textview.value = '';
  }
// Code to make clear button work ends here

// Code to make backspace button work starts here
  function back(){
   var exp = document.form.textview.value;
   document.form.textview.value = exp.substring(0,exp.length - 1);
  }
// Code to make backspace button work ends here