import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }, props) => (
    <div>
        <h3>Description: {description}</h3>
        <p>{amount} | {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);
