import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const signUp = async (req, res) => { 

    try {
           
        const { firstName,lastName, email, password, confirmPassword } = req.body;

        if (!firstName || !lastName || !email || !password || !confirmPassword) { 

            return res.status(400).json({

                success: false,
                message : "Please fill all the fields",
            })
        }

        if (password !== confirmPassword) { 

            return res.status(400).json({

                success: false,
                message : "Password and Confirm Password do not match",
            })
        }

        const userExist = await User.findOne({ email: email });

        if (userExist) { 

            return res.status(400).json({

                success: false,
                message : "User already exist",
            })
        }

        const hashedPassword = bcrypt.hash(password, 10);

        profileImage: `https://ui-avatars.com/api/?name=${firstName}+${lastName}`;
        
        const user = await User.create({

            firstName,
            lastName,
            email,
            password: hashedPassword,
            profileImage
        });

        res.status(200).json({

            success: true,
            message: "User created successfully",
        });

    } catch (error) { 

        res.status(500).json({

            success: false,
            message: "Internal Server Error",
            error : error.message
        })
    }
}

export const login = async (req, res) => { 

    try {
        
        const { email, password } = req.body;

        if (!email || !password) { 

            return res.status(400).json({

                success: false,
                message: "Please fill all the fields",
            })
        }

        const user = await User.findOne({ email: email });

        if (!user) { 

            return res.status(400).json({

                success: false,
                message: "User does not exist",
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) { 

            return res.status(400).json({

                success: false,
                message: "Invalid Password",
            })
        }

        const payLoad = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            profileImage: user.profileImage
        }
        user.password = undefined;
        const token = jwt.sign(payLoad, process.env.JWT_SECRET, { expiresIn: "1d" });
        
        res.status(200).json({

            success: true,
            message: "User logged in successfully",
            token,
            data: user
        });

    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}