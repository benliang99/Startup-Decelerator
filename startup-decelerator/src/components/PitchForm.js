import React, { useState } from 'react';
import './PitchForm.css';

const PitchForm = ({ onSubmit }) => {
    const [pitch, setPitch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(pitch);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="pitch">Enter your startup pitch:</label>
            <textarea id="pitch" value={pitch} onChange={(e) => setPitch(e.target.value)}></textarea>
            <button type="submit">Evaluate</button>
        </form>
    );
};

export default PitchForm;
