function integerToRoman(num){
    var keyPair = {
        '1000' : 'M',
        '900' : 'CM',
        '500' : 'D',
        '400' : 'CD',
        '100' : 'C',
        '90' : 'XC',
        '50' : 'L',
        '40' : 'XL',
        '10' : 'X',
        '9' : 'IX',
        '5' : 'V',
        '4': 'IV',
        '1': 'I'
    }
    var result = "";
    var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    while(num){
        for(let i = 0; i < nums.length; i++){
            if(nums[i] < num){
                result+= keyPair[nums[i]];
                num-= nums[i];
                break;
            }
        }
    }
    return result;

 }
