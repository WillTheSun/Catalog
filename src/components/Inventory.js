import React from 'react';
import Header from './Header'
import {createFish} from './FishUtils';

class Inventory extends React.Component {
    render() {
        let fl = this.props.fishList;
        let newFish = createFish('name','000','Enter Description Here','Image Url','Fresh');
        return (
            <div className="col-sm-12 col-md-5 col-lg-4" >
              	<Header text="Inventory" />
              	<ul className="list-group">
                    {Object.keys(fl).map((key)=><InventoryBox fish={fl[key]} key={key} kay={key} btnTxt='Remove Fish' click={this.props.remove}/>)}
                    <InventoryBox fish={newFish} key={(new Date()).getTime()} kay={(new Date()).getTime()} btnTxt='Add Fish' click={this.props.add}/>
            	</ul>
            </div>
        );
    }
}

class InventoryBox extends React.Component {
    render() {
        let fish = this.props.fish;
        return (
            <li className="list-group-item container-fluid">
				<div className="col-md-4 card">{fish.name}</div>
				<div className="col-md-4 card">{fish.price}</div>
				<div className="col-md-4 card">{fish.status}</div>
				<ul className="list-group list-group-flush">
					<div className="col-md-12 list-group-item">{fish.desc}</div>
					<div className="col-md-12 list-group-item">{fish.image}</div>
					<btn className="col-md-12 btn btn-primary" onClick={() => {this.props.click(this.props.kay, fish)}}>{this.props.btnTxt}</btn>
				</ul>
			</li>
        );
    }
}

export default Inventory;
