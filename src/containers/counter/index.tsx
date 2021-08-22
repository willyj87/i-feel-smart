import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { decrement, increment } from '../../redux/counter';

export function Counter(): JSX.Element {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state) => state.counter.value);
    return (
        <>
            <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                -
            </button>
            <span>{count}</span>
            <button aria-label="Increment value" onClick={() => dispatch(increment())}>
                +
            </button>
        </>
    );
}
