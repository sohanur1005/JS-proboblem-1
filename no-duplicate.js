function noDuplicate(arr) {
    const updateArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (updateArr.includes(arr[i]) === false) { 
            updateArr.push(arr[i]);                  
        }
    }
    return updateArr;
}

const arr = ['abul','kabul','cabul','dabul','abul','kabul'];
const num = [5,7,8,5,1,7,5,7];

console.log(noDuplicate(arr)); 
console.log(noDuplicate(num)); 
