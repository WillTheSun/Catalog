let keyGen = 0;
export let FishList = [];

function Fish(name, price, desc, image, status) {
    let convertPrice = (x) => {return '$' + x.substring(0, x.length - 2) + '.' + x.substring(x.length - 2)};
    this.key = keyGen++;
    this.name = name;
    this.price = convertPrice(price.toString());
    this.desc = desc;
    this.image = image;
    this.status = status;
    this.quantity = 0;
}

export const addFish = (name, price, desc, image, status) => {
    FishList.push(new Fish(name, price, desc, image, status));
}

export const removeFish = (key) => {
    FishList = FishList.filter(fish => { return fish.key !== key } );
}

export const increase = (key) => {
    FishList.find(fish => { return fish.key === key } ).quantity++;
}

export const loadSamples = () => {
    var jsonList = require('./sample-fishes');
    for (var key in jsonList) {
        var x = jsonList[key];
        addFish(x.name, x.price, x.desc, x.image, x.status);
    }
}
