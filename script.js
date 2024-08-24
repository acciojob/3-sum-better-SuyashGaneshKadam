function threeSum(arr, target) {
// write your code here
	let ansArr = [];

for(i=0;i<arr.length-2;i++){
    for(j=i+1;j<arr.length-1;j++){
        for(k=j+1;k<arr.length;k++){
            ansArr.push(arr[i]+arr[j]+arr[k]);
        }
    }
}

let ansArr2 = [];
for(i=0;i<ansArr.length;i++){
    ansArr2[i] = (ansArr[i] - target);
}

let min = 0, value = 0;

for(i=0;i<ansArr2.length;i++){
    if(min > ansArr2[i]){
        min = ansArr[i];
    }
}
	return min;
}

module.exports = threeSum;
