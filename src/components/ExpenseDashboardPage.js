import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseDashboardPage = () => (
    <div>
        This my expense dashboard component.
        <Link to='/edit/12'>Item 12</Link>
        <Link to='/edit/13'>Item 13</Link>
    </div>
);

export default ExpenseDashboardPage;
