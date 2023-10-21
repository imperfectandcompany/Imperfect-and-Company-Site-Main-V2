import React from "react";

interface TextProps {
    text: string;
}

function Text({ text }: TextProps) {
    return <p>{text}</p>;
}

export default Text;
