/**
 * Authentication routes for handling user authentication-related API endpoints
 *
 * @license MIT License
 * @author Mert Özdemir <mertozdemircontact@icloud.com>
 * 
 * This software is licensed under the MIT License. It may be used for legitimate purposes, 
 * but any use for fraudulent or malicious activities is strictly prohibited. 
 * The author disclaims all responsibility for illegal or unethical use.
 */

// Importing our custom modules (or classes, interfaces, etc.)
import { generateRouter } from "../../utils/router/router"; // Importing the router generator
import { register, login, logout, getMe } from "../../controllers/auth/auth_controllers"; // Importing authentication controller functions
import { hasAccess } from "../../middlewares/access/access"; // Importing access middleware

// Define an authentication router
const authRouter = generateRouter();

// Route for user registration
authRouter.post('/register', register); // http://localhost:PORT/api/auth/register
// Route for user login
authRouter.post('/login', login); // http://localhost:PORT/api/auth/login
// Route for retrieving current user's information, requires authentication
authRouter.get('/me', hasAccess, getMe); // http://localhost:PORT/api/auth/me
// Route for logging out the current user, requires authentication
authRouter.get('/logout', hasAccess, logout); // http://localhost:PORT/api/auth/logout

// Exporting the authentication router
export default authRouter;
