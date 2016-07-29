require('normalize.css/normalize.css');
require('styles/App.css');
require('lodash');

import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class Catalog extends React.Component {
    render() {
        return (
            <table className='table'>
	      		<thead>
				    <tr>
				      <th>#</th>
				      <th>Item</th>
				      <th>Type</th>
				      <th>Price</th>
				    </tr>
	  			</thead>
	  			<tbody>
	  			<ItemProfile vals={itemList[0]}/>
	  				<ItemRow itemVals={itemList[0]}/>
				    <ItemRow itemVals={itemList[1]}/>
		   		</tbody>
      		</table>
        );
    }
}

var itemList = [{ 'name': 'Halibut', 'type': 'Farm Fresh', 'price': 12, 'description': 'Everyones favorite white fish.' },
    { 'name': 'Wild Alaskan Salmon', 'type': 'Ocean Catch', 'price': 27, 'description': 'Big, juicy and shipped quickly' }
];

class ItemProfile extends React.Component {
    render() {
        return <div>
        	
        	<div className="col-md-4">
        		<img className="img-fluid" src="prof.jpg"/>
        	</div>

			<div className="row col-md-8" style={{padding: '30px'}}>
	        	<h1 className="col-md-4">{this.props.vals.name}</h1>
	        	<h5 className="col-md-4 pull-xs-right">{'$'+this.props.vals.price}</h5>
			</div>

        	<h4>{this.props.vals.description}</h4>
        	
        	<button className="btn btn-default">Add To Order</button>
        	
        	<div className="clearfix"></div>

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
