var myImage;

function main() {

    myImage = document.getElementById("myImage");

    //complete
    var image1Link = document.getElementById("image1Link");
    var image2Link = document.getElementById("image2Link");
    var inmage3Link = document.getElementById("image3Link");

    image1Link.addEventListener("click", image1Clicked);
    image2Link.addEventListener("click", image2Clicked);
    image3Link.addEventListener("click", image3Clicked);


    // add image 1 and 3 callback functions

    function image1Clicked() {
        myImage.src = "img/pizzaVarietyBanner3.jpg";

        //complete
    }

    function image2Clicked() {
        myImage.src = "img/PickMix.jpg"

        //complete
    }

    function image3Clicked() {
        myImage.src = "img/pizzaVarietyBanner2.jpg"

        //complete
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