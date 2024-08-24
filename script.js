function threeSum(arr, target) {
// write your code here
	let ansArr = [], min = Infinity;

for(i=0;i<arr.length-2;i++){
    for(j=i+1;j<arr.length-1;j++){
        for(k=j+1;k<arr.length;k++){
            ansArr.push(arr[i]+arr[j]+arr[k]);
        }
    }
}

let ansArr2 = [];
for(i=0;i<ansArr.length;i++){
    ansArr2[i] = Math.abs(ansArr[i] - target);
}

ansArr2.sort((a,b) => a-b);
min = ansArr2[0] + target;
	return min;
}

module.exports = threeSum;
