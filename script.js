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
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = document.querySelector('form');

  const name = document.querySelector('#name').value.trim();
  const phone = document.querySelector('#phone').value.trim();
  
  if(name === ''){
    document.querySelector('#error').textContent = "Нэр хоосон байж болохгүй.";
  } else if(!/^\d{8}$/.test(phone)){
    document.querySelector('#error').textContent = "Утасны дугаар алдаатай байна.";
  } else {
    document.querySelector('#success').textContent = "Захиалга хүлээн авлаа!";
    form.style.display = 'none';
  }
})
