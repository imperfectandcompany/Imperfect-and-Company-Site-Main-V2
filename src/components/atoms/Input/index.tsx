import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './Input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    as?: 'input';
    className?: string;
    error?: boolean;
    warning?: boolean;
  };

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: 'textarea';
    className?: string;
    error?: boolean;
    warning?: boolean;
  };

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
    as: 'radio';
    className?: string;
    error?: boolean;
    warning?: boolean;
  };

const InputComponent: React.FC<InputProps> = ({ className, error, warning, ...props }) => {
  const classNames = `${styles.input} ${error ? styles.error : ''} ${warning ? styles.warning : ''} ${className}`;
  return <input className={classNames} {...props} />;
};
  
  const TextInputComponent: React.FC<TextareaProps> = ({ className, error, warning, ...props }) => {
    const classNames = `${styles.input} ${styles.textarea} ${error ? styles.error : ''} ${warning ? styles.warning : ''} ${className}`;
    return <textarea className={classNames} {...props} />;
  };
  
  const RadioComponent: React.FC<RadioProps> = ({ className, error, warning, ...props }) => {
    const classNames = `${styles.radio} ${error ? styles.error : ''} ${warning ? styles.warning : ''} ${className}`;
    return <input type="radio" className={classNames} {...props} />;
  };

type Props = InputProps | TextareaProps | RadioProps;

const Input: React.FC<Props> = (props) => {
    if (props.as === 'textarea') {
      return <TextInputComponent {...props} />;
    }

  if (props.as === 'radio') {
    return <RadioComponent {...props} />;
  }

  return <InputComponent {...props} />;
};

export default Input;