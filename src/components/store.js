require('normalize.css/normalize.css');
require('styles/App.css');
require('lodash');
require('jquery');

import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class Store extends React.Component {
    render() {
        return (
            <div className="col-sm-12 col-md-7 col-lg-5">
              <Header tagline="Fresh Seafood Market" />
              <FishList />
            </div>
        );
    }
}

class FishList extends React.Component {
    createFishList() {
        var jsonList = require('./sample-fishes');
        var mapList = [];
        for (var key in jsonList) {
            mapList.push(jsonList[key]);
        }
        this.FishComponents = mapList.map(function(i) {
            //console.log(i);
            return <Fishbox vals={i}/>
        });
    }
    render() {
        this.createFishList();
        return <ul className="list-group">
          	{this.FishComponents}
        </ul>
    }
}

var Header = React.createClass({
    render: function() {
        return (
            <header className="top text-xs-center">
        <h1>Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day</h1>
        <h3 className="tagline"><span>Fresh Seafood Market</span></h3>
      </header>
        )
    }
})

class Fishbox extends React.Component {
    convertPrice = (x) => {
        return '$' + x.substring(0, x.length - 2) + '.' + x.substring(x.length - 2, ) }
    render() {
        return <li className="list-group-item col-lg-12 col-sm-12 col-xs-12">
			<div className="col-xs-6 col-sm-4 col-md-4 col-lg-5">
				<img className="img-fluid" style={{'paddingTop':'20px'}} src={this.props.vals.image}/>
				<button className="btn btn-danger" style={{'marginTop':'20px', 'width': '100%'}}>Order</button>
			</div>
			<div className="col-xs-6 col-sm-8 col-md-7">
				<h1 className="col-xs-9 col-md-9">{this.props.vals.name}</h1>
				<h5 className="col-xs-3 col-md-3 pull-xs-right" style={{'paddingTop': '26px'}}>{this.convertPrice(this.props.vals.price.toString())}</h5>	        	
				<h5 className="col-xs-12">{this.props.vals.desc}</h5>
			</div>
        </li>
    }
}

export default Store;
