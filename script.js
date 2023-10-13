function threeSum(arr, target) {
// write your code here
	arr.sort((a,b) => a-b);
	let ans = 10000;
	let diff = 10000;
	for(let i=0 ; i<arr.length ; i++){
		let l = i+1, r = arr.length - 1;
		while(l < r){
			let sum = arr[i] + arr[l] + arr[r];
			if(sum == target){
				return sum;
			}
			else if(sum < target){
				l++;
			}
			else{
				r--;
			}
			if(Math.abs(sum-target) < diff){
				diff = Math.abs(sum-target);
				ans = sum;
			}
		}
	}
	return ans;
}

module.exports = threeSum;
