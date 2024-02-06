import React, { useState } from 'react';
import EyeSlash from '../../assets/svgs/eye-slash.svg'


function CustomTextInput({ value, onChange, isPassword, width, height, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);

  const randomString = Math.random().toString(36).substring(7); // Generate a random string

  return (
    <div className="customTextInput" style={{ position: 'relative' }}>
        <form autoComplete="off">
        <input
          value={value}
          autocomplete="off"
          aria-autocomplete='none'
          onChange={onChange}
          placeholder={placeholder}
          type={isPassword && !showPassword ? 'password' : 'text'}
          autoComplete='new-password'
          onFocus={(e) =>{
            e.target.style.outline = 'none';
            e.target.setAttribute('autocomplete', 'off');
          }}
          name={`customTextInput_${randomString}`} // Use a random name
          style={{
            width: width - 20, 
            height: height,
            backgroundColor: '#F5F5F5',
            border: 'none',
            borderRadius: '10px',
            marginTop: '13px',
            fontFamily: "Satoshi-var",
            fontSize: '13px',
            paddingLeft: '10px',
            paddingRight: '40px',
          }}
        />
        </form>
      {isPassword && (
        <div
          onClick={() => setShowPassword((prevShow) => !prevShow)}
          style={{
            position: 'absolute',
            top: '60%',
            right: '10px',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
          }}
        >
          {showPassword ? (
            <img src={EyeSlash} alt="eye slash" />
            ) : (
                <img src={EyeSlash} alt="eye slash" />
            )}
        </div>
      )}
    </div>
  );
}

export default CustomTextInput;