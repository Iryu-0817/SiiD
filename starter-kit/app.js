const binarySearch = (array, key) => {
    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;

    while (low <= high) {
        mid = Math.floor((low + high) / 2, 10);
        element = array[mid];

        if(element < key) {
            low = mid + 1;
        } else if (element > key) {
            high = mid - 1; 
        } else {
            return mid;
        }
    }

return -1;

}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));