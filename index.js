function receivesAFunction(callback) {
    callback();
}

function babyBabyShark() {
    return function () {
        console.log("Baby Baby Shark");
    }
}
function returnsANamedFunction() {
  return babyBabyShark;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Hello World");
    }
}