import React from 'react';
import Header from './Header';

class Store extends React.Component {
    render() {
        let fl = this.props.fishList;
        return (
            <div className="col-sm-12 col-md-7 col-lg-5">
                <Header text="Catch of the Day" text2="Fresh Seafood Market"/>
                <ul className="list-group">
                    {Object.keys(fl).map((key)=>{return <Fishbox {...this.props} fish={fl[key]} key={key} kay={key}/>})}
                </ul>
            </div>
        );
    }
}

class Fishbox extends React.Component {
    render() {
        let fish = this.props.fish;
        let contentDisabled = fish.status ? {opacity: .3} : {};
        let soldOut =  fish.status ? {fontSize:60, textAlign: 'center'} : {opacity: 0}
        return <div className="card card-inverse col-lg-12 col-sm-12 col-xs-12">
            <div className="card-img-overlay" style={soldOut}>
                <span class="card-title">Sold Out</span>
            </div>
            
            <div className="card-block" style={contentDisabled}>
                <div className="">
                    <div className="col-xs-6 col-sm-4 col-md-4 col-lg-5">
                        <img className="img-fluid" style={{'paddingTop':'20px'}} src={fish.image}/>
                        <button className="btn btn-danger" onClick={()=>{this.props.increase(this.props.kay)}} style={{'marginTop':'20px', 'width': '100%'}}>Order</button>
                    </div>
                
                    <div className="col-xs-6 col-sm-8 col-md-7">
                        <h1 className="col-xs-9 col-md-9">{fish.name}</h1>
                        <h5 className="col-xs-3 col-md-3 pull-xs-right" style={{'paddingTop': '24px'}}>{fish.price}</h5>
                        <h5 className="col-xs-12">{fish.desc}</h5>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Store;
