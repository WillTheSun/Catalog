require('styles/App.css');

import React from 'react';
import Header from './Header';

class OrderForm extends React.Component {
    filterFishes(list){
        let o = {};
        for (var key in list){
            if (list[key].quantity > 0 && list[key].status){
                o[key] = list[key];
            }
        }
        return o;
    }
    calculateTotal(list){
        let convertInt = (dollar) => Number(dollar.replace(/[^0-9\.]+/g, ''));
        let formatDollar = (integer) => '$' + Math.round(integer * 100) / 100;
        let total = 0;
        for (var k in list) {
            total += list[k].quantity * convertInt(list[k].price);
        }
        return formatDollar(total);
    }
    render() {
        let orders = this.filterFishes(this.props.fishList);
        return <div className="col-sm-12 col-md-5 col-lg-3">
            <Header text = 'Your Order'/>
            {Object.keys(orders).map((k)=><OrderItem {...this.props} fish={orders[k]} kay={k} key={k}/>)}
            <Total total={this.calculateTotal(orders)}/>
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
                <h5 className="col-lg-3 col-xs-3 pull-xs-right">{this.props.total}</h5>
                <hr />
            </div>
        );
    }
}

export default OrderForm;
