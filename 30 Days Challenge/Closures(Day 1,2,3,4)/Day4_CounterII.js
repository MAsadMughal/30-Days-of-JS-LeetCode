
var createCounter = function (init) {
    var result = init;
    return {
        reset: function () {
            result = init;
            return result;
        },
        increment: function () {
            return ++result;
        },
        decrement: function () {
            return --result;
        }
    }
};
//ENDING UP CLOSURES HERE
