require('normalize.css/normalize.css');
require('styles/App.css');
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class Store extends React.Component {
    render() {
        return (
            <div>
            	<h1>Fresh Seafood Market</h1>
				<Catalogue />
				<button type="button" class="btn btn-primary">Primary</button>
            </div>
        );
    }
}

class Catalogue extends React.Component {
	render(){
		return <ul class="list-group">
			<FishBox vals={"hello"}/>
			<FishBox vals={"hell no"}/>
		</ul>
	}
}

class FishBox extends React.Component {
	render(){
		return <li class="list-group-item">{this.props.vals}</li>
	}
}

export default Store;