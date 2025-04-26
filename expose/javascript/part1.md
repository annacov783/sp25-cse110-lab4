1. In the provided code, line 9 will print: "values added: 20". 
2. Line 13 will print the phrase: "final result: 20".
3. The variable "var" should not be used because it was created for blocks with environments that are not Lexical. The "var" variable does not have block scope, and as stated in the lab write-up it may cause naming conflicts.
4. In the programming declaration the result using "let", line 9 will print: "values added: 20" since the variable may be reassigned. 
5. The line of code on line 13 will cause a Reference Error because the "let" variable was declared inside the if statement, which means it may only be used in this block. 
6. The program using "const" declaration will print: "values added: 0". With this variable type declaration, variables may not be reassigned or changed. Therefore, the initial value of "result" remains the same as it was when declared.  
7. In line 13, result is used outside of the if-statement. However, the "const" variable was declared within the if-statment. Therefore, this will produce an error ("const" could only be accessed within the if-block).