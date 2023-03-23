function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;
  
    for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        const diff = Math.abs(target - sum);
  
        if (diff < Math.abs(target - closestSum)) {
          closestSum = sum;
        }
  
        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          return target;
        }
      }
    }
  
    return closestSum;
  }

  console.log(threeSumClosest([-1, 2, 1, -4], 1))