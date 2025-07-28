import React, { useState } from 'react'
import Alert from './Alert';

interface IProp {
    alma: () => void;
    children: React.ReactNode;
}

function Button(props:IProp) {
    const [showAlert, setShowAlert] = useState(false);
    function click() {
        setShowAlert(true);
        
        props.alma();
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    }
  return (
    <>
        <button onClick={() => click()}>
            {props.children}
        </button>
        {
          showAlert && <Alert />
        }
        
    </>
  )
}

export default Button