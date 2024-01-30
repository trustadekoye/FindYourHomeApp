import React from "react";


function CustomButton({ text, width, height, onClick, isDisabled }) {
    return (
        <div className="customButton">
        <button
            onClick={onClick}
            style={{
            //if width is not passed, default to 100%
            width: width ? width : "100%",
            height: height,
            backgroundColor: isDisabled ? "#F5F5F5" : "#2E3033",
            border: "none",
            borderRadius: "10px",
            marginBottom: "10px",
            paddingLeft: "10px",
            fontSize: "17px",
            color: isDisabled ? "#AFAFAF" : "white",
            fontWeight: "600",
            cursor: isDisabled ? "default" : "pointer",
            fontFamily: "Satoshi-var",
            
            }}
        >
            {text}
        </button>
        </div>
    );
    }

export default CustomButton;