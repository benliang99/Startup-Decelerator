import React, { useState } from 'react';
import Header from './components/Header';
import PitchForm from './components/PitchForm';

const App = () => {
    const [response, setResponse] = useState('');

    const evaluatePitch = (pitch) => {
        // Call API to evaluate pitch and set response
        setResponse(`AI Response: $${Math.floor(Math.random() * 1000000) + 10000}`);
    };

    return (
        <div className="container">
            <Header />
            <PitchForm onSubmit={evaluatePitch} />
            <div id="response">{response}</div>
        </div>
    );
};

export default App;
