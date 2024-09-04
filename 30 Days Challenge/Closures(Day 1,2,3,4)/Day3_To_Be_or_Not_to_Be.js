
var expect = function (val) {
    return {
        toBe: function (val2) {
            if (val !== val2) throw new Error("Not Equal");
            return true;
        },
        notToBe: function (val3) {
            if (val === val3) throw new Error("Equal");
            return true;
        }
    }
};

/*Learnings:
1: How to Throw Error.
2: Closures: The expect function captures the value val and returns an object with methods (toBe and notToBe) that can still
   access this value even after expect has finished executing.
3: Function chaining: By returning an object from expect with methods, it allows you to chain calls like expect(5).toBe(5) or
   expect(5).notToBe(3).
*/