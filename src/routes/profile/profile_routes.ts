/**
 * Users routes for handling user profile-related API endpoints
 *
 * @license MIT License
 * @author Mert Özdemir <mertozdemircontact@icloud.com>
 * 
 * This software is licensed under the MIT License. It may be used for legitimate purposes, 
 * but any use for fraudulent or malicious activities is strictly prohibited. 
 * The author disclaims all responsibility for illegal or unethical use.
 */

import {getUserProfileInformations} from "../../controllers/profile/profile_controllers"; // Importing the function to get user profile information
import {generateRouter} from "../../utils/router/router"; // Importing the router generator
const profileRouter = generateRouter(); // Creating a new router for profile routes

// Route for retrieving user profile information by profile ID
profileRouter.get('/:profileId', getUserProfileInformations);

export default profileRouter; // Exporting the profile router
