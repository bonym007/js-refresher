const accountId = 1234;
let accountEmail = "example@example.com";
var accountPassword = "password"; //
accountCity = "New York"; //not prefered
let accountState; // This variable is declared but not initialized, so it will have the value undefined.

// accountId = 3214;  // This will throw an error because accountId is a constant and cannot be reassigned.

accountEmail = "example1@gmail.com"; // This is allowed because accountEmail is declared with let, which allows reassignment.
accountPassword = "newpassword"; // This is allowed because accountPassword is declared with var, which also allows reassignment.
accountCity = "Los Angeles"; // This is allowed because accountCity is not declared with var, let, or const, making it a global variable.

console.log(accountEmail);
console.table([accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var,
because of issue in block scope and functionsl scope,
and also it can be redeclared and updated which can lead to bugs in the code.

variables without let,const and var are global variables,
and can be accessed and modified from anywhere in the code, 
which can lead to unintended consequences and make it difficult to debug the code.
*/
