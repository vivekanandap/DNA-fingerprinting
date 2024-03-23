function findCommonSubstring(str1, str2) {
    // Find the shortest string
    let shortest = str1.length < str2.length ? str1 : str2;
    let longest = str1.length >= str2.length ? str1 : str2;
  
    // Check if the shortest string is a substring of the longest string
    if (longest.includes(shortest)) {
        return shortest;
    }
  
    // Find the common substring
    for (let i = shortest.length; i > 0; i--) {
        for (let j = 0; j <= shortest.length - i; j++) {
            let substr = shortest.substring(j, j + i);
            if (longest.includes(substr)) {
                return substr;
            }
        }
    }
    // If no common substring is found
    return '';
}

// Function to be called on click
function find() {
    // Get the strings from the user
    let str1 = document.getElementById('string1').value;
    let str2 = document.getElementById('string2').value;

    //Validation
    var s1 = str1;
    var s2 = str2;

    // Add your custom validation logic here
    if (s1 === "") {
        alert("String1 is empty! Please input string");
    }
    if (s2 === "") {
        alert("String2 is empty! Please input string");
    }

    // Find the common substring
    let result = findCommonSubstring(str1, str2);

    // Display the result
    document.getElementsByName('output')[0].value= result;
}  