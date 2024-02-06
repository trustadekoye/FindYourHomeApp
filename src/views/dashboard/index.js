import { Container, Typography } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../global/custom_button";

function DashboardView ({ onLogout }) {
    const auth = getAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            onLogout();
            navigate('/');
        } catch (error) {
            console.error("Error logging out", error.message);
        }
    };

    return (
        <Container maxWidth='xs' style={{ paddingTop: '5.5rem' }}>
            <Typography variant="h5" align="center">
                You are here!
            </Typography>
            <Typography variant="subtitle1" align="center">
                The firebase configuration works perfectly fine. Still working on this section!
            </Typography>
            <CustomButton onClick={handleLogout} text="Logout" width={290} height={40} />
        </Container>
    )
}

export default DashboardView;