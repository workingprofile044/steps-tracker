import React from 'react';
import StepRow from './StepRow';

function StepsTable({ steps, onDelete, onEdit }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Distance (km)</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {steps.map(step => (
                <StepRow key={step.date} step={step} onDelete={onDelete} onEdit={onEdit} />
            ))}
            </tbody>
        </table>
    );
}

export default StepsTable;
