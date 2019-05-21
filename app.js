// let re;
// re = /hello/;

// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec('hello lerre');

// console.log(result);

// test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);

//match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - Returns index of the first ùatch if not found returns -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Return new string with some or al matches of a pattern

// const str = 'hello There';
// const newStr = str.replace(re, 'hi')
// console.log(newStr);

// String to match

let re;
// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re= /^h/i; // Must start with
re= /bokken$/i; // Must end with
re= /^hoerenbokken$/i; 
re = /^h.llo$/i;  // Matches any ONE character
re = /^h*llo$/i;  // Matches any character 0 or more times

re = /gre?a?y/i;  // Optional charater
re = /gre?a?y?\/i;  /// escape character

// Brackets [] - Character sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/i; // Must be a G of F
re = /[^GF]ray/i; // Will match anything except a G or F
re = /[A-Z]ray/; //match any uppercase letter

// Curly Braces {} - Quantifiers`
re = /Hel{2}o/i; // Must occur exactly x amount of times
re = /Hel{2,4}o/i;// Ranges, has to be between this and this ammount
// takes the L before the curly braces and looks if there are 2


// Parentheses () - Grouping
re = /([0-9]x){3}/

// Shorthand Character Classes
re = /\w/; //Word character - alphanumeric: means can be any number or _
re = /\w+/; // + = one or more
re = /\W/; // Non-Word Character
re = /\d/; // Match any digit 
re = /\D/; //  Match any non-digit
re = /\d+/; // Match any digit 0 or more times
re = /\s/; // Match whitespace char
re = /\S/; // Match non-whitespace char
re = /Hell\b/i; // Word boundary

// Assertions = // Kinda like conditionals
re = /x(?=y)/; // match x onfly if follow followed by y
re = /x(?!y)/; // match x onfly if NOT follow followed by y



// string to match
const str = 'xyyyxxx';

// log result
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);

    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);