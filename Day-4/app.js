var number = 1234
function reverseNumber(number){
    var string = number.toString() //Converting number into a string. [1234]
    var stringArray = string.split('') //Turn a string into array of string such that [1,2,3,4];
    var reverseArray = stringArray.reverse() //revesing the array [4,3,2,1];
    var reverseNumber = reverseArray.join('') // return a new string. join('') will give comas between number whereas join() will not inlcuded the commas.
    var integer = parseInt(reverseNumber) // parseIn() used to convert a string array into integer.
    if(integer > 0x7FFFFFFF){
        return 0; // 0x7FFFFFFF this is maximum positive number for 32-bit
    } else {
        return integer * Math.sign(number) // Math.sign() used for returning positive and negative number. +1 or -1.
        }
    }
    