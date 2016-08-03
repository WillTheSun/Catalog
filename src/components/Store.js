require('normalize.css/normalize.css');
require('styles/App.css');
require('jquery');

import FishList from './FishList';
import Header from './Header';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class Store extends React.Component {
    render() {
        return (
            <div className="col-sm-12 col-md-7 col-lg-5">
              <Header text="Catch of the Day" text2="Fresh Seafood Market"/>
              <FishList />
            </div>
        );
    }
}

export default Store;
