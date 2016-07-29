require('normalize.css/normalize.css');
require('styles/App.css');

import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class Catalog extends React.Component {
    render() {
        return (
            <table className="table table-inverse">
	      		<thead>
				    <tr>
				      <th>#</th>
				      <th>Item</th>
				      <th>Type</th>
				      <th>Price</th>
				    </tr>
	  			</thead>
	  			<tbody>
				    <ItemRow itemVals={itemList[0]}/>
				    <ItemRow itemVals={itemList[1]}/>
		   		</tbody>
      		</table>
        );
    }
}

var itemList = [{ "item": "Halibut", "type": "Farm Fresh", "price": 12, 'description':"Everyone's favorite white fish." },
    { "item": "Wild Alaskan Salmon", "type": "Ocean Catch", "price": 27, 'description':'Big, juicy and shipped quickly' }
];

class ItemRow extends React.Component {
    render() {
        return <tr>
	      <th scope="row">1</th>
	      <td>{this.props.itemVals.item}</td>
	      <td>{this.props.itemVals.type}</td>
	      <td>{'$'+this.props.itemVals.price}</td>
	    </tr>;
    }
}

export default Catalog;
