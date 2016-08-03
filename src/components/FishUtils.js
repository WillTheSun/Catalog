require('jquery');

import React from 'react';
import lodash from 'lodash';

export let FishList = [];

function Fish(name, price, desc, image) {
    let convertPrice = (x) => {return '$' + x.substring(0, x.length - 2) + '.' + x.substring(x.length - 2)};
    this.name = name;
    this.price = convertPrice(price.toString());
    this.desc = desc;
    this.image = image;
    this.status = status;
    this.quantity = 0;
}

export const addFish = (name, price, desc, image) => {
    FishList.push(new Fish(name, price, desc, image));
}

export const removeFish = (name) => {
    FishList = _.reject(FishList,
        x = (y) => { y.name === name }
    );
}

export const loadSamples = () => {
    var jsonList = require('./sample-fishes');
    for (var key in jsonList) {
        var x = jsonList[key];
        addFish(x.name, x.price, x.desc, x.image);
    }
}
