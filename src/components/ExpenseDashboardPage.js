import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import {Link} from 'react-router-dom';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
        <Link to='/edit/12'>Item 12</Link>
        <Link to='/edit/13'>Item 13</Link>
    </div>
);

export default ExpenseDashboardPage;
