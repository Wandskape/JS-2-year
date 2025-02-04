var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function createPhoneNumber(list) {
    var outputList = "(".concat(list.slice(0, 3).join(""), ") ").concat(list.slice(3, 6).join(""), "-").concat(list.slice(6).join(""));
    return outputList;
}
console.log(createPhoneNumber(list));
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        if (number < 0) {
            return 0;
        }
        var sum = 0;
        for (var i = 0; i <= number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
        return sum;
    };
    return Challenge;
}());
var Sum = Challenge.solution(10);
console.log(Sum);
var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;
function reversArray(arr, k) {
    var size = arr.length;
    k = k % size;
    arr = __spreadArray(__spreadArray([], arr.slice(size - k), true), arr.slice(0, size - k), true);
    return arr;
}
console.log(reversArray(nums, k));
var nums1 = [1, 3];
var nums2 = [2];
function median(nums1, nums2) {
    var mergedNums = __spreadArray(__spreadArray([], nums1, true), nums2, true).sort(function (a, b) { return a - b; });
    var size = mergedNums.length;
    if (size % 2 === 0) {
        var num1 = mergedNums[size / 2 - 1];
        var num2 = mergedNums[size / 2];
        return (num1 + num2) / 2;
    }
    else {
        return mergedNums[Math.floor(size / 2)];
    }
}
var medianNum = median(nums1, nums2);
console.log(medianNum);
