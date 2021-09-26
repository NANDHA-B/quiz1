let items=[{name: 'bike', price:100},
{name: 'tv', price:200},
{name: 'album', price:25},
{name: 'book', price:25},
{name: 'phone', price:10000},
{name: 'computer', price:20000},
{name: 'keyboard', price:500}
]
let filterItems= items.reduce((total, item)=>{return item.price-total},0)
console.log(filterItems)
/*items.forEach((item)=>{console.log(item.price)})
let icludeItems= items.includes(3)
console.log(icludeItems)*/