function enlistment() {
let userAge = prompt("How old are you: ");
let userGender = prompt("Type M for male or F for female:  ");

    if (userAge >= 18 && userGender == "M") {
        console.log("You need to enlist in the military");
    } else if(userAge <= 18 && userGender == "M"){
        console.log("You are younger than 18 you can wait a few years");
    }else{
        console.log("You don't need to enlist in the military");
    }
}