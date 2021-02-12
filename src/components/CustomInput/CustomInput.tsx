import React, { useState, useCallback, ChangeEventHandler, ChangeEvent } from 'react';
import { TextField, TextFieldProps } from '@material-ui/core'

import { TSetStateDispatch } from 'utils/types/CustomHookTypes'



type useCustomInputReturns = [string, ChangeEventHandler, TSetStateDispatch<string>?]

export const useCustomInput = function (initialValue: string): useCustomInputReturns {
	const [input, setInput] = useState<string>(initialValue)
	const inputHandler: ChangeEventHandler = useCallback((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setInput(event.target.value)
	}, []);

	return [input, inputHandler, setInput];
}



type CustomInputProps = {
	input: string,
	handler: ChangeEventHandler
} & TextFieldProps;

const CustomInput = ({ input, handler, ...props }: CustomInputProps) => {
	return (
		<TextField
			value={input} onChange={handler}
			variant='outlined' size={props.size || 'small' } {...props} fullWidth={true}
		/>
	);
};


export default CustomInput;
