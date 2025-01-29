# Firebase Document Snapshot Access Before Population

This repository demonstrates a common error when using the Firebase SDK in JavaScript.  The error arises from attempting to access properties of a document snapshot before the data has fully loaded.

## Problem

The `onSnapshot` listener might trigger before the document's data is fully populated, leading to undefined values or errors. This is usually a timing issue, where your code executes faster than the data retrieval from Firebase.

## Solution

The `bugSolution.js` file provides a corrected version that utilizes async/await and proper error handling to ensure the data is available before attempting to access properties. This approach enhances code readability and prevents potential errors.

## Setup

1. Ensure Node.js and npm are installed.
2. Clone this repository.
3. Install the Firebase SDK: `npm install firebase`
4. Configure Firebase (replace placeholders with your project configuration).

## Usage

Run `node bug.js` to see the error, and then `node bugSolution.js` to see the corrected behavior.