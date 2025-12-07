import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
};

export function Button({ leftIcon, rightIcon, children, className = "", ...props }: ButtonProps) {
    return (
        <button type={"button"} className={`${className} cursor-pointer`} {...props}>
            {leftIcon && <span className="inline-flex">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="inline-flex">{rightIcon}</span>}
        </button>
    );
}
