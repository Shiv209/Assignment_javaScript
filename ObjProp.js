function listProperties(obj) {
    let properties = [];
    for (let prop in obj) {
        properties.push(prop);
    }
    return properties;
}

let obj = {
    name: 'Shiv',
    age: 24,
    city: 'Nanded'
};
let properties = listProperties(obj);
console.log(properties); // ["name", "age", "city"]
