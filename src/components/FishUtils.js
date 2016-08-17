let keyGen = 0;

export function loadSamples() {
    var fishList = {};
    var jList = require('./sample-fishes');
    Object.keys(jList).forEach((key) => {
        let x = jList[key];
        let status = (x.status == 'available');
        fishList[keyGen] = createFish(x.name, x.price, x.desc, x.image, status);
        keyGen++;
    });
    return fishList;
}

export function createFish(name, price, desc, image, status) {
    let convertPrice = (x) => '$' + x.substring(0, x.length - 2) + '.' + x.substring(x.length - 2)
    return {
        name: name,
        price: convertPrice(price.toString()),
        desc: desc,
        image: image,
        status: status,
        quantity: 0
    }
}

export function updateFish(key, attr, val) {
    this.state.fishList[key][attr] = val;
    this.setState({
        fishList: this.state.fishList
    }); 
}

export function removeFish(key) {
    delete this.state.fishList[key];
    this.setState({ fishList: this.state.fishList });
}

export function addFish(key, fish) {
    this.state.fishList[key] = fish;
    this.setState({ fishList: this.state.fishList });
}

export function increase(key) {
    this.state.fishList[key].quantity++;
    this.setState({ fishList: this.state.fishList });
}

export function decrease(key) {
    this.state.fishList[key].quantity--;
    this.setState({ fishList: this.state.fishList });
}
