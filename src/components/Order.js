require('normalize.css/normalize.css');
require('styles/App.css');
require('jquery');
require('lodash');

import Header from './Header';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class OrderForm extends React.Component {
    render() {
        return (
            <div className="col-sm-12 col-md-5 col-lg-3">
              <Header text = 'Your Order'/>
              <OrderItem quantity={1} fish='Lobster' price='$12.00'/>
              <OrderItem quantity={2} fish='Mahi Mahi' price='$27.00'/>
              <Total text = '$0.00'/>
            </div>
        );
    }
}

class OrderItem extends React.Component {
    render() {
        return (
            <div>
        		<h5 className="col-lg-8 col-xs-8" style={{'fontSize': '16px', fontStyle: 'italic'}}>{this.props.quantity + ' lb ' + this.props.fish}</h5>
        		<h5 className="col-lg-4 col-xs-4 pull-xs-right" style={{'fontSize': '16px'}}>{this.props.price}</h5>
        		<hr style = {{'height': '1px'}}/>
        	</div>
        );
    }
}

class Total extends React.Component {
    render() {
        return (
            <div>
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
