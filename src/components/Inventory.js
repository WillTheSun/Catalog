import React from 'react';
import Header from './Header'
import {
    createFish
} from './FishUtils';

class Inventory extends React.Component {
    render() {
        let fl = this.props.fishList;
        return (
            <div className="col-sm-12 col-md-5 col-lg-4" >
                <Header text="Inventory" />
                <ul className="list-group">
                    {Object.keys(fl).map((key)=><InventoryBox {...this.props} fish={fl[key]} key={key} kay={key} btnTxt='Remove Fish' btnClick={this.props.remove}/>)}
                    <NewFishBox {...this.props}/>
                </ul>
            </div>
        );
    }
}

class NewFishBox extends React.Component {
    state = {
        fish: createFish('name', '000', 'Enter Description Here', 'Image Url', 'Fresh')
    }
    handleFishChange = (key, attr, val) => {
        this.state.fish[attr] = val;
        this.setState({
            fish: this.state.fish
        });
    }
    submitNewFish() {
        this.props.addFish((new Date()).getTime(), this.state.fish);
        this.state.fish = createFish('name', '000', 'Enter Description Here', 'Image Url', 'Fresh');
        this.setState({
            fish: this.state.fish
        });
    }
    render() {
        return <InventoryBox {...this.props} fish={this.state.fish} btnTxt='Add Fish' updateFish={this.handleFishChange.bind(this)} btnClick={this.submitNewFish.bind(this)}/>
    }
}


class InventoryBox extends React.Component {
    render() {
        let fish = this.props.fish;
        return (
            <li className="list-group-item container-fluid">
                <form role="form">
                    <div className="form-group">
                        <div className="row">
                            <div className="col-xl-4 col-xs-4"><TextInput text={fish.name} attr={'name'} {...this.props}/></div>
                            <div className="col-xl-4 col-xs-4"><TextInput text={fish.price} attr={'price'} {...this.props}/></div>
                            <div className="col-xl-4 col-xs-4"><StatusDrop status={fish.status} attr={'status'} {...this.props}/></div>
                        </div>
                        <TextInput text={fish.desc} attr={'desc'} {...this.props}/>
                        <TextInput text={fish.image} attr={'image'} {...this.props} />
                        <btn className="col-md-12 btn btn-primary" onClick={() => this.props.btnClick(this.props.kay, fish)}>{this.props.btnTxt}</btn>
                    </div>
                </form>
            </li>
        );
    }
}

class TextInput extends React.Component {
    render() {
        return <input type='text' className="form-control" value={this.props.text} onChange={(e)=> this.props.updateFish(this.props.kay, this.props.attr, e.target.value)}/>
    }
}

class StatusDrop extends React.Component {
    statusUpdate = (e) => {
        let status = (e.target.value == 'A') ? 1 : 0;
        this.props.updateFish(this.props.kay, this.props.attr, status);
    }
    render() {
        return (
            <select value={this.props.status ? 'A' : 'B'} className="custom-select" onChange={this.statusUpdate}>
              <option value='A'>Fresh</option>
              <option value='B'>Out</option>
            </select>
        );
    }
}

export default Inventory;
