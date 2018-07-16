let authorFName = 'David';
let authorLName = 'Tays';


//author function
function authorName(fName: string, lName: string): string {
    return 'Hello ' + fName + ' ' + lName;
}

console.log(authorName(authorFName, authorLName));