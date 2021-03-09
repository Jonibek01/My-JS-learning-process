//======================= Exercise N1 ==========================//
//======================= Valid Password, Username =============//

function isValidPassword (password, username) {
    const tooShort = password.length < 8;
    const notSpaces = password.indexOf(' ') !== -1;
    const notContain = password.indexOf(username) !== -1;
    if (!tooShort && !notSpaces && !notContain) return true;
    return false;
    //return !tooShort && !hasSpace && !tooSimilar;
    /*if (tooShort || hasSpace || tooSimilar) return false;
	return true;*/
    //

}
//======================= Exercise N2 ==========================//
//======================= Finding Average ======================//

function findArray (arr) {
    let total = 0;
	//loop over each num
    // giving name to the each array 
    for (let num of arr) {
		//add them together
        total += num ;
    }
	//divide by number of nums
    let res = total/arr.length;
    return res;
}

//======================= Exercise N3 ==========================//
//==================== Finding Alphabet letter =================//

function isPangram (sentence) {
    let lowerCased = sentence.toLowerCase();
    for(let char of 'abcdefghijklmnopqrstuvwxyz'){
        //instead of includes we can also use indexOf cuz IE not supports that
        if (!lowerCased.includes(char)){
            return true;
        }
    }
    return false;


    

}
//======================= Exercise N4 ==========================//
//==================== getCard, Randomly select ================//

// function getCard() {
//     const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "B", "C", "D", "E"];
//     values.toString;
//     let vaIdx = Math.floor(Math.random() * values.length);
//     let value = values[vaIdx];
    
//     const suits = ["clubs", "kitchen", "room", "house"];
//     let suIdx = Math.floor(Math.random() * suits.length);
//     let suit = suits[suIdx];
//     return {value: value, suits: suit};

// }
// easiest way
function pick(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard() {
    const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "B", "C", "D", "E"];
    values.toString;
    
    const suits = ["clubs", "kitchen", "room", "house"];

    return { value: pick(values), suits: pick(suits) };

}