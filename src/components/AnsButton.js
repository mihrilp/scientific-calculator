import React, { useContext } from 'react';
import { MyContext } from '../MyContext';

function AnsButton({ name }) {
    const { setUserInput, stack, setStack } = useContext(MyContext);
    const buttonClick = () => {
        setUserInput(name)
        setStack(stack.concat(name))
    }
    return (
        <button onClick={buttonClick}>{name}</button>
    );
}

export default AnsButton;