import React from 'react';
import ExpenseList from '../components/ExpenseList';

import ExpenseListFilters from '../components/ExpenseListFilters';



const ExpenseDashboardPage=(props)=>(
    <div>
        <ExpenseListFilters />
        <ExpenseList />
        
    </div>
);

export default ExpenseDashboardPage;

