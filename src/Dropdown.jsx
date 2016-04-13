import React from 'react';

class Dropdown extends React.Component {
    render() {
        const { options, onChange } = this.props;

        return (
            <select onChange={event => onChange(event.target.value)}>
                {options.map(option => (
                    <option
                        key={option}
                        value={option}
                    >{option}</option>
                ))}
            </select>
        );
    }
}

export default Dropdown;
