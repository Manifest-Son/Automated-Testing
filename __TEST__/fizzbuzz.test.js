const fizzbuzz  = require("../fizzbuzz")

it("tests the outptut of 45", () =>{
    expect( fizzbuzz(45)).toBe("FizzBuzz")
})
it("tests the outptut of 9", () =>{
    expect( fizzbuzz(9)).toBe("Fizz")
})
it("tests the outptut of 100", () =>{
    expect( fizzbuzz(100)).toBe("Buzz")
})
it("tests the outptut of 97", () =>{
    expect( fizzbuzz(97)).toBe(97)
})
