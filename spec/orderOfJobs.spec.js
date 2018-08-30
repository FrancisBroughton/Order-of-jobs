/* 
Tests

1 - it returns an empty array [] when passed an empty string ""
2 - it returns an single array with one element when passed without a dependancy
3 - it returns an multiple array in the correct order when passed without order dependancies
4 - it returns an array in the correct order when one element requires depends on another
5 - it returns an array with element with mulitple dependancies in the correct order
6 - it returns an error message "jobs can’t depend on themselves" if a dependancy relys on itself
7 - it returns an error message "jobs can’t have circular dependencies" if there is a circular dependancy

*/