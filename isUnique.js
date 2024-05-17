function isUnique(arr) {
    // CREATE A SET TO REMOVE DUPLICATES FROM ARRAY
    const uniqueSet = new Set(arr);
    
    // CONVERT THE SET INTO ARRAY
    return [...uniqueSet];
}


const numbers = [1, 2, 3, 4, 4, 5, 1, 2, 6];
const uniqueNumbers = isUnique(numbers);
console.log(uniqueNumbers); // OUTPUT: [1, 2, 3, 4, 5, 6]
