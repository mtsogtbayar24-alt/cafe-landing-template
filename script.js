const CONFIG = {
  businessName: "Жишээ Кафе",
  phone: "9911-2233",
  menu: [
    { name: "Латте", price: 12000},
    { name: "Капучино", price: 11000},
    { name: "Американо", price: 9900},
    { name: "Мока", price: 14000},
    { name: "Эсспрессо", price: 9500},
    { name: "Аффогато", price: 20000},
  ]
}
const grid = document.querySelector('.menu-grid');
CONFIG.menu.forEach(item => {
  grid.innerHTML += `
  <div class = "card">
  <h3>${item.name}</h3>
  <p>${item.price.toLocaleString()}₮</p>
  </div>`;
});

document.querySelector('h1').textContent = CONFIG.businessName;
document.querySelector('.phone').textContent = CONFIG.phone;


document.querySelector('#error').textContent = '';
const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const order = {
  name: document.querySelector('#name').value.trim(),
  phone: document.querySelector('#phone').value.trim()
  };
  
  console.log(order);
  if (order.name === '') {
    document.querySelector('#error').textContent = "Нэр хоосон байж болохгүй.";
  } else if (!/^\d{8}$/.test(order.phone)) {
    document.querySelector('#error').textContent = "Утасны дугаар алдаатай байна.";
  } else {
    try {
      const response = await fetch("https://telegrambot-srd3.onrender.com/new-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order)
      });

        if (response.ok) {  
          document.querySelector('#success').textContent = "Захиалга хүлээн авлаа!";
          form.style.display = 'none';
          } else {
            document.querySelector('#error').textContent = "Захиалга илгээгдсэнгүй, дахин оролдоно уу";
          }
          } catch (error) {
            document.querySelector('#error').textContent = "Сүлжээний алдаа гарлаа, дахин оролдоно уу";
          }
        }
      });
