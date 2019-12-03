var nums = [-1,2,1,4];
var target = 1;
var threeSumClosest = function(nums, target) {
    var initial = nums[0] + nums[1] + nums[2];
    //loop through the array first time.
    for(var x = 0; x < nums.length; x++){
        //lop through the array second time. Increasing one by x.
        for(var y = x + 1; y < nums.length; y++){
            //one final loop for the array.  Increasing one by y or 2 by x
            for(var z = y + 1; z < nums.length; z++ ){
                //After looping through the array for three times. Add them all together.
                var result = nums[x] + nums[y] + nums[z];
                //Checking to see if the sum of result is greater than the initial. and IF it is the result will be the initial.
                //Math.abs is the absolute of any negative number. Math.abs(-4) will be 4.
                    if(Math.abs(target - initial) > Math.abs(target - result)){
                        initial = result;
                        
                    }
                }
            }
        }
    return initial;
};