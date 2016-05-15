


var pageWelcome = alert ("Hello, thank you for visiting my page :). My name is Yulia and I only started to learn programming! Don't judge too harsh, I have done this over 2-days begginners' course and I'm working towards adding functionality and content")

function askQuestions() {

var firstName = prompt ("What is your first name?");
var lastName = prompt ("What is your last name?");
var fullName = firstName + ' ' + lastName;
console.log(fullName);

var age = prompt ('How old are you?')
age =parseInt(age) //checks that age is the number!

if(age>=18) {
	console.log("User is an adult");
} else if (age >= 13) {
	console.log ("User is a teenager");
} else {
	console.log ("User is a child");
}

if(firstName == "General" && lastName != "Assembly") {
	console.log("Hello User! Thank you for visitting my page :)");
} else {
	console.log ("No greeting");
}

var faveCommodity = prompt ('What is your favourite commodity?').toLowerCase();
console.log(faveCommodity)

if (faveCommodity === 'nickel' ||
	faveCommodity === 'gold' ||
	faveCommodity === 'platinum' ||
	faveCommodity === 'rodium') {

	$('body').css('color', "pink");

	}
var pageMyFavCom = alert ("Dear" + " " + fullName +" " + "thank you for submitting your favourite commodity, which happens to be" + " " + faveCommodity +". My 3rd favourite commodity is phosfate rock. If web-page hasn't changed then your favorite commodity is not Ni, Au, Pt, Rd");

}



//when the page loads, makes sure that the entirity of document object model (DOM) is fully loaded 

$(function() {

	$('.ask').on('click', askQuestions);

	//when the user clicks a heading
	$('h3').on('click', function() {
		
		//hide the content after the heading
		$(this).next().slideToggle();

	});


});