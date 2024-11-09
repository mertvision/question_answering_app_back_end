/**
 * Answer Interface
 *
 * @license MIT License
 * @author Mert Özdemir <mertozdemircontact@icloud.com>
 * 
 * This software is licensed under the MIT License. It may be used for legitimate purposes, 
 * but any use for fraudulent or malicious activities is strictly prohibited. 
 * The author disclaims all responsibility for illegal or unethical use.
 */

// Import Statement of Third Party Modules
import mongoose, { Document } from "mongoose"; // Importing mongoose and Document type

/**
 * Interface representing an answer document in MongoDB.
 * Extends the Document interface from Mongoose to include MongoDB document methods.
 */
export interface AnswerInterface extends Document {
    /**
     * The content of the answer provided by the user.
     */
    content: string;

    /**
     * The date when the answer was created.
     */
    created_at: Date;

    /**
     * An array of ObjectId references representing users who liked the answer.
     */
    likes: mongoose.Types.ObjectId[];

    /**
     * The ObjectId of the user who authored the answer.
     */
    user_id: mongoose.Schema.Types.ObjectId;

    /**
     * The ObjectId of the question to which this answer belongs.
     */
    question_id: mongoose.Schema.Types.ObjectId;
}
