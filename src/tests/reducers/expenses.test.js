import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should load a empty state', () => {
    const state = expensesReducer(undefined, { type:'@@INIT' });
    expect(state).toEqual([]);
});

test('should add a expense', () => {
    const expense = {
        id: 5,
        description: 'My expense',
        note: '',
        amount: 10000,
        createdAt: 1000
    }
    const action = { type: 'ADD_EXPENSE', expense };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should remove an expense by id', () => {
    const id = expenses[0].id;
    const action = {
        type: 'REMOVE_EXPENSE',
        id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove an expense by id', () => {
    const id = 5;
    const action = {
        type: 'REMOVE_EXPENSE',
        id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit an expense by id', () => {
    const amount = 12000;
    const id = expenses[0].id;
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].amount).toBe(amount);
});

test('should not edit an expense by id', () => {
    const amount = 12000;
    const id = 5;
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});