let list: number[] = [1,2,3,4,5,6,7,8,9,0];
let n1:number | string = 5;


function createPhoneNumber(list:number[]): string{
    const outputList = `(${list.slice(0,3).join("")}) ${list.slice(3,6).join("")}-${list.slice(6,).join("")}`;
    return outputList;
}

console.log(createPhoneNumber(list));

class Challenge {
    static solution(number: number): number {
        if(number < 0){
            return 0;
        }
        let sum:number = 0;
        for(let i = 0;i<=number;i++){
            if(i%3==0 || i%5==0){
                sum+=i;
            }
        }
        return sum;
      }
}

const Sum = Challenge.solution(10);

console.log(Sum);

let nums:number[] = [1,2,3,4,5,6,7];
let k:number = 3;
function reversArray(arr:number[], k:number):number[]{
    let size:number = arr.length;
    k = k % size;
    arr = [...arr.slice(size-k),...arr.slice(0,size-k)];
    return arr;
}

console.log(reversArray(nums, k));

let nums1:number[] = [1,3];
let nums2:number[] = [2];

function median(nums1:number[], nums2:number[]):number{
    const mergedNums:number[] = [...nums1,...nums2].sort((a,b)=>a-b);
    let size = mergedNums.length;
    if(size%2===0){
        let num1 = mergedNums[size/2-1];
        let num2 = mergedNums[size/2];
        return (num1+num2)/2;
    }
    else{
        return mergedNums[Math.floor(size/2)];
    }
}

const medianNum:number = median(nums1, nums2);

console.log(medianNum);

   