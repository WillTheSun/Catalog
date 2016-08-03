import React from 'react';
import Header from './Header'
import { FishList } from './FishUtils';

class Inventory extends React.Component {
    render() {
        return (
            <div className="col-sm-12 col-md-5 col-lg-4" >
              	<Header text="Inventory" />
              	<ul className="list-group">
                    {FishList.map(fish => <InventoryBox fish={fish} key={fish.key}/> )}
            	</ul>
            </div>
        );
    }
}

class InventoryBox extends React.Component {
    render() {
        let fish = this.props.fish;
        //console.log(JSON.stringify(fish));
        return (
            <li className="list-group-item container-fluid">
				<div className="col-md-4 card">{fish.name}</div>
				<div className="col-md-4 card">{fish.price}</div>
				<div className="col-md-4 card">{fish.status}</div>
				<ul className="list-group list-group-flush">
					<div className="col-md-12 list-group-item">{fish.desc}</div>
					<div className="col-md-12 list-group-item">{fish.image}</div>
					<div className="col-md-12 list-group-item">Remove Fish</div>
				</ul>
			</li>
        );
    }
}

export default Inventory;
