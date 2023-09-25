let addToCart = JSON.parse(localStorage.getItem("data")) || [];
console.log(addToCart[0].item1);
let totalItem = document.getElementById("selectedval");
//console.log(itemdata);
let finalResult = () => {
    if (addToCart.length !== 0) {
        return (totalItem.innerHTML = addToCart.map((obj) => {
            let searchItem = itemdata.find((val) => val.id === obj.id) || [];
            //console.log(searchItem);
            return `<div>
            <table id="customdetails">
              <tr>
                <td><h2>${searchItem.name}</h2></td>
                <td></h2><img width="100rem" height ="100rem" src="${searchItem.img}" alt="image"></td>
                <td><h2>${searchItem.price}</h2></td>
                <td><h2>${obj.item1}</h2></td>
              </tr>
              <tr style = "background-color: grey;">
              <td><h2>Total Price</h2></td>
              <td colspan = "3"><h2>${searchItem.price * obj.item1 } </h2></td>
              </tr>
            </table></div>`;
        }).join(""));

    }
    else {
        totalItem.innerHTML = `<h1>Cart is Empty</h1>
        <button class = "button1"><a href = /index.html>Back to Home</a></button>`;
    }
};
finalResult();
let calculateAmount = () => {
    let value = document.getElementById("cartAmount");
    value.innerHTML = addToCart.map((val) => val.item1).reduce((preval, nextval) => (preval + nextval), 0);
};
calculateAmount();
// let totalAmount = () => {
//     let totalAmount = document.getElementById("totalAmount");
//     if (addToCart.length !== 0) {
//         let amount = addToCart.map((x) => {
//             let searchItem = itemdata.find((val) => val.id === x.id) || [];
//             return searchItem.item1 * searchItem.price;
//         });
//         console.log(amount);
//     }
// };
// totalAmount();
