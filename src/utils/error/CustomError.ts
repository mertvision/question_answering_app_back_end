/**
 * Custom error class for error handling
 *
 * @license MIT License
 * @author Mert Özdemir <mertozdemircontact@icloud.com>
 * 
 * This software is licensed under the MIT License. It may be used for legitimate purposes, 
 * but any use for fraudulent or malicious activities is strictly prohibited. 
 * The author disclaims all responsibility for illegal or unethical use.
 */

class CustomError extends Error {
    public status: number; // HTTP status code associated with the error

    // Constructor to initialize the error message and status
    constructor(message: string, status: number) {
        super(message); // Call the parent class constructor
        this.name = 'CustomError'; // Set the error name
        this.status = status; // Assign the status code
    }
}

export default CustomError; // Export the CustomError class
