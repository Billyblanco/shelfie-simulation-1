let list = [{
  name: 'Vans',
  price: 50,
  imageUrl: 'https://images.vans.com/is/image/Vans/D5IB8C-HERO?$CATEGORY-LANDING-PRODUCT-REC$'
  }
]

let id = 2;

module.exports = {
  get: (req, res) => {
    // let db = req.app.get('db');
    //   db.get().then(response => {
    // res.status(200).send(list)
    // })
    res.send(list)
  },

  addItem: (req, res) => {
    const { name, price, imageUrl } = req.body
    let newProduct = {
      id: id,
      name: name, 
      price: price, 
      imageUrl: imageUrl
    }
    list.push(newProduct)
    id++
  }
}

// let db = req.app.get('db');
// db.addItem( [ name, price, imageUrl] ).then(response => {
   
//   res.status(200).send(list)
//   })
