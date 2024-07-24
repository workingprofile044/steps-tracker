import React, { useState } from 'react';

function StepsForm({ onAdd }) {
    const [date, setDate] = useState('');
    const [distance, setDistance] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(date, parseFloat(distance));
        setDate('');
        setDistance('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <input
                type="number"
                step="0.1"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                required
            />
            <button type="submit">OK</button>
        </form>
    );
}

export default StepsForm;
