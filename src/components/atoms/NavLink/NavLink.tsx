import React from "react";

interface NavLinkProps {
    to: string;
    text: string;
}

function NavLink({ to, text }: NavLinkProps) {
    return (
        <li>
            <a href={to}>{text}</a>
        </li>
    );
}

export default NavLink;
