import React from 'react';

function StepRow({ step, onDelete, onEdit }) {
    return (
        <tr>
            <td>{step.date}</td>
            <td>{step.distance}</td>
            <td>
                <button onClick={() => onEdit(step)}>✎</button>
                <button onClick={() => onDelete(step.date)}>✘</button>
            </td>
        </tr>
    );
}

export default StepRow;
