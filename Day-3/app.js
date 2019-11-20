var lengthOfLongestSubString = function(string){
    var currentString = "";
    var longestString = "";
    for(i in string){
        var current = string[i];
        var currentPosition = currentString.indexOf(current);
        if(currentPosition === -1){
            currentString += current;
        } else {
            longestString = Math.max(longestString, currentString.length);
            currentString = currentSting.substring(currentPosition + 1) + current;
        }
    }
    longestString = Math.max(longestString, currentString.length);
    return longestSting;
}