
function age() {
    let birthYear = prompt("How Old Are You?");


    let ageInDays = birthYear * 365;

    
    document.getElementById("flex-box-result").innerHTML =
			"You are " + ageInDays + " days old  🥳 ";
};

function reset() {
    document.getElementById("flex-box-result").remove();
}