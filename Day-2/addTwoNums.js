function addTwoNumbers(l1, l2){
    //Initialize the current node as well as the carry
    var currentNode = new ListNode(null);
    var carry = 0;
    var lastNode = currentNode;
    // Looping through l1 and l2
    while(l1 || l2 || carry){
        var sums = carry;
        if(l1){
            sums += l1.val;
            l1 = l1.next;
        }
        if(l2){
            sums += l2.val;
            l2 = l2.next;
        }
        if(sums > 9){
            carry = 1;
            sums = sums % 10;
        } else {
            carry = 0;
        }
        var result = new ListNode(sums);
        lastNode.next = result
        lastNode = result
    }
    return currentNode.next
};