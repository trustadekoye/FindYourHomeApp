import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, push } from "firebase/database";
import CustomButton from "../global/custom_button";
import CustomTextInput from "../global/custom_text_input";
import { ToastContainer, toast } from "react-toastify";
import LoadingSpinner from "../global/spinner";

function SignUpPage () {

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = getAuth();
    const navigate = useNavigate();
    const db = getDatabase();

    const handleRegister = async () => {
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const usersRef = ref(db, 'users');
            const newUserRef = push(usersRef);
            set(newUserRef, {
                firstName: fname,
                lastName: lname,
                email: email
            });            
            toast.success("You've been registered successfully! Proceed to login.");
            setTimeout(() => {
                setLoading(false);
                navigate('/')
            }, 3000);

        } catch (error) {
            console.error('Error registering user', error.message);
            toast.error(`Registration failed: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth='xs' style={{ paddingTop: '5.5rem'}}>
            <ToastContainer />
            <Typography variant="h5" align='center' style={{ fontFamily: 'Satoshi-var', fontSize: '1.5rem', fontWeight: '500', color: '#2E3033' }}>Seems you're new?</Typography>
            <Typography variant="subtitle1" align='center' style={{ fontFamily: 'Satoshi-var', color: '#6B7280' }}>We just need a few of your details to get started!</Typography>
            <CustomTextInput width={370} height={60} placeholder='Your first name' value={fname} onChange={(e) => setFName(e.target.value)} />
            <CustomTextInput width={370} height={60} placeholder='Your last name' value={lname} onChange={(e) => setLName(e.target.value)} />
            <CustomTextInput width={370} height={60} placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <CustomTextInput width={370} height={60} placeholder='Choose a password' value={password} onChange={(e) => setPassword(e.target.value)} isPassword={true} />

            <div className='registerbutton' style={{ marginTop: '20px' }}>
                {!loading && <CustomButton text="Register" onClick={handleRegister} height={50} width={400} />}
                {loading && <LoadingSpinner />}
            </div>
            <div className='forgotpassword' style={{marginTop: '8px', marginBottom: '10px', textAlign: 'center' }}>
                            <Link to="/" style={{ fontSize: '12px', fontFamily: 'Satoshi-var', textDecorationLine: 'underline', cursor: 'pointer', fontWeight: '600', color: '#2E3033' }}>
                                Or have you registered before? If yes then sign in!
                            </Link>
            </div>

        </Container>
    )
}

export default SignUpPage