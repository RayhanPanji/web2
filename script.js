const orderForm = document.getElementById('order-form');
const orderBtns = document.querySelectorAll('.order-btn');

orderBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const packageName = btn.getAttribute('data-package');
    orderForm.package.value = packageName;
  });
});

orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(orderForm);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'process_order.php', true);
  xhr.send(formData);
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Order placed successfully!');
    } else {
      alert('Error placing order');
    }
  };
});