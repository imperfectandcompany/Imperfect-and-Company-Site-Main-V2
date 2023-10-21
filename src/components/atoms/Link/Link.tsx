import React from 'react';
import './Link.css'; // Import CSS for link styling

interface LinkProps {
  to: string;
  text: string;
}

function Link({ to, text }: LinkProps) {
  return (
    <a href={to} className="link">
      {text}
    </a>
  );
}

export default Link;
