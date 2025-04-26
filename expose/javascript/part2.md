1. Line 12 in the question 1 program will output: "3". This will be the output of the program since the for loop iterates over each element of prices, and there are three elements in total.
2. Since the "var" variable has function scope, it will hold the last price item that iterates in the for loop at the end of the program. Therefore, after the last price element is processed and calculated, the variable will hold the value 150. This will be printed when the program reaches line 13.
3. Line 14 will print: "150". Since "var" has function scope, this variable will continue to hold the value of the final price of the last item. The last item had an original cost of 300 dollars, so with a 50% discount the final price will be 150 dollars.
4. The "discounted" variable may hold multiple values. As each final price is calculated, it gets added to the "discounted variable". Therefore, when the program reaches the return statement, the ouput will be: "[50, 100, 150]" since "var" has function scope.
5. Since the "i" variable is declared using "let" inside the for loop, it may not be accessed outside of the for loop. The variable type "let" has block scope. Therefore, line 12 will return a Reference Error.
6. Similarly as stated above, "let" has block scope. Therefore, it may not be accessed outside of the for loop. Line 13 will return a Reference Error.
7. Since the final price variable is declared outside of the for loop, the variable may be accessed and returned at line 14. After each of the three price items are processed, the last reassigned value to the variable is 150. Line 14 prints: "150".
8. Since "discounted" is declared outside of the for loop, it may be accessed and returned at line 16. After all final prices of each item are added to "discounted", the program reaches line 16 and prints: "[50, 100, 150]".
9. Since "i" is declared using "let" inside the for loop, it may not be accessed outside of the for loop. Therefore, line 11 returns a Reference Error ("let" has block scope). 
10. Since "length" is defined as "const" and does not attempt to hold a new value, line 12 will print: "3". This is because there is a total of three items in "prices".
11. Since no values were initallly added to the "const" array at the time of declaration, the array is filled inside the for loop with the discount prices. Therefore, the return statement will print: "[50, 100, 150]".
12. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student.['Favorite Teacher'].name
    E. student.courseLoad[0]
13. A. '3' + 2 = 32
    B.'3' - 2 = 1
    C. 3 + null = 3
    D. '3' + null = 30
    E. true + 3 = 4
    F. false + null = 0
    G. '3' + undefined = Nan
    H. '3' - undefined = Nan
14. A. '2' > 1 : true
    B. '2' < '12' : true
    C. 2 == '2' : true
    D. 2 === '2' : false
    E. true == 2 : false
    F. true == Boolean : true
15. The "==" operator checks for equality by evaluating whether the overall value is the same. The "===" operator evaluates the types and checks if they are the same.
