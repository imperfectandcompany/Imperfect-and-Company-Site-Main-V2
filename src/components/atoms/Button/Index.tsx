import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import styles from './Button.module.css';
import LinkButton from '../LinkButton';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button';
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'fullWidth';
};

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: 'a';
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'fullWidth';
};

const ButtonComponent: React.FC<ButtonProps> = ({ className, size, ...props }) => {
  return <button className={`${styles.button} ${size ? styles[size] : ''} ${className}`} {...props} />;
};

const AnchorComponent: React.FC<AnchorProps> = ({ className, href, size, ...props }) => {
  return <LinkButton to={href || '/'} className={`${styles.button} ${size ? styles[size] : ''} ${className}`} {...props} />;
};

type Props = ButtonProps | AnchorProps;

const Button: React.FC<Props> = (props) => {
  if (props.as === 'a') {
    return <AnchorComponent {...props} />;
  }

  return <ButtonComponent {...props} />;
};

export default Button;