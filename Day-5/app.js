
    var findMedianSortedArrays = function(nums1, nums2) { 
        //concat() method was used to combined two arrays together.
        //sort() method used to sorted the array in accending order.
        var newArray = nums1.concat(nums2).sort(customSort); //Combined two array together.
        var middleNumber = newArray.length / 2;
        if(middleNumber % 2 > 0 && newArray.length % 2 > 0){ //checking for odd number.
            return newArray[Math.floor(middleNumber)]; // Math.floor() is for rounding up the number.
        } else { //checking for even number.
            return ( newArray[ middleNumber - 1] + newArray[middleNumber] ) / 2; 
        }
    };
function customSort(a, b){
    // use custom sort function to properly sort numbers;
    return a - b 
};