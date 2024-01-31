// The calculation below is equal to 10. This number is then stored within the variable 'comboOne'
let comboOne = 5 + 5;

// The calculation below is equal to 40. This number is then stored within the variable 'comboTwo'
let comboTwo = 8 * 5;

// The calculation below is equal to 39. This number is then stored within the variable 'comboThree'
let comboThree = 78 / 2;

// Below I stored the message to the user as the variable 'userMessage'. This will appear in the pop-up box on web browser. 
let userMessage = 'You have received this message because you have been chosen to open an important vault. Here is the secret combination: ';

// Below is the entire message including the vault codes that will be displayed to the user. It is stored within the variable 'vaultCodeMessage'
let vaultCodeMessage = userMessage + comboOne + '-' + comboTwo + '-' + comboThree;

/*
I declared the function as 'secretCombination()'. This is the same function being used in tandem with the <button> tag in my HTML file. 
When the button is clicked, there is a pop-up box displayed showing the string held within the variable known as 'vaultCodeMessage'. 
*/
function secretCombination() {
    alert(vaultCodeMessage);
}