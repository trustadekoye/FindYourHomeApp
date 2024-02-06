import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import CustomTextInput from "../global/custom_text_input";
import CustomButton from "../global/custom_button";
import { confirmPasswordReset, getAuth } from "firebase/auth";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function ResetPassword () {
    const { resetToken } = useParams();
    const [newPassword, setNewPassword] = useState("");
    const auth = getAuth();

    useEffect(() => {
    }, [resetToken]);

    const handleResetPassword = async () => {
        try {
            await confirmPasswordReset(auth, resetToken, newPassword);
            toast.success("Your password has been changed successfully");
        } catch (error) {
            toast.error("Error resetting password", error.message);
        }
    }

    return (
        <Container maxWidth='xs' style={{ paddingTop: '5.5rem' }}>
            <Typography variant="h5" align='center' style={{ fontFamily: 'Satoshi-var', fontSize: '1.5rem', fontWeight: '500', color: '#2E3033' }}>Let's give you a new password</Typography>
                <Typography variant="subtitle1" align='center' style={{ fontFamily: 'Satoshi-var', color: '#6B7280' }}>Make sure to use something you won't forget this time</Typography>
                <CustomTextInput width={370} height={60} placeholder='Enter new password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} isPassword={true} />
                <div className='reset' style={{ marginTop: '20px' }}>
                    <CustomButton text="Change password" onClick={handleResetPassword} height={50} width={400} />
                </div>
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </Container>
    )
}

export default ResetPassword