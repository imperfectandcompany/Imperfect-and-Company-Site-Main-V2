import React, { ReactNode } from 'react';
import styles from './CtaButton.module.css';
import Button from 'components/atoms/Button/Index';
import LinkButton from 'components/atoms/LinkButton';

type CTAButtonProps = {
  link: string;
  children: ReactNode;
};

const CTAButton: React.FC<CTAButtonProps> = ({ link, children }) => {
  const isExternal = /^https?:\/\//.test(link) || /^mailto:/.test(link);

  if (isExternal) {
    return (
      <Button as="a" href={link} className={`${styles.ctaButton}`}>
        {children}
      </Button>
    );
  }

  return (
    <LinkButton to={link} className={`${styles.ctaButton}`}>
      {children}
    </LinkButton>
  );
};

export default CTAButton;