require('styles/App.css');

import React from 'react';
import Header from './Header';

class OrderForm extends React.Component {
    convertInt = (dollar) => Number(dollar.replace(/[^0-9\.]+/g, ''))
    convertDollar = (num) => '$' + Math.round(num * 100) / 100
    orderedFishes() {
        let fishInCart = [];
        for (var key in this.props.fishList) {
            let x = this.props.fishList[key];
            if (x.quantity > 0) {
                fishInCart.push(<OrderItem fish={x} kay={key} key={key} increase={this.props.increase} decrease={this.props.decrease}/>);
            }
        }
        return fishInCart;
    }
    orderTotal() {
        let total = 0;
        for (var key in this.props.fishList) {
            let x = this.props.fishList[key];
            total += x.quantity * this.convertInt(x.price);
        }
        return total;
    }
    render() {
        return <div className="col-sm-12 col-md-5 col-lg-3">
              <Header text = 'Your Order'/>
              {this.orderedFishes()}
              <Total text={this.convertDollar(this.orderTotal())}/>
            </div>
    }
}

class OrderItem extends React.Component {
    render() {
        return (
            <div className="p-t-2">
                <button className="col-lg-1 col-xs-1 btn btn-primary btn-sm" onClick={()=>{this.props.decrease(this.props.kay)}}>-</button>
                <button className="col-lg-1 col-xs-1 btn btn-primary btn-sm" onClick={()=>{this.props.increase(this.props.kay)}}>+</button>
                <h5 className="col-lg-7 col-xs-7">{this.props.fish.quantity + ' lb ' + this.props.fish.name}</h5>
                <h5 className="col-lg-3 col-xs-3 pull-xs-right">{this.props.fish.price}</h5>
                <hr style = {{'height': '1px'}}/>
            </div>
        );
    }
}

class Total extends React.Component {
    render() {
        return (
            <div className="p-t-1">
                <div className="col-lg-2 col-xs-2"></div>
                <h5 className="col-lg-7 col-xs-7">Total:</h5>
                <h5 className="col-lg-3 col-xs-3 pull-xs-right">{this.props.text}</h5>
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
