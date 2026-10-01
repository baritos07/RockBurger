const WHATSAPP_PHONE="525510118662";
const DELIVERY_PRICE=25;
const FREE_FRIES_MINIMUM=200;

const products=[

//Combos
{id:73,name:"Combo Breaker",category:"combos",price:100,desc:"Hamburguesa con papas y refresco. El precio cambia según tu elección.",img:"Imagenes/Hamburguesa Tropical.webp",
  comboOptions:{
    burgers:[
      {name:"Sencilla",extra:0},
      {name:"Vegetariana",extra:0},
      {name:"Hawaiana",extra:15},
      {name:"Pollo",extra:15},
      {name:"BBQ",extra:15},
      {name:"Suiza",extra:15},
      {name:"Caribeña",extra:15},
      {name:"Tropical",extra:15},
      {name:"Doriburger",extra:15},
      {name:"Especial",extra:20},
      {name:"Pollo Bufalo",extra:20},
      {name:"Pollo Bufalo-Ranch",extra:20},
      {name:"Pollo Jalapeño-Ranch",extra:20},
      {name:"Burgeroni",extra:20},
      {name:"Choriburger",extra:20},
      {name:"Alamburger",extra:30},
      {name:"Camarón",extra:35},
      {name:"Cheeseburger",extra:45},
      {name:"Suprema",extra:50},
      
      
      // Agrega aquí el resto, por ejemplo: {name:"Suprema",extra:35}
    ],
    drinks:[
      {name:"Refresco de Limón",extra:0},
      {name:"Refresco de Naranja",extra:0},
      {name:"Refresco de Toronja",extra:0},
      {name:"Refresco de Manzana",extra:0},
      {name:"Coca-Cola 600 ml",extra:15},
      {name:"Coca-Cola Zero 600 ml",extra:15},
      {name:"Coca-Cola Light 600 ml",extra:15},
      {name:"Sangria 600 ml",extra:15},
      // Agrega aquí más refrescos con su extra correspondiente
    ]
  }
},
{id:74,name:"Family Burger Pack",category:"combos",price:300,desc:"4 Hamburguesas Sencillas, papas familiares y refresco de 2 Litros",img:"Imagenes/FamilyBurgerPack.webp"},
{id:75,name:"Alitas Pack",category:"combos",price:300,desc:"20 Alitas con hasta 4 salsas a elegir",img:"Imagenes/Alitas.webp",
  selections:[
    {label:"Salsa1",options:[
      {name:"Mango Habanero",extra:0},
      {name:"BBQ",extra:0},
      {name:"Bufalo",extra:0},
      {name:"Bufalo-Ranch",extra:0},
      {name:"Jalapeño-Ranch",extra:0},
      {name:"Tamarindo",extra:0},
      {name:"Red Hot",extra:0},
      {name:"Cajun",extra:0},
      {name:"Lemon Pepper",extra:0}
    ]},
    {label:"Salsa2",options:[
      {name:"Mango Habanero",extra:0},
      {name:"BBQ",extra:0},
      {name:"Bufalo",extra:0},
      {name:"Bufalo-Ranch",extra:0},
      {name:"Jalapeño-Ranch",extra:0},
      {name:"Tamarindo",extra:0},
      {name:"Red Hot",extra:0},
      {name:"Cajun",extra:0},
      {name:"Lemon Pepper",extra:0}
    ]},
    {label:"Salsa3",options:[
      {name:"Mango Habanero",extra:0},
      {name:"BBQ",extra:0},
      {name:"Bufalo",extra:0},
      {name:"Bufalo-Ranch",extra:0},
      {name:"Jalapeño-Ranch",extra:0},
      {name:"Tamarindo",extra:0},
      {name:"Red Hot",extra:0},
      {name:"Cajun",extra:0},
      {name:"Lemon Pepper",extra:0}
    ]},
    {label:"Salsa4",options:[
      {name:"Mango Habanero",extra:0},
      {name:"BBQ",extra:0},
      {name:"Bufalo",extra:0},
      {name:"Bufalo-Ranch",extra:0},
      {name:"Jalapeño-Ranch",extra:0},
      {name:"Tamarindo",extra:0},
      {name:"Red Hot",extra:0},
      {name:"Cajun",extra:0},
      {name:"Lemon Pepper",extra:0}
    ]},
  ]
},
{id:76,name:"Rocker Burger Pack",category:"combos",price:300,desc:"Hamburguesa Especial, Hot Dog Especial, Alitas, Tiras de pollo, Papas a la francesa y Refesco de 2 litros",img:"Imagenes/Hamburguesa Especial.webp"},
{id:77,name:"Mega Rocker Pack",category:"combos",price:400,desc:"Alitas, Tiras, Palomitas,Nuggets, Aros de cebolla, Costillas, Dedos, Chiles, Papas Gajo y Papas a la francesa",img:"Imagenes/Hamburguesa Especial.webp"},

//Hamburguesas
{id:1,name:"Hamburguesa Vegetariana",category:"hamburguesas",price:60,desc:"Platano, piña, champiñones, queso amarillo y queso suizo",img:"Imagenes/Hamburguesa Sencilla.webp"},
{id:2,name:"Hamburguesa Sencilla",category:"hamburguesas",price:65,desc:"Queso amarillo.",img:"Imagenes/Hamburguesa Sencilla.webp"},
{id:3,name:"Hamburguesa de Pollo",category:"hamburguesas",price:80,desc:"Hamburguesa de tender de pollo.",img:"Imagenes/Hamburguesa de pollo.webp"},
{id:4,name:"Hamburguesa Suiza",category:"hamburguesas",price:80,desc:"Hamburguesa con 3 quesos",img:"Imagenes/Hamburguesa Sencilla.webp"},
{id:5,name:"Hamburguesa BBQ",category:"hamburguesas",price:80,desc:"Carne con salsa BBQ y queso amarillo",img:"Imagenes/Hamburguesa BBQ.webp"},
{id:6,name:"Hamburguesa Caribeña",category:"hamburguesas",price:80,desc:"Jamón, queso suizo, champiñones y platano",img:"Imagenes/Hamburguesa Hawaiana.webp"},
{id:7,name:"Hamburguesa Hawaiana",category:"hamburguesas",price:80,desc:"Jamon, queso suizo, tocino y piña",img:"Imagenes/Hamburguesa Hawaiana.webp"},
{id:8,name:"Hamburguesa Tropical",category:"hamburguesas",price:80,desc:"Carne en salsa a elegir, queso suizo y aros de cebolla",img:"Imagenes/Hamburguesa Tropical.webp",
  selections:[
    {label:"Salsa",options:[
      {name:"BBQ",extra:0},
      {name:"Mango Habanero",extra:0},
      {name:"Tamarindo",extra:0},
    ]},
  ]
},
{id:9,name:"Doriburger",category:"hamburguesas",price:80,desc:"Carne sabor doritos con queso amarillo.",img:"Imagenes/Hamburguesa Sencilla.webp"},
{id:10,name:"Hamburguesa de Pollo Bufalo",category:"hamburguesas",price:85,desc:"Hamburguesa de tender de pollo con salsa bufalo",img:"Imagenes/Hamburguesa de pollo.webp"},
{id:11,name:"Hamburguesa Especial",category:"hamburguesas",price:85,desc:"Jamon, queso amarillo, queso suizo, piña, tocino y salchicha",img:"Imagenes/Hamburguesa Especial.webp"},
{id:12,name:"Hamburguesa Criolla",category:"hamburguesas",price:85,desc:"Huevo estrellado, queso y aguacate.",img:"Imagenes/Hamburguesa Criolla.webp"},
{id:13,name:"Hamburguesa de Pollo Bufalo-Ranch",category:"hamburguesas",price:85,desc:"Hamburguesa de tender de pollo con salsa bufalo.",img:"Imagenes/Hamburguesa de pollo.webp"},
{id:14,name:"Hamburguesa de Pollo Jalapeño-Ranch",category:"hamburguesas",price:85,desc:"Hamburguesa de tender de pollo con salsa bufalo.",img:"Imagenes/Hamburguesa de pollo.webp"},
{id:15,name:"Burgeroni",category:"hamburguesas",price:85,desc:"Salsa de pizza, queso suizo y pepperoni",img:"Imagenes/Burgeroni.webp"},
{id:16,name:"Choriburger",category:"hamburguesas",price:85,desc:"longaniza con queso suizo",img:"Imagenes/Hamburguesa Sencilla.webp"},
{id:17,name:"Alamburger",category:"hamburguesas",price:95,desc:"Chuleta, tocino, pimientos y queso suizo",img:"Imagenes/Alamburger.webp"},
{id:18,name:"Hamburguesa de Camaron",category:"hamburguesas",price:100,desc:"Hamburguesa con camarones.",img:"Imagenes/Hamburguesa Sencilla.webp"},
{id:19,name:"Cheeseburger",category:"hamburguesas",price:110,desc:"Triple carne con 6 rebanadas de queso amarillo.",img:"Imagenes/Cheeseburger.webp"},
{id:20,name:"Hamburguesa Suprema",category:"hamburguesas",price:115,desc:"Doble carne, 3 quesos, jamon, tocino, piña y salchicha",img:"Imagenes/Hamburguesa Especial.webp"},
//Hot Dogs
{id:21,name:"Hot dog sencillo",category:"hot dogs",price:20,desc:"Salchicha",img:"Imagenes/Hot Dogs.webp"},
{id:22,name:"Hot dog sencillo x3",category:"hot dogs",price:45,desc:"Salchicha.",img:"Imagenes/Hot Dogs.webp"},
{id:23,name:"Hot dog especial",category:"hot dogs",price:25,desc:"Salchicha con tocino y queso.",img:"Imagenes/Hot Dogs.webp"},
{id:24,name:"Hot dog especial x3",category:"hot dogs",price:60,desc:"Salchicha con tocino y queso",img:"Imagenes/Hot Dogs.webp"},
{id:25,name:"Hot dog vegetariano",category:"hot dogs",price:25,desc:"Platano macho, champiñones, piña y queso",img:"Imagenes/Hot Dogs.webp"},
{id:26,name:"Hot dog vegetariano x3",category:"hot dogs",price:60,desc:"Platano macho, champiñones, piña y queso",img:"Imagenes/Hot Dogs.webp"},
{id:27,name:"Hot dog de pollo",category:"hot dogs",price:25,desc:"Hot dog con tender de pollo",img:"Imagenes/Hot Dogs.webp"},
{id:28,name:"Hot dog de pollo x3",category:"hot dogs",price:60,desc:"Hot dog con tender de pollo",img:"Imagenes/Hot Dogs.webp"},
{id:29,name:"Choridog",category:"hot dogs",price:25,desc:"Salchicha con longaniz Y queso suizo.",img:"Imagenes/Hot Dogs.webp"},
{id:30,name:"Choridog x3",category:"hot dogs",price:60,desc:"Salchicha con longaniz Y queso suizo",img:"Imagenes/Hot Dogs.webp"},
{id:31,name:"Hot dog de pollo especial",category:"hot dogs",price:30,desc:"Hot dog con tender de pollo con tocino y queso suizo",img:"Imagenes/Hot Dogs.webp"},
{id:32,name:"Hot dog de pollo especial x3",category:"hot dogs",price:75,desc:"Hot dog con tender de pollo con tocino y queso suizo",img:"Imagenes/Hot Dogs.webp"},
{id:33,name:"Hot dog hawaiano",category:"hot dogs",price:30,desc:"Salchicha con tocino, queso, piña y jamon",img:"Imagenes/Hot Dogs.webp"},
{id:34,name:"Hot dog hawaiano x3",category:"hot dogs",price:75,desc:"Salchicha con tocino, queso, piña y jamon",img:"Imagenes/Hot Dogs.webp"},
//Snacks
{id:35,name:"Papas a la francesa",category:"snacks",price:35,desc:"Papas a la francesa",img:"Imagenes/Papas a la francesa.webp"},
{id:36,name:"Aros de cebolla",category:"snacks",price:45,desc:"Aros de cebolla empanizados",img:"Imagenes/Aros de cebolla.webp"},
{id:37,name:"Papas gajo",category:"snacks",price:45,desc:"Papas gajo sazonadas",img:"Imagenes/Papas gajo.webp"},
{id:38,name:"Alitas",category:"snacks",price:80,desc:"Alitas de pollo fritas",img:"Imagenes/Alitas.webp",
  selections:[
    {label:"Salsa",options:[
      {name:"Naturales",extra:0},
      {name:"Mango Habanero",extra:10},
      {name:"BBQ",extra:10},
      {name:"Bufalo",extra:10},
      {name:"Bufalo-Ranch",extra:10},
      {name:"Jalapeño-Ranch",extra:10},
      {name:"Tamarindo",extra:10},
      {name:"Red Hot",extra:10},
      {name:"Cajun",extra:10},
      {name:"Lemon Pepper",extra:10}
    ]},
  ]
},
{id:39,name:"Costillas de cerdo",category:"snacks",price:100,desc:"Costilla de cerdo fritas acompañado de papas a la frances",img:"Imagenes/Costillas.webp",
  selections:[
    {label:"Salsa",options:[
      {name:"Naturales",extra:0},
      {name:"Mango Habanero",extra:10},
      {name:"BBQ",extra:10},
      {name:"Bufalo",extra:10},
      {name:"Bufalo-Ranch",extra:10},
      {name:"Jalapeño-Ranch",extra:10},
      {name:"Tamarindo",extra:10},
      {name:"Red Hot",extra:10},
      {name:"Cajun",extra:10},
      {name:"Lemon Pepper",extra:10}
    ]},
  ]
},
{id:40,name:"Tiras de pollo",category:"snacks",price:115,desc:"Tenders de pollo empanizados acompañados de papas a la francesa",img:"Imagenes/Tiras.webp",
  selections:[
    {label:"Salsa",options:[
      {name:"Naturales",extra:0},
      {name:"Mango Habanero",extra:10},
      {name:"BBQ",extra:10},
      {name:"Bufalo",extra:10},
      {name:"Bufalo-Ranch",extra:10},
      {name:"Jalapeño-Ranch",extra:10},
      {name:"Tamarindo",extra:10},
      {name:"Red Hot",extra:10},
      {name:"Cajun",extra:10},
      {name:"Lemon Pepper",extra:10}
    ]},
  ]
},
{id:41,name:"Tiras de pollo con papas gajo",category:"snacks",price:125,desc:"Tenders de pollo empanizados acompañados de papas a la francesa",img:"Imagenes/Tiras.webp",
  selections:[
    {label:"Salsa",options:[
      {name:"Naturales",extra:0},
      {name:"Mango Habanero",extra:10},
      {name:"BBQ",extra:10},
      {name:"Bufalo",extra:10},
      {name:"Bufalo-Ranch",extra:10},
      {name:"Jalapeño-Ranch",extra:10},
      {name:"Tamarindo",extra:10},
      {name:"Red Hot",extra:10},
      {name:"Cajun",extra:10},
      {name:"Lemon Pepper",extra:10}
    ]},
  ]
},
{id:42,name:"Palomitas de pollo",category:"snacks",price:65,desc:"Palomitas de pollo acompañados de papas gajo",img:"Imagenes/Palomitas de pollo.webp"},
{id:43,name:"Papas familiares",category:"snacks",price:60,desc:"Orden de papas a la francesa grandes",img:"Imagenes/Papas a la francesa.webp"},
{id:44,name:"Nachos Rock Burger",category:"snacks",price:65,desc:"Nachos con queso amarillo, chiles y proteina a elegir",img:"Imagenes/H.webp"},
{id:45,name:"Dedos de queso",category:"snacks",price:70,desc:"Dedos de queso mozzarella",img:"Imagenes/Dedos de queso.webp"},
{id:46,name:"Chiles rellenos",category:"snacks",price:70,desc:"Chiles jalapeños empanizados rellenos de queso",img:"Imagenes/Chiles.webp"},
{id:47,name:"Chiles rellenos envueltos en tocino",category:"hot dogs",price:90,desc:"Chiles jalapeños empanizados rellenos de queso envueltos en tocino",img:"Imagenes/ChilesT.webp"},
{id:48,name:"Mega Nachos Rock Burger",category:"snacks",price:100,desc:"Nachos con queso amarilllo chiles, salchicha, longaniza y carne molida",img:"Imagenes/MegaNachos.webp"},
//Postres
{id:49,name:"Panque de elote",category:"postres",price:25,desc:"Panque de elote",img:"Imagenes/Panque de elote.webp"},
{id:50,name:"Duraznos",category:"postres",price:35,desc:"Duraznos en almibar con crema y lechera",img:"Imagenes/Duraznos.webp"},
{id:51,name:"Flan Napolitano",category:"postres",price:35,desc:"Flan Napolitano Casero",img:"Imagenes/Flan.webp"},
{id:52,name:"Fresas con crema",category:"postres",price:35,desc:"Fresas con crema y lechera",img:"Imagenes/Fresas con crema.webp"},
{id:53,name:"Muffin de chocolate",category:"postres",price:35,desc:"Muffin de chocolate",img:"Imagenes/Muffin.webp"},
{id:54,name:"Muffin de vainilla",category:"postres",price:35,desc:"Muffin de vainilla",img:"Imagenes/Muffin Vainilla.webp"},
{id:55,name:"Platanos fritos",category:"postres",price:35,desc:"Platanos fritos con crema y lechera",img:"Imagenes/Platanos Fritos.webp"},
{id:56,name:"Rol de Canela",category:"postres",price:35,desc:"Rol de canela",img:"Imagenes/Rol de canela.webp"},
{id:57,name:"Pastel Rock",category:"postres",price:50,desc:"Pastel de tres leches, tres leches con chocolate o Pay de limon",img:"Imagenes/Pastel.webp"},
{id:58,name:"Crepa Fresa con Nutella",category:"postres",price:55,desc:"Crepa de nutella con fresa",img:"Imagenes/Crepa Nutella con Fresa.webp"},
{id:59,name:"Crepa de conejito",category:"postres",price:70,desc:"Crepa de conejito turin",img:"Imagenes/Crepa Conejito.webp"},
{id:60,name:"Hot Cakes",category:"postres",price:60,desc:"Hot Cakes 3 Pzs",img:"Imagenes/Hot Cakes.webp",
  selections:[
    {label:"Topping",options:[
      {name:"Maple",extra:0},
      {name:"Lechera",extra:0},
      {name:"Nutella",extra:0},
      {name:"Mermelada de Fresa",extra:0}
    ]},
  ]
},

//Bebidas
{id:61,name:"Coca 600ml",category:"bebidas",price:40,desc:"Coca-Cola original 600ml",img:"Imagenes/coca.webp"},
{id:62,name:"Coca Zero 600ml",category:"bebidas",price:40,desc:"Coca-Cola Zero 600ml",img:"Imagenes/Coca Zero.webp"},
{id:63,name:"Coca Light 600ml",category:"bebidas",price:40,desc:"Coca-Cola Light 600ml",img:"Imagenes/Coca Light.webp"},
{id:64,name:"Sangria Señorial 600ml",category:"bebidas",price:40,desc:"Sangria Señorial 600ml",img:"Imagenes/Sangria.jpg"},
{id:65,name:"Boing Lata",category:"bebidas",price:35,desc:"Boing de lata de mango, guayaba o manzana",img:"Imagenes/Boing.webp",
  selections:[
    {label:"Sabor",options:[
      {name:"Manzana",extra:0},
      {name:"Mango",extra:0},
      {name:"Guayaba",extra:0},
    ]},
  ]
},
{id:66,name:"Aguas Frescas",category:"bebidas",price:25,desc:"Agua fresca. Elige sabor y tamaño.",img:"Imagenes/Aguas.webp",
  selections:[
    {label:"Sabor",options:[
      {name:"Limón",extra:0},
      {name:"Jamaica",extra:0},
      {name:"Horchata",extra:0},
      {name:"Tamarindo",extra:0},
      {name:"Pepino",extra:0},
      {name:"Sandía",extra:0},
      {name:"Melón",extra:0},
      {name:"Fresa",extra:0},
      {name:"Guayaba",extra:0}
    ]},
    {label:"Tamaño",options:[
      {name:"Medio litro",extra:0},
      {name:"1 litro",extra:20}
    ]}
  ]
},
{id:67,name:"Malteadas",category:"bebidas",price:60,desc:"Malteada de vainilla, chocolate, Fresa, Oreo o Mazapan",img:"Imagenes/Malteada.webp",
  selections:[
    {label:"Sabor",options:[
      {name:"Vainilla",extra:0},
      {name:"Fresa",extra:0},
      {name:"Chocolate",extra:0},
      {name:"Nutella",extra:0},
      {name:"Mazapan",extra:0},
      {name:"Bailey's",extra:0},
      {name:"Rompope",extra:0},
      {name:"Oreo",extra:0},
      {name:"Taro",extra:0}
    ]},
  ]
},
{id:68,name:"Frappes",category:"bebidas",price:60,desc:"Frappe de chocolate, nutella, vainilla, fresa, oreo, cafe, rompope, bailey's, taro",img:"Imagenes/Frappe.webp",
  selections:[
    {label:"Sabor",options:[
      {name:"Vainilla",extra:0},
      {name:"Fresa",extra:0},
      {name:"Chocolate",extra:0},
      {name:"Nutella",extra:0},
      {name:"Mazapan",extra:0},
      {name:"Bailey's",extra:0},
      {name:"Rompope",extra:0},
      {name:"Oreo",extra:0},
      {name:"Taro",extra:0}
    ]},
  ]
},
//Cafe
{id:69,name:"Americano",category:"cafe",price:35,desc:"Espresso doble con agua",img:"Imagenes/Americano.webp"},
{id:70,name:"Capuchino",category:"cafe",price:45,desc:"Espresso con leche y espuma de leche",img:"Imagenes/Capuchino.webp"},
{id:71,name:"Latte",category:"cafe",price:50,desc:"Espresso con leche",img:"Imagenes/Latte.webp"},
{id:72,name:"Latte frio",category:"cafe",price:50,desc:"Espresso con leche y hielos",img:"Imagenes/LatteFrio.webp"},



];

let cart=[];
let activeCategory="todos";

document.addEventListener("DOMContentLoaded",()=>{loadCart();renderMenu();renderCart();});
function money(amount){return "$"+amount.toFixed(0);}
function setCategory(category){activeCategory=category;document.querySelectorAll(".filter").forEach(button=>{button.classList.toggle("active",button.dataset.category===category);});renderMenu();}
function renderMenu(){
  const grid=document.getElementById("menuGrid");
  const search=document.getElementById("searchInput").value.toLowerCase().trim();
  const filteredProducts=products.filter(product=>{
    const matchesCategory=activeCategory==="todos"||product.category===activeCategory;
    const matchesSearch=product.name.toLowerCase().includes(search)||product.desc.toLowerCase().includes(search);
    return matchesCategory&&matchesSearch;
  });

  if(filteredProducts.length===0){
    grid.innerHTML=`<p class="empty-cart">No encontré productos con esa búsqueda.</p>`;
    return;
  }

  grid.innerHTML=filteredProducts.map(product=>`
    <article class="product-card">
      <img class="product-img" src="${product.img}" alt="${product.name}" loading="lazy" decoding="async">
      <div class="product-body">
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <div class="product-bottom">
          <span class="price">${product.comboOptions ? "Desde " : ""}${money(product.price)}</span>
          <button class="add-btn" onclick="addToCart(${product.id})">Agregar</button>
        </div>
      </div>
    </article>`).join("");
}

function openComboModal(product){
  const modal=document.getElementById("comboModal");
  const burgerSelect=document.getElementById("comboBurger");
  const drinkSelect=document.getElementById("comboDrink");
  const priceEl=document.getElementById("comboPrice");
  const titleEl=document.getElementById("comboTitle");

  titleEl.textContent=product.name;
  burgerSelect.innerHTML=product.comboOptions.burgers.map((o,i)=>
    `<option value="${i}">${o.name}${o.extra ? ` (+${money(o.extra)})` : ""}</option>`
  ).join("");
  drinkSelect.innerHTML=product.comboOptions.drinks.map((o,i)=>
    `<option value="${i}">${o.name}${o.extra ? ` (+${money(o.extra)})` : ""}</option>`
  ).join("");

  function updatePrice(){
    const burger=product.comboOptions.burgers[Number(burgerSelect.value)];
    const drink=product.comboOptions.drinks[Number(drinkSelect.value)];
    priceEl.textContent=money(product.price+burger.extra+drink.extra);
  }
  burgerSelect.onchange=updatePrice;
  drinkSelect.onchange=updatePrice;
  document.getElementById("comboConfirm").onclick=()=>{
    const burger=product.comboOptions.burgers[Number(burgerSelect.value)];
    const drink=product.comboOptions.drinks[Number(drinkSelect.value)];
    addConfiguredCombo(product,burger,drink);
    closeComboModal();
  };
  updatePrice();
  modal.classList.add("show");
  document.body.classList.add("modal-open");
}

function closeComboModal(){
  document.getElementById("comboModal").classList.remove("show");
  document.body.classList.remove("modal-open");
}

function addConfiguredCombo(product,burger,drink){
  const unitPrice=product.price+burger.extra+drink.extra;
  const cartKey=[product.id,"",burger.name,drink.name,unitPrice].join("|");
  const existingItem=cart.find(item=>item.cartKey===cartKey);
  if(existingItem){existingItem.qty+=1;}
  else{cart.push({...product,price:unitPrice,basePrice:product.price,selectedOption:"",selectedBurger:burger.name,selectedDrink:drink.name,cartKey,qty:1});}
  saveCart();renderCart();showToast("Combo agregado");
}

function openSelectionModal(product){
  const modal=document.getElementById("selectionModal");
  const fields=document.getElementById("selectionFields");
  const priceEl=document.getElementById("selectionPrice");
  const titleEl=document.getElementById("selectionTitle");

  titleEl.textContent=product.name;
  fields.innerHTML=product.selections.map((group,groupIndex)=>`
    <label>${group.label}
      <select class="generic-selection" data-group="${groupIndex}">
        ${group.options.map((o,i)=>`<option value="${i}">${o.name}${o.extra ? ` (+${money(o.extra)})` : ""}</option>`).join("")}
      </select>
    </label>`).join("");

  const selects=[...fields.querySelectorAll(".generic-selection")];
  function getSelected(){
    return selects.map((select,index)=>{
      const group=product.selections[index];
      const option=group.options[Number(select.value)];
      return {label:group.label,name:option.name,extra:option.extra||0};
    });
  }
  function updatePrice(){
    const extra=getSelected().reduce((sum,item)=>sum+item.extra,0);
    priceEl.textContent=money(product.price+extra);
  }
  selects.forEach(select=>select.onchange=updatePrice);
  document.getElementById("selectionConfirm").onclick=()=>{
    addConfiguredProduct(product,getSelected());
    closeSelectionModal();
  };
  updatePrice();
  modal.classList.add("show");
  document.body.classList.add("modal-open");
}

function closeSelectionModal(){
  document.getElementById("selectionModal").classList.remove("show");
  document.body.classList.remove("modal-open");
}

function addConfiguredProduct(product,selections){
  const unitPrice=product.price+selections.reduce((sum,item)=>sum+item.extra,0);
  const selectionKey=selections.map(item=>`${item.label}:${item.name}`).join("|");
  const cartKey=[product.id,selectionKey,unitPrice].join("|");
  const existingItem=cart.find(item=>item.cartKey===cartKey);
  if(existingItem){existingItem.qty+=1;}
  else{
    cart.push({...product,price:unitPrice,basePrice:product.price,selectedSelections:selections,cartKey,qty:1});
  }
  saveCart();renderCart();showToast("Producto agregado");
}

function chooseOption(title, options){
  const select=document.createElement("select");
  // Las opciones simples existentes siguen usando prompt; Combo Breaker usa el selector visual.
  const menu=options.map((option,index)=>`${index+1}. ${option.name}`).join("\n");
  const answer=prompt(`${title}:\n\n${menu}\n\nEscribe el número de tu elección:`);
  if(answer===null)return null;
  const optionIndex=parseInt(answer,10)-1;
  return optionIndex>=0&&optionIndex<options.length ? options[optionIndex] : null;
}

function addToCart(productId){
  const product=products.find(item=>item.id===productId);
  if(!product)return;

  let selectedOption="";
  let selectedBurger="";
  let selectedDrink="";
  let unitPrice=product.price;

  if(product.comboOptions){
    openComboModal(product);
    return;
  }else if(product.selections){
    openSelectionModal(product);
    return;
  }else if(product.options){
    const options=product.options.map(name=>({name,extra:0}));
    const option=chooseOption(`Elige una opción para ${product.name}`,options);
    if(!option)return;
    selectedOption=option.name;
  }

  const cartKey=[product.id,selectedOption,selectedBurger,selectedDrink,unitPrice].join("|");
  const existingItem=cart.find(item=>item.cartKey===cartKey);

  if(existingItem){
    existingItem.qty+=1;
  }else{
    cart.push({...product,price:unitPrice,basePrice:product.price,selectedOption,selectedBurger,selectedDrink,cartKey,qty:1});
  }

  saveCart();
  renderCart();
  showToast("Producto agregado");
}

function changeQty(cartKey,amount){
  const item=cart.find(product=>product.cartKey===cartKey);
  if(!item)return;
  item.qty+=amount;
  if(item.qty<=0)cart=cart.filter(product=>product.cartKey!==cartKey);
  saveCart();
  renderCart();
}

function clearCart(){cart=[];saveCart();renderCart();}
function calculateSubtotal(){return cart.reduce((sum,item)=>sum+item.price*item.qty,0);}
function calculateTotals(){const subtotal=calculateSubtotal();const orderType=document.getElementById("orderType").value;const delivery=orderType==="domicilio"&&subtotal>0?DELIVERY_PRICE:0;const total=subtotal+delivery;const hasPromo=subtotal>=FREE_FRIES_MINIMUM;document.getElementById("subtotal").textContent=money(subtotal);document.getElementById("deliveryCost").textContent=money(delivery);document.getElementById("total").textContent=money(total);document.getElementById("promoLine").classList.toggle("hidden",!hasPromo);return{subtotal,delivery,total,hasPromo};}

function itemDetails(item){
  const details=[];
  if(item.selectedOption)details.push(item.selectedOption);
  if(item.selectedBurger)details.push(`Hamburguesa: ${item.selectedBurger}`);
  if(item.selectedDrink)details.push(`Refresco: ${item.selectedDrink}`);
  if(item.selectedSelections){
    item.selectedSelections.forEach(selection=>details.push(`${selection.label}: ${selection.name}`));
  }
  return details.join(" · ");
}

function renderCart(){
  const container=document.getElementById("cartItems");
  if(cart.length===0){
    container.innerHTML=`<p class="empty-cart">Tu carrito está vacío. Agrega productos del menú.</p>`;
  }else{
    container.innerHTML=cart.map(item=>`
      <div class="cart-item">
        <div>
          <strong>${item.name}</strong>
          ${itemDetails(item)?`<small>${itemDetails(item)}</small>`:""}
          <small>${money(item.price)} c/u</small>
        </div>
        <div class="qty">
          <button onclick='changeQty(${JSON.stringify(item.cartKey)},-1)'>−</button>
          <strong>${item.qty}</strong>
          <button onclick='changeQty(${JSON.stringify(item.cartKey)},1)'>+</button>
        </div>
        <div class="item-total">${money(item.price*item.qty)}</div>
      </div>`).join("");
  }
  const itemCount=cart.reduce((sum,item)=>sum+item.qty,0);
  document.getElementById("cartCount").textContent=itemCount;
  calculateTotals();
}

function sendWhatsApp(){
  if(cart.length===0){alert("Agrega productos al carrito antes de enviar tu pedido.");return;}
  const name=document.getElementById("customerName").value.trim();
  const orderType=document.getElementById("orderType").value;
  const address=document.getElementById("customerAddress").value.trim();
  const payment=document.getElementById("paymentMethod").value;
  const notes=document.getElementById("customerNotes").value.trim();
  if(!name){alert("Escribe tu nombre.");return;}
  if(orderType==="domicilio"&&!address){alert("Escribe tu dirección para el envío.");return;}

  const totals=calculateTotals();
  let message=`Hola Rock Burger, quiero hacer un pedido:%0A%0A`;
  cart.forEach(item=>{
    const details=itemDetails(item);
    message+=`• ${item.qty} x ${item.name}${details ? " - "+details : ""} - ${money(item.price*item.qty)}%0A`;
  });
  message+=`%0ASubtotal: ${money(totals.subtotal)}`;
  message+=`%0AEnvío: ${money(totals.delivery)}`;
  message+=`%0ATotal aprox: ${money(totals.total)}`;
  if(totals.hasPromo)message+=`%0APromo: Papas gratis por compra mayor a $200`;
  message+=`%0A%0ANombre: ${encodeURIComponent(name)}`;
  message+=`%0AEntrega: ${orderType==="domicilio"?"A domicilio":"Paso a recoger"}`;
  message+=`%0ADirección: ${encodeURIComponent(address||"Paso a recoger")}`;
  message+=`%0APago: ${encodeURIComponent(payment)}`;
  message+=`%0ANotas: ${encodeURIComponent(notes||"Sin notas")}`;
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`,"_blank");
}

function saveCart(){localStorage.setItem("rockBurgerCart",JSON.stringify(cart));}
function loadCart(){
  const savedCart=localStorage.getItem("rockBurgerCart");
  if(savedCart){
    try{
      cart=JSON.parse(savedCart).map(item=>({
        ...item,
        cartKey:item.cartKey||[item.id,item.selectedOption||"",item.selectedBurger||"",item.selectedDrink||"",item.price].join("|")
      }));
    }catch(error){cart=[];}
  }
}
function showToast(text){const toast=document.getElementById("toast");toast.textContent=text;toast.classList.add("show");setTimeout(()=>{toast.classList.remove("show");},1600);}
