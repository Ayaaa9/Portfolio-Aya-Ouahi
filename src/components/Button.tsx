import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  href?: string;
  download?: string;
  disabled?: boolean; 
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  href,
  download
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg';

  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 light:shadow-cyan-400/30',
    secondary: 'bg-gradient-to-r from-slate-700 to-slate-800 light:from-slate-200 light:to-slate-300 text-white light:text-slate-700 hover:from-slate-800 hover:to-slate-900 light:hover:from-slate-300 light:hover:to-slate-400',
    outline: 'border-2 border-cyan-500 light:border-cyan-600 text-cyan-500 light:text-cyan-600 hover:bg-cyan-500 light:hover:bg-cyan-600 hover:text-white'
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={combinedClassName}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;
