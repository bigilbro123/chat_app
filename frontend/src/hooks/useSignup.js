import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AthuContext";
import backend from "../AIP/backend";


const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
        setLoading(true); // Set loading to true when signup starts

        const handleInputerrors = handleInputerror({ fullName, userName, password, confirmPassword, gender });

        if (!handleInputerrors) {
            setLoading(false);
            return;
        }

        try {
            console.log({ fullName, userName, password, confirmPassword, gender });

            const res = await fetch(backend.backend + '/api/auth/signup', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fullName, userName, password, confirmPassword, gender })
            });

            if (!res.ok) {
                const errorData = await res.json();
                toast.error(errorData.message || 'Signup failed');
                throw new Error(errorData.message || 'Signup failed');
            }

            const data = await res.json();
            toast.success('Signup successful');
            console.log(data); // Handle success (e.g., show success toast or redirect)
            localStorage.setItem('chat-user', JSON.stringify(data))

            setAuthUser(data)
        } catch (error) {
            toast.error(error.message || 'Something went wrong');
        } finally {
            setLoading(false); // Set loading to false when signup finishes
        }
    };

    return { loading, signup };
};

export default useSignup;

const handleInputerror = ({ fullName, userName, password, confirmPassword, gender }) => {
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
        toast.error('All fields are required');
        return false;
    }
    if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return false;
    }
    if (password.length < 6) {
        toast.error('Password must be at least 6 characters long');
        return false;
    }
    return true;
};
