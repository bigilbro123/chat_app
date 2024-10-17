import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d' // Token valid for 15 days
    });

    const cookieOptions = {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        httpOnly: true, // Prevent access to the cookie via JavaScript
        sameSite: 'strict', // Allow cross-origin requests (for different origin)
        secure: process.env.NODE_ENV === 'production', // Set to true in production for HTTPS
    };

    // Set the JWT in an HttpOnly cookie
    res.cookie('jwt', token, cookieOptions);
};

export default generateTokenAndSetCookie;

