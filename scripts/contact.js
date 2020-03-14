//onload callback function
function contact() {

    var myForm = document.getElementById("contactForm");

    // listen for a onBlur event event on the first and last Name field 
    myForm.firstName.addEventListener("blur", validatefirstName);
    myForm.lastName.addEventListener("blur", validatelastName);
    myForm.email.addEventListener("blur", validateemail);
    myForm.message.addEventListener("blur", validatemessage);
    
    //validate form on submit
    myForm.addEventListener('submit', validateForm);


    // submit event validation 
    function validateForm(event) {

        //if any of the form feilds are not valid prevent the form from submitting 
        if (validatefirstName() == false || validatelastName() == false || validateemail() == false || validatemessage() == false) {
            event.preventDefault();
        }

        event.preventDefault();

    }

    //generic required field validation fucntion 
    function validateRequired(element) {

        if (element.value == "") {
            element.style.backgroundColor = "red";
            return false;
        } else {
            element.style.backgroundColor = "";
            return true;
        }
    }

    // validate first name
    function validatefirstName(event) {
        var myForm = document.getElementById("contactForm");
        return validateRequired(myForm.firstName);
    }

    //validate last name
    function validatelastName(event) {
        var myForm = document.getElementById("contactForm");
        return validateRequired(myForm.lastName);
    }
    
    function validateemail(event) {
        var myForm = document.getElementById("contactForm");
        return validateRequired(myForm.email);
    }
    
    function validatemessage(event) {
        var myForm = document.getElementById("contactForm");
        return validateRequired(myForm.message);
    }

    // set up a new date nd time object 
    var today = new Date();

    var curr_hour = today.getHours();
    var curr_minute = today.getMinutes();
    var curr_second = today.getSeconds();

    var curr_time = curr_hour + ":" + curr_minute + ":" + curr_second;

    document.getElementById("clock-large").innerHTML = curr_time;
    document.getElementById("date-large").innerHTML = today.toDateString();
}