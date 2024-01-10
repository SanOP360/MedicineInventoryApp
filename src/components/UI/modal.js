import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './modal.css';
const Modal=(props)=>{

    const BackDrop=()=>{
        return <div
        className='backdrop'
        onClick={props.onClick}>
        </div>
    }

    const ModalOverlay=(props)=>{
        return(
            <div className='modal'>
                <div className={'content'}>
                    {props.children}
                </div>
            </div>
        )
    }

    const portalElement = document.getElementById("overlay");

    return(
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>,portalElement)}

            {ReactDOM.createPortal(
                <ModalOverlay>
                    {props.children}
                </ModalOverlay>,portalElement
            )}
        </Fragment>
    )
}

export default Modal;