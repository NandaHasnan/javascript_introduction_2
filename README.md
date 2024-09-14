Here's a README file based on the contents of the JavaScript files you've provided:

```markdown
# JavaScript Array and Search Methods Project

## Introduction
This project demonstrates various JavaScript methods related to arrays, such as manipulating array elements, filtering arrays, and searching for specific elements within arrays. It also includes custom functions to handle specific operations like searching for names and filtering numerical values within a given range.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Files](#files)
- [Contributors](#contributors)
- [License](#license)

## Installation
To run this project, you need Node.js installed on your system. Download and install it from [here](https://nodejs.org).

After installing Node.js, you can run the scripts directly from the terminal.

## Usage
1. Clone or download the repository to your local machine.
2. Open a terminal and navigate to the directory containing the JavaScript files.
3. Use the following commands to execute the scripts:
    - To run `1.js`:
      ```bash
      node 1.js
      ```
    - To run `2.js`:
      ```bash
      node 2.js
      ```
    - To run `3.js`:
      ```bash
      node 3.js
      ```

## Features

### 1. Array Manipulation Methods (`1.js`)
This script demonstrates various array manipulation methods in JavaScript, including:
- **Push**: Adds an element to the end of an array.
- **Pop**: Removes the last element from an array.
- **Unshift**: Adds an element to the beginning of an array.
- **Shift**: Removes the first element from an array.
- **Includes**: Checks if an array contains a specific element.
- **IndexOf**: Finds the index of a specific element in an array.
- **Map**: Applies a function to each element of an array and returns a new array.
- **Sort**: Sorts the elements of an array.
- **Reverse**: Reverses the order of elements in an array.
- **Join**: Combines array elements into a string.

Example:
```javascript
const number = [1, 2, 3];
number.push(4);
console.log(number);  // Output: [1, 2, 3, 4]
```

### 2. Search Functionality (`2.js`)
This script includes a function to search for names within an array of names based on a search query. The results are filtered and limited to a specified number of results.

Example:
```javascript
const SearchName = (search, limit, callback) => {
    const NameFilter = name.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );
    return callback(NameFilter, limit);
};
console.log(SearchName("an", 3, limitData));  // Output: ['Alexandra', 'Amanda', 'Angela']
```

### 3. Selection Function (`3.js`)
This script filters an array of numbers based on a range (between `nilai_awal` and `nilai_akhir`) and validates the input data. The function:
- Ensures that the `nilai_akhir` is greater than `nilai_awal`.
- Ensures that the data array contains more than 5 elements.
- Filters numbers between `nilai_awal` and `nilai_akhir` and sorts the results.

Example:
```javascript
seleksi(5, 20, [2, 25, 4, 14, 17, 30, 8]);  // Output: [8, 14, 17]
```

## Files

- **1.js**: Demonstrates common array methods and their use cases in JavaScript.
- **2.js**: Implements a search function that filters an array of names based on user input and limits the results.
- **3.js**: Implements a selection function that filters numbers within a specified range and handles validation for incorrect input.

## Contributors
- **NandaHasnan** - Developer

