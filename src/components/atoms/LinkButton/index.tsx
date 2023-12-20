import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from '../Button/Button.module.css';

type LinkButtonProps = LinkProps & {
  className?: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ className, ...props }) => {
  return <Link className={`${styles.button} ${className}`} {...props} />;
};

export default LinkButton;