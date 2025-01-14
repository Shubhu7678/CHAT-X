
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => { 

    try {
        
        const token = req.header('Authorization').replace('Bearer ', '');

        if (!token) { 

            return res.status(401).json({

                success: false, 
                message: "User is not authorized!",
            });
        }

        const payload = jwt.verify(token, process.env.JWT_SECRET);
        
        req.user = payload;
        next();

    } catch (error) { 

        res.status(401).json({

            success: false,
            message: "User is not authorized",
        });
    }
}