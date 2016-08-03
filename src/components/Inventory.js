require('normalize.css/normalize.css');
require('styles/App.css');
require('jquery');
require('lodash');

import Header from './Header'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class Inventory extends React.Component {
    render() {
        return (
            <div className="col-sm-12 col-md-5 col-lg-4" >
              	<Header text="Inventory" />
              	<InventoryBox />
            </div>
        );
    }
}

class InventoryBox extends React.Component{
	render(){
		return (
			<li className="list-group-item card container-fluid">
				<div className="col-md-4 card">Lobster</div>
				<div className="col-md-4 card">32.00</div>
				<div className="col-md-4 card">Fresh!</div>
				<ul className="list-group list-group-flush" style={{'marginTop':'0px'}}>
					<div className="col-md-12 list-group-item">Description goes here</div>
					<div className="col-md-12 list-group-item">http://imagesource.com</div>
					<div className="col-md-12 list-group-item">Remove Fish Button</div>
				</ul>
			</li>
		);
	}
}

export default Inventory;