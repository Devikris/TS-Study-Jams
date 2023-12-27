function registerUser(name:string, birthYear:number)
 {
    const isUserOfAge = checkAge(birthYear);
    if (isUserOfAge) 
    {
        console.log("User Registration Success!");
    } else 
    {
        console.log("User Registration Failed!");
    }
}
function checkAge(birthYear:number)
 {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age >= 18;
}
const userName = "Devi Krishna R";
const userBirthYear = 2004;
registerUser(userName, userBirthYear);


//  [LOG]: "User Registration Success!" //
