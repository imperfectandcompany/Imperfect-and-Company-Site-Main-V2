import React from "react";
import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";

interface LogoWithTextProps {
    src?: string; // Make src optional
    alt: string;
    companyName: string;
}

function LogoWithText({ src, alt, companyName }: LogoWithTextProps) {
    return (
        <div className="navbar-logo">
            {src && <Image src={src} alt={alt} />} {/* Render Image only if src is provided */}
            <Text text={companyName} />
        </div>
    );
}

export default LogoWithText;
