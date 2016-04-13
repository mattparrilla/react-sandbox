import React from 'react';

export default ({ options, onChange }) => (
	<select onChange={event => onChange(event.target.value)}>
		{options.map(option => (
			<option
				key={option}
				value={option}
			>{option}</option>
		))}
	</select>
);
