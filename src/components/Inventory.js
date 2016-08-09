import React from 'react';
import Header from './Header'
import {
    createFish
} from './FishUtils';

class Inventory extends React.Component {
    render() {
        let fl = this.props.fishList;
        let newFish = createFish('name', '000', 'Enter Description Here', 'Image Url', 'Fresh');
        return (
            <div className="col-sm-12 col-md-5 col-lg-4" >
                <Header text="Inventory" />
                <ul className="list-group">
                    {Object.keys(fl).map((key)=><InventoryBox {...this.props} fish={fl[key]} key={key} kay={key} btnTxt='Remove Fish' click={this.props.remove}/>)}
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
                <form role="form">
                    <div className="form-group">
                        <div className="row">
                            <div className="col-xl-4 col-xs-4"><input type='text' className="form-control" placeholder={fish.name}/></div>
                            <div className="col-xl-4 col-xs-4"><input type='text' className="form-control" placeholder={fish.price}/></div>
                            <div className="col-xl-4 col-xs-4">
                                <select defaultValue={fish.status? 'A' : 'B'} className="custom-select">
                                  <option value='A'>Fresh</option>
                                  <option value='B'>Out</option>
                                </select>
                            </div>
                        </div>
                        <input type='text' className="form-control m-t-1" rows='2' placeholder={fish.desc}/>
                        <input type='text' className="form-control" placeholder={fish.image}/>
                        <btn className="col-md-12 btn btn-primary" onClick={() => {this.props.click(this.props.kay, fish)}}>{this.props.btnTxt}</btn>
                    </div>
                </form>
            </li>
        );
    }
}

export default Inventory;
