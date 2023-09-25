let shop = document.getElementById("shop");
//console.log(shop);
let addToCart = JSON.parse(localStorage.getItem("data")) || [];
console.log(addToCart);
let generateShop = () => {
    return (shop.innerHTML = itemdata.map((obj) => {
        let findItem = addToCart.find((x) => x.id === obj.id) || [];
        console.log(obj);
        return `<div id="product-id-${obj.id}" class="item">
<img width="216px" height ="216px" src="${obj.img}" alt="image">
<div class="details">
    <h3>${obj.name}</h3><hr>
    <p> ${obj.description}</p><br>
    <div class="price">
        <h2>${obj.price}</h2>
        <div class="buttons">
            <i class="bi bi-dash-circle-fill" onclick = removeItem(${obj.id})></i>
            <div id="${obj.id}" class="quantity">${findItem.item1 === undefined ? 0:findItem.item1}</div>
            <i class="bi bi-plus-circle-fill" onclick = addItem(${obj.id})></i>
        </div>
    </div>
</div>
</div>`
    }).join(""));
}
generateShop();

let addItem = (id) => {
    //console.log(addToCart);
    let findItem = addToCart.find((x) => x.id === id);
    if (findItem === undefined) {
        addToCart.push({ id: id, item1: 1 });
    }
    else {
        findItem.item1 += 1;
    }
    update(id);
    //console.log(addToCart);
    localStorage.setItem("data", JSON.stringify(addToCart));

};
let removeItem = (id) => {
    let findItem = addToCart.find((x) => x.id === id);
    if (findItem === undefined) return;
    else if (findItem.item1 === 0) return;
    else {
        findItem.item1 -= 1;
    }
    update(id);
    localStorage.setItem("data", JSON.stringify(addToCart));
    //console.log(addToCart);
};
let update = (id) => {
    let findItem = addToCart.find((x) => x.id === id);
    document.getElementById(id).innerHTML = findItem.item1;
    console.log(findItem.item1);
    calculateAmount();

};
let calculateAmount = () => {
    let value = document.getElementById("cartAmount");
    value.innerHTML = addToCart.map((val) => val.item1).reduce((preval, nextval) => (preval + nextval), 0);

};
calculateAmount();


