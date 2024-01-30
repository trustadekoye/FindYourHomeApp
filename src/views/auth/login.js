import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Box, Typography } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import CustomButton from "../global/custom_button";
import CustomTextInput from "../global/custom_text_input";
import LoginImage from '../../assets/images/lg-img.jpg'

function LoginPage () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();
    
    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/dashboard');
        } catch (error) {
            setError("These details are incorrect! Don't you remember your password?");
            console.error("Error logging in", error.message);
        }
    };
    
    return (
        <Box display="flex" height="100vh">
            <Box flex="1" display="flex" alignItems="center" justifyContent="center">
                <img src={LoginImage} alt="login" style={{width: '50%'}}/>
            </Box>
            <Box flex="1" display="flex" alignItems="center" justifyContent="center">
                    <Box p={4} maxWidth="400px">
                        <Typography variant="h5" align="center" style={{ fontFamily: "Satoshi-var", fontSize: '1.5rem'}}>
                            You are back? Interesting
                        </Typography>

                        <Typography variant="subtitle1" align="center" style={{ fontFamily: "Satoshi-var", fontSize: '1rem'}}>
                            If you remember your email and password, enter it below.
                        </Typography>
                        <div className='fields' style={{ marginTop: '20px' }}>
                            <CustomTextInput width={370} height={50} placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <CustomTextInput width={370} height={50} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} isPassword={true} />
                        </div>
                    {error && (
                        <div style={{ fontFamily: 'Satoshi-var', color: 'red', marginTop: '10px' }}>
                            {error}
                        </div>)}
                        <div className='forgotpassword' style={{marginTop: '10px', marginBottom: '20px' }}>
                            <Link to="/forgetpassword" style={{ fontSize: '12px', fontFamily: 'Satoshi-var', textDecorationLine: 'underline', textAlign: 'left', cursor: 'pointer', fontWeight: '600', color: '#2E3033' }}>
                                Forgot Password?
                            </Link>
                        </div>
                        <div className='signup' style={{ marginTop: '50px' }}>
                            <p style={{ fontSize: '14px', fontFamily: 'Satoshi-var', textAlign: 'left', cursor: 'pointer', color: '#6B7280' }}>Don't have an account? <Link to="/signup" style={{ color: '#2E3033', cursor: 'pointer', fontWeight: '600' }}>Sign up</Link>
                            </p>
                        </div>
                        <div className='loginbutton' style={{ marginTop: '20px' }}>
                            <CustomButton text="Login" onClick={handleLogin} height={50} width={400} />
                        </div>
                    </Box>
            </Box>
        </Box>
    )
}

export default LoginPage