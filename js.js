/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a white background when you click on one of them*/



/*my function that changes the background */

function changebackground()
{

    $(this).addClass("changeBackground");   /*each time the class is clicked it will add the class*/
}


$(".hello").on("click",changebackground);    /*calling the element and when clicked it will run the function*/




/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */

$("h1").on("mouseover", function(){    /*using the mouseover when h1 is moused over*/
    $(this).toggleClass("changehw")                  /*toggle will make it go back to regular when its finished*/
});


// Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence.

//this takes the first hello class and not all of them . when clickd it runs my addAPeriod function
$(".hello:first").on("click",addAPeriod);
//myfucntion that adds a period
function addAPeriod()
{
    $(this).append(".")
}

