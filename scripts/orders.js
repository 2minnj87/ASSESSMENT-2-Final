function myOrders() {

    var form = document.getElementById("orders");
    form.addEventListener("change", formChanged);
    form.addEventListener("submit", validateForm);

    /**
      onChange callback function
    **/
    function formChanged(event) {
            var form = document.getElementById("orders");

            //initialise variables
            var subTotal = 0;
            var taxes = 0;
            var total = 0;
            var choices = "";

            //set a for loop
            for (var i = 0; i < form.check.length; i++) {
                if (form.check[i].checked) {
                    //convert the data attribute value from a string to a float
                    numberTotal = parseFloat(form.check[i].dataset.price);
                    subTotal = subTotal + numberTotal;
                }
            }
            //calculate taxes        
            var taxes = (subTotal * .2);
            var total = subTotal + taxes;

            //display summary of items totals
            document.getElementById("subTotal").innerHTML = "£" + subTotal.toFixed(2);
            document.getElementById("taxes").innerHTML = "£" + taxes.toFixed(2);
            document.getElementById("total").innerHTML = "£" + total.toFixed(2);

        }
    

    var form = document.getElementById("orders");
    //form.addEventListener("change", formChanged);
    
         // listen for a onBlur event event on the first and last Name field 
    form.firstName.addEventListener("blur", validatefirstName);
    form.addressLine.addEventListener("blur", validateaddressLine);
    form.postcode.addEventListener("blur", validatepostcode);
    form.Email.addEventListener("blur", validateEmail);
    form.myTelephone.addEventListener("blur", validatemyTelephone);
    
    //validate form on submit
    form.addEventListener("submit", validateForm);

    // submit event validation 
    function validateForm(event) {
        
        //if any of the form feilds are not valid prevent the form from submitting 
        if (validatefirstName() == false || validateaddressLine() == false || validatepostcode()==false || validateEmail() == false || validatemyTelephone() == false) {
            event.preventDefault();
        }
    }

    //generic required field validation fucntion 
    function validateRequired(element) {

        if (element.value == "" ) {
            element.style.backgroundColor = "red";
            return false;
        } else {
            element.style.backgroundColor = "";
            
        }
    }
        
    // validate first name
    function validatefirstName(event) {
        var myForm = document.getElementById("orders");
        return validateRequired(myForm.firstName);
    }
    
     function validateaddressLine(event){
        var myForm =document.getElementById("orders");
        return validateRequired(myForm.addressLine);
    }
    
    function validatepostcode(event){
        var myForm =document.getElementById("orders");
        return validateRequired(myForm.postcode);
    }

    function validateEmail(event){
        var myForm =document.getElementById("orders");
        return validateRequired(myForm.Email);
    }
    
    function validatemyTelephone(event){
        var myForm =document.getElementById("orders");
        return validateRequired(myForm.myTelephone);
    }
    return true;
}
    
   
        
   

   

  