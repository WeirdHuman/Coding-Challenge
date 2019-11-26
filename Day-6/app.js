var height = [1,8,6,2,5,4,8,3,7];
var maxArea = (height)=>{
    var start = 0; 
    var end = height.length - 1;
    var max = 0;
    while(start < end){
        if(height[start] < height[end]){
            max = Math.max(max, (height[start] * (end - start)));
            start += 1;
        } else {
            max = Math.max(max, (height[end] * (end - start)));
            end -= 1; 
        }
    }
    return max;
}