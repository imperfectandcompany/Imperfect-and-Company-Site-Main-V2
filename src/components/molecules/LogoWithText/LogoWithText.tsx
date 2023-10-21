import React from "react";
import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";

interface LogoWithTextProps {
    src: string;
    alt: string;
    companyName: string;
}

function LogoWithText({ src, alt, companyName }: LogoWithTextProps) {
    return (
        <div className="navbar-logo">
            <Image src={src} alt={alt} />
            <Text text={companyName} />
        </div>
    );
}

export default LogoWithText;
