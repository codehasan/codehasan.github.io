import React from 'react';
import { PrimaryButton, SecondaryButton } from './ButtonStyles';

interface ButtonProps {
  primary?: boolean;
  className?: string;
  children: React.ReactNode | string;
}

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  primary,
  className,
  children,
  ...props
}) => {
  return primary ? (
    <PrimaryButton {...props} className={className}>
      {children}
    </PrimaryButton>
  ) : (
    <SecondaryButton {...props} className={className}>
      {children}
    </SecondaryButton>
  );
};
