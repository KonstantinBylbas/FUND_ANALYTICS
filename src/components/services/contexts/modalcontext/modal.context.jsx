import React, { useState } from "react";

export const ModalContext = React.createContext(null);

export default function ModalContextProvider({ children }) {

    const [contextModal, setContextModal] = useState({
        show: false,
        status: 0
    });

    return (
        <ModalContext.Provider value={{
            contextModal, setContextModal
        }} >
            {children}
        </ModalContext.Provider>
    );
}