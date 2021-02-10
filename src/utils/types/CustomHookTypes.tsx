import { Dispatch, SetStateAction } from 'react';

export type SetStateDispatch<StateType> = Dispatch<SetStateAction<StateType>>
