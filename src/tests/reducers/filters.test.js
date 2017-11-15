import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set default state', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const initialState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const state = filtersReducer(initialState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should set sortBy to start date', () => {
    const startDate = moment();
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate });
    expect(state.startDate).toBe(startDate);
});

test('should set sortBy to end date', () => {
    const endDate = moment();
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate });
    expect(state.endDate).toBe(endDate);
});

test('should set sortBy to text value', () => {
    const text = 'This is my text';
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text });
    expect(state.text).toBe(text);
});