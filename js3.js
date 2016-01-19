var phoneNumber = prompt("Enter your phone number with dashes. (xxx-xxx-xxxx)")
var isValid = false
while (!isValid) {
	if (charCounter(phoneNumber)) {
		// alert("That is a valid phone number")
		isValid = true
	}
	else {
		alert("That is an invalid phone number")
		phoneNumber = prompt("Enter your phone number with dashes. (xxx-xxx-xxxx)")
	}
}

var birthday = prompt("What is your date of birth? (mm/dd/yy)")

while (isValid) {
	if (birthdayValidate(birthday)) {
		// alert("That is a valid date of birth.")
		isValid = false
	}
	else {
		alert("That is not a valid date of birth.")
		birthday = prompt("What is your date of birth? (mm/dd/yy)")
	}
}

var postalCode = prompt("What is your postal code?")

while(!isValid) {
	if (postalValidate(postalCode)) {
		// alert("That is a valid postal code.")
		isValid = true
	}
	else {
		alert("That is not a valid postal code.")
		postalCode = prompt("What is your postal code?")
	}
}

var state = prompt("In what state do you reside? (two letter abbreviation)")

while(isValid) {
	if (stateValidate(state)) {
		// alert("That is a valid state abbreviation.")
		isValid = false
	}
	else {
		alert("That is not a valid state abbreviation.")
		state = prompt("In what state do you reside? (two letter abbreviation)")
	}
}

var maritalStatus = prompt("Are you married? (yes or no)")

while(!isValid) {
	if (maritalStatus.toLowerCase() === "yes" || maritalStatus.toLowerCase() === "no") {
		alert("Ok")
		isValid = true
	}
	else {
		alert("Invalid response.")
		maritalStatus = prompt("Are you married? (yes or no)")
	}
}

function charCounter(number) {
	var charCount = 0
	for (i = 0; i < number.length; i++) {
		if (isNaN(number[i]) === true) {
			charCount += 1
		}
	}
	if (charCount != 2) {
			return false
		}
		else if (number.length != 12) {
			return false
		}
		else {
			return true
		}
}

function birthdayValidate(date) {
	var charCount = 0
	for (i = 0; i < date.length; i++) {
		if (isNaN(date[i]) === true) {
			charCount += 1
		}
	}
	if (charCount != 2) {
		return false
	}
	else if (date.length != 8) {
		return false
	}
	else if (birthday.substring(0, 2) > 12) {
		return false
	}
	var months31 = [01, 03, 05, 07, 08, 10, 12]
	var months30 = [04, 06, 09, 11]
	var feb = [02]
	if (birthday.substring(0,2) in feb) {
		if (birthday.substring(3, 5) > 28) {
			return false
		}
	}
	else if (birthday.substring(0, 2) in months30) {
		if (birthday.substring(3, 5) > 30) {
			return false
		}
	}
	else {
		if (birthday.substring(3, 5) > 31) {
			return false
		}
	}
	return true
}

function postalValidate(number) {
	var charCount = 0
	for (i = 0; i < number.length; i++) {
		if (isNaN(number[i]) === true) {
			charCount++
		}
	}
	if (charCount === 0 && number.length === 5) {
		return true
	}
	else if (charCount === 1 && number.length === 10 && number[5] === "-") {
		return true
	}
	else {
		return false
	}
}

function stateValidate(state) {
	var states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
	for (i = 0; i < states.length; i++) {
		if (states[i] === state.toUpperCase()) {
			return true
		}
	}
	return false
}