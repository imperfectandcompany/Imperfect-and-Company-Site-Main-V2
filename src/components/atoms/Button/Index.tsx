import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import styles from './Button.module.css';
import LinkButton from '../LinkButton';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button';
  className?: string;
};

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: 'a';
  className?: string;
};

const ButtonComponent: React.FC<ButtonProps> = ({ className, ...props }) => {
  return <button className={`${styles.button} ${className}`} {...props} />;
};

const AnchorComponent: React.FC<AnchorProps> = ({ className, href, ...props }) => {
  return <LinkButton to={href || '/'} className={`${styles.button} ${className}`} {...props} />;
};

type Props = ButtonProps | AnchorProps;

const Button: React.FC<Props> = (props) => {
  if (props.as === 'a') {
    return <AnchorComponent {...props} />;
  }

  return <ButtonComponent {...props} />;
};

export default Button;