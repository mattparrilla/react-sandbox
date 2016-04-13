import React from 'react';
import Dropdown from './Dropdown.jsx';
import Selection from './Selection.jsx';

export default class App extends React.Component {
	constructor() {
 		super();
		this.state = {
			selection: 'Arizona'
		};
	}
	render() {
		return (
			<div>
				<Dropdown
	 				options={'Arizona, Vermont, New Jersey, Florida'.split(', ')}
	 				onChange={selection => this.setState({ selection: selection })}
				/>
				<Selection selection={this.state.selection} />
			</div>
		);
	}
};