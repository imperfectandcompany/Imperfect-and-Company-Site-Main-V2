import React from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
  onClick?: () => void; // Optional click handler
}

function Button({ text, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
