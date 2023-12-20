import React, { ReactNode } from 'react';
import styles from './CtaButton.module.css';
import Button from 'components/atoms/Button/Index';

type CTAButtonProps = {
  link: string;
  children: ReactNode;
  size?: 'small' | 'medium' | 'large' | 'fullWidth';
};

const CTAButton: React.FC<CTAButtonProps> = ({ link, children, size }) => {
  return (
    <Button as="a" href={link} className={`${styles.ctaButton}`} size={size}>
      {children}
    </Button>
  );
};

export default CTAButton;