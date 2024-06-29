import React from "react";


const LoaderComponent = () => {
  
    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh' // Hace que el contenedor ocupe toda la altura de la pantalla
      }}>
        <img src="/images/quantum_loader.gif" alt="" />
      </div>; // Necesito devolver un mensaje mientras tanto.
};

export default LoaderComponent;