import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Store from './components/Store';
import Order from './components/Order';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Inventory from './components/Inventory';
import {loadSamples, removeFish, addFish, increase, decrease} from './components/FishUtils';

class FishData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fishList: {}
        }
    }
    render() {
        let load = (Object.keys(this.state.fishList).length === 0)?
            <btn className="btn btn-primary" onClick={()=>{this.setState({fishList: loadSamples()})}}>Load Samples</btn> : ''
        return (
            <div>
                {load}
                <Store fishList={this.state.fishList} increase={increase.bind(this)}/>
                <Order fishList={this.state.fishList} increase={increase.bind(this)} decrease={decrease.bind(this)}/>
                <Inventory fishList={this.state.fishList} remove={removeFish.bind(this)} add={addFish.bind(this)}/>
            </div>
        );
    }
}

ReactDOM.render(<FishData />, document.getElementById('app'));
