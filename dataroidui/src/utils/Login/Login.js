import React from 'react'

const Login = ({handleClickLoginClose,show,children}) => {
    const showHideClassName = show ? "modal d-block" : "modal d-none";
    return ( 
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
            </section>
        </div>
        );
}

export default Login;