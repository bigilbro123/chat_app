import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d' // Token valid for 15 days
    });

    // Log the token for debugging purposes (optional)
    // Remove this in production for security

    // Set the JWT in an HttpOnly cookie
    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true, // Prevent access to the cookie via JavaScript
        sameSite: 'strict', // Prevent CSRF attacks by only sending cookies to the same site
        secure: process.env.NODE_ENV !== 'development' // Set to true in production to ensure HTTPS
    });
};

export default generateTokenAndSetCookie;
