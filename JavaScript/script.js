
function addToOrder(button) {
    var menuContent = button.parentNode;
    var itemName = menuContent.getElementsByTagName('h5')[0].textContent;
    var itemPrice = parseFloat(menuContent.getElementsByTagName('span')[0].innerText.replace('$', ''));
    var quantity = menuContent.getElementsByClassName('quantitySelect')[0].value;

    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ itemName, itemPrice, quantity });
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(quantity + " x " + itemName + " added to order!");

    // Update the order display when an item is added to the cart
    displayOrder();
}
