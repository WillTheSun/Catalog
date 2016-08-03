import React from 'react';
import Header from './Header';
import { FishList, loadSamples, increase } from './FishUtils';

class Store extends React.Component {
    render() {
        return (
            <div className="col-sm-12 col-md-7 col-lg-5">
                <Header text="Catch of the Day" text2="Fresh Seafood Market"/>
                {loadSamples()}
            <ul className="list-group">
                {FishList.map(fish => <Fishbox fish={fish} key={fish.key}/> )}
            </ul>
            </div>
        );
    }
}

class Fishbox extends React.Component {
    render() {
        let fish = this.props.fish;
        return <li className="list-group-item col-lg-12 col-sm-12 col-xs-12">
            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-5">
                <img className="img-fluid" style={{'paddingTop':'20px'}} src={fish.image}/>
                <button className="btn btn-danger" onClick={()=>increase(fish.key)} style={{'marginTop':'20px', 'width': '100%'}}>Order</button>
            </div>

            <div className="col-xs-6 col-sm-8 col-md-7">
                <h1 className="col-xs-9 col-md-9">{fish.name}</h1>
                <h5 className="col-xs-3 col-md-3 pull-xs-right" style={{'paddingTop': '26px'}}>{fish.price}</h5>
                <h5 className="col-xs-12">{fish.desc}</h5>
            </div>

        </li>
    }
}

export default Store;
