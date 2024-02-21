import { useState } from 'react';
import { Search } from './Icons';
import { useBookStore } from '../store/bookStore';

export const Form = () => {
	const [formValue, setFormValue] = useState('');
	const updateValue = useBookStore((state) => state.updateValue);

	const handleChangeInput = ({ target }) => {
		const { value } = target;
		setFormValue(value);
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();
		if (formValue === '') return;
		updateValue(formValue);
	};

	return (
		<form
			className='nav__form'
			onSubmit={handleSubmitForm}>
			<div className='form__search'>
				<Search />
				<input
					type='text'
					value={formValue}
					onChange={handleChangeInput}
					className='search__input'
				/>
			</div>
		</form>
	);
};
