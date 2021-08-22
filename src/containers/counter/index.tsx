import React, { useEffect } from 'react';
import { fetchProgram } from '../../api/epg';
import { fetchContent } from '../../api/vod';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { decrement, increment } from '../../redux/counter';

export function Counter(): JSX.Element {
    useEffect(() => {
        (async () => {
            const epg = await fetchProgram('296');
            const vod = await fetchContent('66')
            console.log({programs: epg});
            console.log({vod});
            return epg;
        })()
    }, [])
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();
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
