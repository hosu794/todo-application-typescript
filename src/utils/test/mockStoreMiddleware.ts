import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux'; 
import configureMockStore from 'redux-mock-store'
import { RootState } from '../../reducers';

type DispatchExts = ThunkDispatch<RootState, void, AnyAction>;

const middlewares = [thunk]

const mockStore = configureMockStore<RootState, DispatchExts>(middlewares);

const storeForTest = mockStore();

export default storeForTest