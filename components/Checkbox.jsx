import React from 'react';

const Checkbox = ({ label, checked, onChange }) => {
	return (
		<>
			<label className='flex items-center cursor-pointer'>
				<input
					type='checkbox'
					onChange={() => onChange((prev) => !prev)}
					className={`${
						checked && 'checked'
					} mr-4 appearance-none h-[18px] w-[18px] border-2 border-almostWhite hover:border-neonGreen`}
				/>
				<span>{label}</span>
			</label>
		</>
	);
};

export default Checkbox;
