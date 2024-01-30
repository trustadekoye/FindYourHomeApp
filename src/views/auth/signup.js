import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import CustomButton from "../global/custom_button";
import CustomTextInput from "../global/custom_text_input";

function SignUpPage () {

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("You've been registered successfully!");
            navigate('/');

        } catch (error) {
            console.error('Error registering user', error.message);
            alert(`Registration failed: ${error.message}`);
        }
    };

    return (
        <Container maxWidth='xs' style={{ paddingTop: '5.5rem'}}>
            <Typography variant="h5" align='center' style={{ fontFamily: 'Satoshi-var', fontSize: '1.5rem', fontWeight: '500', color: '#2E3033' }}>Seems you're new?</Typography>
            <Typography variant="subtitle1" align='center' style={{ fontFamily: 'Satoshi-var', color: '#6B7280' }}>We just need a few of your details to get started!</Typography>
            <CustomTextInput width={370} height={60} placeholder='Your first name' value={fname} onChange={(e) => setFName(e.target.value)} />
            <CustomTextInput width={370} height={60} placeholder='Your last name' value={lname} onChange={(e) => setLName(e.target.value)} />
            <CustomTextInput width={370} height={60} placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <CustomTextInput width={370} height={60} placeholder='Choose a password' value={password} onChange={(e) => setPassword(e.target.value)} isPassword={true} />

            <div className='registerbutton' style={{ marginTop: '20px' }}>
                <CustomButton text="Register" onClick={handleRegister} height={50} width={400} />
            </div>

        </Container>
    )
}

export default SignUpPage