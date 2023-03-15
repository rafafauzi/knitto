function fizzbuzz(n) {
    for (var i = 1; i <= n; i++) {
        var output = "";
        if (i % 3 === 0)
            output += "Fizz";
        if (i % 5 === 0)
            output += "Buzz";
        console.log(output || i);
    }
}
fizzbuzz(15);
