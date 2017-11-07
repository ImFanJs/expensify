import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// Create Store
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    );

    return store;
};
