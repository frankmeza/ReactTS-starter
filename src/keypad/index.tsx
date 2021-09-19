import React from "react";

const DIGITS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];

interface KeyPadItemProps {
    readonly digit: string;
}

export const KeypadItem = (props: KeyPadItemProps) => {
    const { digit } = props;

    return (
        <div className="keypad-item">
            <p>{digit}</p>
        </div>
    );
};

export const Keypad = () => {
    const generateKeypad = () => {
        return DIGITS.map((digit) => <KeypadItem digit={digit} />);
    };

    return <div className="keypad">{generateKeypad()}</div>;
};
