
//EventLoop

//Everything needs to looked in event loop for stack empty, expect the stuffs present in priority queue.

console.log("Hello event loop")

    setTimeout(function () {
        console.log("Callback 1")

            setTimeout(function() {
                console.log("Callback 1.1")
            }, 0);
    }, 1000);

    setTimeout(function () {
        console.log("Callback 2")

    }, 2000);

    setTimeout(function () {
        console.log("Callback 3")

    }, 3000);

