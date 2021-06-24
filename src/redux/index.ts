import { configureStore } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import * as models from './models';
const history = createBrowserHistory();

const store = configureStore({
    reducer: {
        ...models,
        router: connectRouter(history),
    },
    middleware: [routerMiddleware(history)],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { history };
export default store;
