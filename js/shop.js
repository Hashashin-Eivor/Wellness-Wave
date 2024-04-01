var basket = {};

function addToBasket(name, price) {
  var quantity = parseInt(event.target.nextElementSibling.value);
  if (basket[name]) {
    basket[name].quantity += quantity;
  } else {
    basket[name] = {price: price, quantity: quantity};
  }
  updateBasket();
}

function updateBasket() {
  var basketItems = document.getElementById('basketItems');
  basketItems.innerHTML = '';
  var total = 0;
  for (var item in basket) {
    var lineTotal = basket[item].price * basket[item].quantity;
    total += lineTotal;
    basketItems.innerHTML += '<p>' + item + ' x' + basket[item].quantity + ' - $' + lineTotal.toFixed(2) + '</p>';
  }
  document.getElementById('total').textContent = total.toFixed(2);
}


function removeItem(button) {
    var itemToRemove = button.parentElement;
    itemToRemove.parentNode.removeChild(itemToRemove);
    updateBasketTotal();
  }
  
  function clearBasket() {
    var basketItems = document.getElementById('basketItems');
    basketItems.innerHTML = '';
    document.getElementById('total').innerText = '0.00';
  }
  
  function updateBasketTotal() {

  }
  
