require('normalize.css/normalize.css');
require('styles/App.css');
require('lodash');

import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class Catalog extends React.Component {
    render() {
        return (
            <div>
            	<ItemProfile vals={itemList[0]}/>
            	<ItemProfile vals={itemList[1]}/>
            </div>
        );
    }
}

var itemList = [{ 'name': 'Halibut', 'type': 'Farm Fresh', 'price': 12, 'description': 'Everyones favorite white fish.' },
    { 'name': 'Wild Alaskan Salmon', 'type': 'Ocean Catch', 'price': 27, 'description': 'Big, juicy and shipped quickly' }
];

class ItemProfile extends React.Component {
    render() {
        return <div className="col-sm-12 col-xs-12">
        	<div className="col-sm-4 col-xs-6">
        		<img className="img-fluid" style={{'padding': '20px'}} src="halibut.jpg"/>
        	</div>
	        	<h1 className="col-sm-5 col-xs-4">{this.props.vals.name}</h1>
	        	<h4 className="col-sm-3 col-xs-2 pull-xs-right" style={{'padding-top': '26px'}}>{'$'+this.props.vals.price}</h4>
	        	<h4 className="col-sm-8 col-xs-6">{this.props.vals.description}</h4>
	        	<div className="col-sm-8 col-xs-6">
	        		<button className="btn btn-default">Add To Order</button>
				</div>
        </div>
    }
}

class ItemRow extends React.Component {
    render() {
        return <tr>
	      <th scope='row'>1</th>
	      <td>{this.props.itemVals.name}</td>
	      <td>{this.props.itemVals.type}</td>
	      <td>{'$'+this.props.itemVals.price}</td>
	    </tr>;
    }
}

export default Catalog;
