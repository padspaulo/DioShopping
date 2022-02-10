import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import Contatos from './Pages/contato';
import Adicionais from './Pages/adicionais';

const MainRoutes = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/contato"
                element={<Contatos />}
            />
            <Route
                path="/adicionais"
                element={<Adicionais />}
            />

        </Routes>
    )
}

export default MainRoutes;
