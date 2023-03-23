
// taken help from friends to solve this problem

function spiralOrder(matrix) {
    if (matrix.length === 0) return [];
  
    const m = matrix.length; // number of rows
    const n = matrix[0].length; // number of columns
    const result = [];
  
    let top = 0;
    let bottom = m - 1;
    let left = 0;
    let right = n - 1;
  
    while (top <= bottom && left <= right) {
      // Traverse right
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
  
      // Traverse down
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
  
      // Traverse left
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          result.push(matrix[bottom][i]);
        }
        bottom--;
      }
  
      // Traverse up
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          result.push(matrix[i][left]);
        }
        left++;
      }
    }
  
    return result;
  }

  let spiralMatrix = 
    [[1,2,3],
    [4,5,6],
    [7,8,9]]
  
    console.log(spiralOrder(spiralMatrix))