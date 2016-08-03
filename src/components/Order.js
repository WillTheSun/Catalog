require('styles/App.css');

import React from 'react';
import Header from './Header';
import { FishList } from './FishUtils';

class OrderForm extends React.Component {
    render() {
        let fishInCart = FishList.filter( f=>f.quantity>0 );
        return (
            <div className="col-sm-12 col-md-5 col-lg-3">
              <Header text = 'Your Order'/>
                {fishInCart.map( f=> <OrderItem fish={f} key={f.key}/> )}
              <Total text = '$0.00'/>
            </div>
        );
    }
}

class OrderItem extends React.Component {
    render() {
        return (
            <div className="p-t-2">
        		<h5 className="col-lg-8 col-xs-8" style={{'fontSize': '16px', fontStyle: 'italic'}}>{this.props.fish.quantity + ' lb ' + this.props.fish.name}</h5>
        		<h5 className="col-lg-4 col-xs-4 pull-xs-right" style={{'fontSize': '16px'}}>{this.props.fish.price}</h5>
        		<hr style = {{'height': '1px'}}/>
        	</div>
        );
    }
}

class Total extends React.Component {
    render() {
        return (
            <div className="p-t-1">
        		<h5 className="col-lg-8 col-xs-8">Total:</h5>
        		<h5 className="col-lg-4 col-xs-4 pull-xs-right">{this.props.text}</h5>
        		<hr />
        	</div>
        );
    }
}

class Message extends React.Component {
    render() {
        return (<h5 className="text-xs-center">{this.props.text}</h5>);
    }
}

export default OrderForm;
