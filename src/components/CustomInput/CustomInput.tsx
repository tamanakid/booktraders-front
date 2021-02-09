import React, { ChangeEvent } from 'react';
import { TextField } from '@material-ui/core'
import { SizeMaterial } from 'utils/types/Size'


type CustomInputProps = {
	value: string,
	setValue: Function,
	placeholder?: string,
	size?: SizeMaterial
}


const CustomInput = ({ value, setValue, placeholder, size }: CustomInputProps) => {

	const onChangeValue = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setValue(event.target.value);
	}

	return (
		<TextField
			value={value} onChange={onChangeValue}
			variant='outlined' size={size || 'small'} placeholder={placeholder || ''} fullWidth={true}
		/>
	)

}


export default CustomInput