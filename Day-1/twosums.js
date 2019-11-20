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




//Using The Hash method
var nums = [5,10,20];
var target = 30; //So the expected answer would be index of 1 and 2
function twoSums(nums){
    //First, always loop through the array object
    for(var i = 0; i < nums.length; i++){
        for(var x = i + 1; x < nums.length; x++){
            var map = new Map();
            var completeTarget = nums[x] + nums[i];
            // Map.has is used to check whether the element has a specific key that was declared. In this case the CompleteTarget.
            if(map.has(completeTarget)){
                /* Map.set is used to update the element with specific key that was declared. completeTarget in this case. 
                 Map.set(key,value)*/
             map.set(nums[i],i)
             map.set(nums[x],x)
            }
         //Map.get is used to return specified element from the array object.
         return [map.get(completeTarget),i]
         return [map.get(completeTarget),x]
        }
    }
}