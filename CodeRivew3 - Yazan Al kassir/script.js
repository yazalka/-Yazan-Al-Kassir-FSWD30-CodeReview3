function claculateInsurance(name, age, country, horsePower) {

	var name = document.getElementById('name').value;
	var age = document.getElementById('age').value;
	var country = document.getElementById('country').value;
	var horsePower = document.getElementById('horsePower').value;
	var insurance = horsePower * 100 / age + 150;


	document.getElementById("insnumber").innerHTML = "Dear Mr / Mrs " + name + " Your car insuranse in " + country + " will be: " + insurance + "€";

}

