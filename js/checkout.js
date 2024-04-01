    document.querySelector('.payment-form form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting prematurely
        // Example validation: check if all inputs are filled
        const inputs = this.querySelectorAll('input');
        let allFilled = true;
        inputs.forEach(function(input) {
        if (!input.value.trim()) allFilled = false;
        });
        
        if (allFilled) {
        // Process the form (e.g., show a confirmation, send data)
        alert('Payment details are valid and being processed.');
        } else {
        alert('Please fill in all fields.');
        }
    });
    // ########
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
    
        // Save the updated basket to localStorage
        localStorage.setItem('basket', JSON.stringify(basket));
    }
    
    
    
    document.addEventListener('DOMContentLoaded', function() {
        var basket = JSON.parse(localStorage.getItem('basket')) || {};
        updateCheckoutBasket(basket);
    });
    
    function updateCheckoutBasket(basket) {
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
    
    // Add any additional checkout.js functions here, like the form submission handler
    
    