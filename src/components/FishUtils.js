let keyGen = 0;

export function loadSamples() {
    var fishList = [];
    var jsonList = require('./sample-fishes');
    for (var key in jsonList) {
        var x = jsonList[key];
        fishList.push(createFish(x.name, x.price, x.desc, x.image, x.status));
    }
    return fishList;
}

export function createFish(name, price, desc, image, status) {
    let convertPrice = (x) => {
        return '$' + x.substring(0, x.length - 2) + '.' + x.substring(x.length - 2)
    };
    return {
        key: keyGen++,
        name: name,
        price: convertPrice(price.toString()),
        desc: desc,
        image: image,
        status: status,
        quantity: 0
    }
}

export function removeFish(key, list) {
        this.setState({fishList: 
            this.state.fishList.filter(
                fish => {return fish.key !== key}
            )
        });
    }

export const printList = (list) => { list.map(f => console.log(JSON.stringify(f))) }
