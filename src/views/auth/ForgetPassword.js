import React, { useState } from "react";
import ResetImage from '../../assets/images/password-reset.jpg';
import { Container, Typography } from "@mui/material";
import CustomTextInput from "../global/custom_text_input";
import CustomButton from "../global/custom_button";
import { AuthErrorCodes, getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

function ForgetPassword () {
    const [email, setEmail] = useState('');
    const auth = getAuth();

    const handleReset = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success("An email has been sent to the address provided!");
        } catch (error) {
            if (error.code === AuthErrorCodes.USER_NOT_FOUND) {
            toast.error("We couldn't find your email. Are you sure you are a registered user?", error.message);
        } else {
            toast.error("Error sending password reset email", error.message);
        }
    }
    };

    return (
        <Container maxWidth='xs' style={{ paddingTop: '5.5rem'}}>
            <div className="password-reset-image" style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <img src={ResetImage} alt="pword-reset" style={{ width: '50%' }} />
            </div>
                <Typography variant="h5" align='center' style={{ fontFamily: 'Satoshi-var', fontSize: '1.5rem', fontWeight: '500', color: '#2E3033' }}>How could you foget your password</Typography>
                <Typography variant="subtitle1" align='center' style={{ fontFamily: 'Satoshi-var', color: '#6B7280' }}>Well the deed has been done, we need your mail to send you a reset link</Typography>
                <CustomTextInput width={370} height={60} placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} />

                <div className='reset' style={{ marginTop: '20px' }}>
                    <CustomButton text="Send reset link" onClick={handleReset} height={50} width={400} />
                </div>
                <Link to="/" style={{ fontSize: '12px', fontFamily: 'Satoshi-var', textDecorationLine: 'underline', textAlign: 'center', cursor: 'pointer', fontWeight: '600', color: '#2E3033' }}>
                                Or go back to Login
                            </Link>
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            </Container>
    )
}


export default ForgetPassword;