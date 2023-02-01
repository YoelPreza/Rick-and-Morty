import React from "react";

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default function validation(inputs) {
   
    const errors = {};

    if(inputs.userName.length >= 1 && !regexEmail.test(inputs.userName)){
        errors.userName = "Opps!!!    Must be a valid  e-mail addres"
    }

    if(inputs.password.length >= 1 && !regexPassword.test(inputs.password)){
        errors.password = "Must contain at least one number and 6 to 10 characters"
    }


// if(!inputs.userName){
//     errors.userName = "Must be an e-mail addres"
// }if(!regexEmail.test(inputs.userName)){
//         errors.userName = "Must be an e-mail addres"
//     } if(inputs.password == ""){
//         errors.password = "Password must have a length betwen 6 to 10 characters" 
//     } if(inputs.password <= 0){
//         errors.password = "Must contain at least one number"
//     }
    
    return errors;

}