import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from '../Button/Button.module.css';

type LinkButtonProps = LinkProps & {
  className?: string;
  size?: 'small' | 'large' | 'fullWidth';
};

const LinkButton: React.FC<LinkButtonProps> = ({ className, size, ...props }) => {
  return <Link className={`${styles.button} ${size ? styles[size] : ''} ${className}`} {...props} />;
};

export default LinkButton;