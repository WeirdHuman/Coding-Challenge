var romanToInt = function(string){
    var map = new Map();
    map.set('I',1);
    map.set('V',5);
    map.set('X',10);
    map.set('L',50);
    map.set('C',100);
    map.set('D',500);
    map.set('M',1000);
    
    var result = 0 ;
    var previousValue = 0;
    for( var i = string.length -1; i >=0; i-- ){
        var currentValue = map.get(string[i]);
        if(previousValue <= currentValue){
            result += currentValue;
        } else {
            result -= currentValue;
        }
        previousValue = currentValue;
    }
    return result;

}