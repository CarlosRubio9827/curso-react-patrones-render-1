import React from 'react';
import './ChangeAlert.css';
import { useStorageListener } from './useStorageListener';

const ChangeAlert = ({sincronize})=>{
    const {show, toggleShow} = useStorageListener(sincronize);

    if (show) {
        return (
            <div className='changeAlert'>
                <div className='changeAlert-container'>
                    <p>Hubo un cambio menor!!</p>
                    <button onClick={()=>{
                        toggleShow(false);
                    }}>
                        Volver a Cargar la info!!
                    </button>
                </div>
            </div>
            )
    }else{
        return null
        // return <p>No han habido cambios.</p>
    }
    
}


export { ChangeAlert }
