import React, { useState, useCallback, ChangeEventHandler, ChangeEvent } from 'react';
import { TextField } from '@material-ui/core'
import { SizeMaterial } from 'utils/types/Size'


type CustomInputProps = {
	input: string,
	handler: ChangeEventHandler,
	placeholder?: string,
	size?: SizeMaterial
};


export const useCustomInput = function (initialValue: string): [string, ChangeEventHandler] {
	const [input, setInput] = useState<string>(initialValue)
	const inputHandler: ChangeEventHandler = useCallback((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setInput(event.target.value)
	}, []);

	return [input, inputHandler];
}


const CustomInput = ({ input, handler, placeholder, size }: CustomInputProps) => {
	return (
		<TextField
			value={input} onChange={handler}
			variant='outlined' size={size || 'small'} placeholder={placeholder || ''} fullWidth={true}
		/>
	);
};


export default CustomInput;
