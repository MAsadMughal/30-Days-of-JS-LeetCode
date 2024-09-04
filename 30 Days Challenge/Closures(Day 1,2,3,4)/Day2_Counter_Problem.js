
var createCounter = function (n) {

    return function () {
        return n++;
    };
    return n++;
};

//It helps to understand concepts of functions within functions where value from parent function is mutable in child..