import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Store from './components/Store';
import Order from './components/Order';
import Inventory from './components/Inventory';

class Layout extends React.Component {
    render() {
        return (
            <div>
              	<Store/>
              	<Order/>
              	<Inventory/>
            </div>
        );
    }
}

ReactDOM.render(<Layout />, document.getElementById('app'));
