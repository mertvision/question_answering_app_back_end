/**
 * User Interface
 *
 * @license MIT License
 * @author Mert Özdemir <mertozdemircontact@icloud.com>
 * 
 * This software is licensed under the MIT License. It may be used for legitimate purposes, 
 * but any use for fraudulent or malicious activities is strictly prohibited. 
 * The author disclaims all responsibility for illegal or unethical use.
 */

// Importing third-party modules
import {Document} from "mongoose"; // Importing Document type from mongoose

// UserInterface declaration and definition
export interface UserInterface extends Document {
    /**
     * The name of the user.
     */
    name: string;

    /**
     * The username chosen by the user.
     */
    username: string;

    /**
     * The user's email address, used for communication and authentication.
     */
    email: string;

    /**
     * Optional field for the user's role, default is 'user'.
     * Can be either 'user' or 'admin'.
     */
    role?: 'user' | 'admin';

    /**
     * The user's password, stored securely.
     */
    password: string;

    /**
     * Optional field for the date when the user was created.
     */
    createdAt?: Date;

    /**
     * Optional field for the user's title (e.g., "Software Engineer").
     */
    title?: string;

    /**
     * Optional field for additional information about the user.
     */
    about?: string;

    /**
     * Optional field for the user's location.
     */
    place?: string;

    /**
     * Optional field for the user's website URL.
     */
    website?: string;

    /**
     * Optional field for the URL of the user's profile image.
     */
    profile_image?: string;

    /**
     * Optional field indicating whether the user is blocked.
     */
    blocked?: boolean;
};
