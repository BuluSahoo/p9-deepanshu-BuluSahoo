function maxSubArraySum(A) {
    let maxSoFar = A[0]; // Initialize the maximum sum found so far
    let maxEndingHere = A[0]; // Initialize the maximum sum ending at the current position
    
    for (let i = 1; i < A.length; i++) {
      // Calculate the maximum sum ending at the current position
      maxEndingHere = Math.max(maxEndingHere + A[i], A[i]);
      
      // Update the maximum sum found so far
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
  }

  console.log(maxSubArraySum([-2, 4, -3, 4,  2, 1, -5, 4]))