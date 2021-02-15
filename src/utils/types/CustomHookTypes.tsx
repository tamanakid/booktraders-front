import { Dispatch, SetStateAction } from 'react';


export type TSetStateDispatch<StateType> = Dispatch<SetStateAction<StateType>>

export type ReducerAction<P, T> = { payload: P, type: T }
