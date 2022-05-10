import React from 'react';

const buttonA = <button>Primeiro botão</button>
const buttonB = <button>Segundo botão</button>

const App = () => {
    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo à nossa aula</p>
            {buttonA}
            {buttonB}
        </div>
    );
};

export default AppDois;
