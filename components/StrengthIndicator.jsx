import validator from 'validator';
import TooWeak from './TooWeak';
import Weak from './Weak';
import Medium from './Medium';
import Strong from './Strong';

const StrengthIndicator = ({ password }) => {
	const strongReq = {
		returnScore: true,
		minLength: 9,
		minLowercase: 1,
		minUppercase: 1,
		minNumbers: 1,
		minSymbols: 1,
	};

	if (
		validator.isStrongPassword(password, strongReq) >= 10 &&
		validator.isStrongPassword(password, strongReq) <= 15
	) {
		return <TooWeak />;
	}

	if (
		validator.isStrongPassword(password, strongReq) > 15 &&
		validator.isStrongPassword(password, strongReq) <= 20
	) {
		return <Weak />;
	}

	if (
		validator.isStrongPassword(password, strongReq) > 20 &&
		validator.isStrongPassword(password, strongReq) <= 30
	) {
		return <Medium />;
	}

	if (validator.isStrongPassword(password, strongReq) > 30) {
		return <Strong />;
	}

	return (
		<>
			<div className='border-2 border-almostWhite h-6 w-2' />
			<div className='border-2 border-almostWhite h-6 w-2' />
			<div className='border-2 border-almostWhite h-6 w-2' />
			<div className='border-2 border-almostWhite h-6 w-2' />
		</>
	);
};

export default StrengthIndicator;
