/**
 * Reset password interface
 * 
 * @license MIT License
 * @author Mert Özdemir <mertozdemircontact@icloud.com>
 * 
 * This software is licensed under the MIT License. It may be used for legitimate purposes, 
 * but any use for fraudulent or malicious activities is strictly prohibited. 
 * The author disclaims all responsibility for illegal or unethical use.
 */


import mongoose, { Document } from "mongoose"; // Importing mongoose and Document type

/**
 * ResetPassword Interface
 *
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 *
 * Interface representing a reset password document in MongoDB.
 * Extends the Document interface from Mongoose to include MongoDB document methods.
 */
export interface ResetPasswordInterface extends Document {
    /**
     * The ObjectId of the user for whom the password reset is being processed.
     */
    user_id: mongoose.Schema.Types.ObjectId;

    /**
     * The token generated for password reset, used to authenticate the request.
     */
    reset_password_token: string;

    /**
     * The date and time when the reset password token will expire.
     */
    reset_password_token_expire: Date;
};
