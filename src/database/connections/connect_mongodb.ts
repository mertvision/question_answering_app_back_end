/**
 * The necessary functions used to connect to the MongoDB database
 * 
 * @license MIT License
 * @author Mert Özdemir <mertozdemircontact@icloud.com>
 * 
 * This software is licensed under the MIT License. It may be used for legitimate purposes, 
 * but any use for fraudulent or malicious activities is strictly prohibited. 
 * The author disclaims all responsibility for illegal or unethical use.
 */

import mongoose, {ConnectOptions} from "mongoose";

// Define a function to connect MongoDB
export const ConnectMongodb = async (): Promise <void> => {
    try{
        // Attempt to connect to MongoDB using the connection URI from environment variables
        // If process.env.MONGO_URI is not defined, an empty string is used as a fallback
        await mongoose.connect(process.env.MONGO_URI || '', {
            dbName:"question_answering"
        } as ConnectOptions);
        // Log a success message if the connection is successful
        console.log("MongoDB connection is successful.")
    }
    catch(err){
        // Log an error message if the connection fails
        console.log("MongoDB connection error:", err);
    };
};