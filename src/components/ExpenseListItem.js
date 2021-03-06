import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }, props) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>Description: {description}</h3>
        </Link>
        <p>{amount} | {createdAt}</p>
    </div>
);

export default ExpenseListItem;
