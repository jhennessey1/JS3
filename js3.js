var phoneNumber = prompt("Enter your phone number with dashes. (xxx-xxx-xxxx)")

if (phoneNumber[3] !== "-" || phoneNumber[7] !== "-") {
	alert("That is not a valid phone number.")
}
else if (isNaN(phoneNumber.substring[0,3]) === true) {
	alert("That is not a valid phone number.")
}
else if (isNaN(phoneNumber.substring[4,7]) === true) {
	alert("That is not a valid phone number.")
}
else if (isNaN(phoneNumber.substring[-4]) === true) {
	alert("That is not a valid phone number.")
}
else {
	alert("That is a valid phone number.")
}

var birthday = prompt("What is your date of birth? (mm/dd/yy)")

if (birthday[2] === "/" && birthday[5] === "/") {
	alert("That is a valid date of birth.")
}
else {
	alert("That is not a valid date of birth.")
}

var postalCode = prompt("What is your postal code?")

if (postalCode.length === 5 || (postalCode.length === 10 && postalCode[5] === "-")) {
	alert("That is a valid postal code.")
}
else {
	alert("That is not a valid postal code.")
}

var state = prompt("In what state do you reside? (two letter abbreviation)")

if (state.length === 2) {
	alert("That is a valid state abbreviation.")
}
else {
	alert("That is not a valid state abbreviation.")
}

var maritalStatus = prompt("Are you married? (yes or no)")

if (maritalStatus.toLowerCase() === ("yes" || "no")) {
	alert("Ok")
}
else {
	alert("Yes or no, please.")
}
