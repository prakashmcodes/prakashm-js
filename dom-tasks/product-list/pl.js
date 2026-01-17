


const products = [
  "Laptop",
  "Smartphone",
  "Wireless Mouse",
  "Keyboard",
  "Headphones",
  "Smart Watch",
  "Tablet",
  "Power Bank",
  "Bluetooth Speaker",
  "Monitor",
  "Webcam",
  "Printer",
  "Scanner",
  "External Hard Drive",
  "USB Flash Drive",
  "Router",
  "Modem",
  "Smart TV",
  "Game Controller",
  "Gaming Console",
  "Office Chair",
  "Desk Lamp",
  "Bookshelf",
  "Backpack",
  "Laptop Stand",
  "Camera",
  "Tripod",
  "Microphone",
  "Sound Card",
  "VR Headset",
  "Air Conditioner",
  "Refrigerator",
  "Washing Machine",
  "Microwave Oven",
  "Induction Stove",
  "Electric Kettle",
  "Water Purifier",
  "Vacuum Cleaner",
  "Iron Box",
  "Ceiling Fan",
  "Shoes",
  "T-Shirt",
  "Jeans",
  "Jacket",
  "Watch",
  "Sunglasses",
  "Wallet",
  "Belt",
  "Cap",
  "Perfume"
];


const button = document.getElementById('f-button')

const list = document.getElementById("p-list")


button.addEventListener("click",()=>{
    console.time("document fragment")
    
    const fragment = document.createDocumentFragment()
    
    for (let i=0;i<50;i++) {
        const li = document.createElement(`li`)
        li.textContent = i+". " + products[i];
        fragment.appendChild(li)
}


list.appendChild(fragment)

console.timeEnd("document fragment");


},{
    once:true
})



// const alist = document.getElementById("a-list")

// console.time("withoutfragment")
// for (let i=0;i<10;i++) {
//     const li = document.createElement(`li`)
//     li.textContent = products + " " + i;
//     alist.appendChild(li)
// }
// console.timeEnd("withoutfragment")