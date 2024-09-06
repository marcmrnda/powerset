const inputEl = document.getElementById('input');
const input1El = document.getElementById('input1');
const calcuBTN = document.getElementById('calcu');
const answerEl = document.getElementById('answer');

let firstArr = [];

function powerSet(S) {
    // Initialize an empty array to store all subsets
    let power_set = [];
    
    // Get the number of elements in S
    let n = S.length;
    
    // Calculate the total number of subsets (2^n)
    let total_subsets = Math.pow(2, n);
    
    // Iterate through each possible subset
    for (let i = 0; i < total_subsets; i++) {
        let subset = [];
        
        // Check each bit in the integer i
        for (let j = 0; j < n; j++) {
            // If the j-th bit of i is set (i.e., 1), include S[j] in the subset
            if ((i & (1 << j)) !== 0) {
                subset.push(S[j]);
            }
        }
        
        // Add the generated subset to the power set
        power_set.push(subset);
    }
    
    // Return the complete power set
    return power_set;
}

calcuBTN.addEventListener('click', function(){
    let arrayValues = inputEl.value
    let splittedValues = arrayValues.split(',');
    for(let i = 0; i<splittedValues.length; i++) {
        firstArr.push(splittedValues[i])
       }
 
    answerEl.textContent =  powerSet(firstArr);
})

