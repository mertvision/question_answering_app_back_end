/**
 * Admin routes for handling admin-related API endpoints
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
import { Request, Response } from "express"; // Importing Request and Response types from Express

// Define an admin router
const adminRouter = generateRouter();

// Route for accessing the admin panel
adminRouter.get('/admin', (req: Request, res: Response) => { res.end("Admin"); }); // http://localhost:PORT/api/admin

// Exporting the admin router
export default adminRouter;
