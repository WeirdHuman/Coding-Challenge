var nums = [3,4,5];
var target = 9;
var twoSum = function(nums, target) {
    //Loop Through the array. 
    for(var i = 0; i < nums.length; i++){
        for(var x = i+1; x < nums.length; x++){
            //Condition for checking target.
                if(nums[i] +nums[x] === target){
                    return [i,x]
                }
             }
        }
};
