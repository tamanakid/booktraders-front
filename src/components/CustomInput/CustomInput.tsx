import React, { useState, useCallback, ChangeEventHandler, ChangeEvent } from 'react';
import { TextField } from '@material-ui/core'

import { SetStateDispatch } from 'utils/types/CustomHookTypes'



type useCustomInputReturns = [string, ChangeEventHandler, SetStateDispatch<string>?]

export const useCustomInput = function (initialValue: string): useCustomInputReturns {
	const [input, setInput] = useState<string>(initialValue)
	const inputHandler: ChangeEventHandler = useCallback((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setInput(event.target.value)
	}, []);

	return [input, inputHandler, setInput];
}



type CustomInputProps = {
	input: string,
	handler: ChangeEventHandler,
	placeholder?: string,
	size?: 'small' | 'medium'
};

const CustomInput = (props: CustomInputProps) => {
	return (
		<TextField
			value={props.input} onChange={props.handler}
			variant='outlined' size={props.size || 'small'} placeholder={props.placeholder || ''} fullWidth={true}
		/>
	);
};


export default CustomInput;
