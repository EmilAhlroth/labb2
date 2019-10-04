myObj = {
    "post": [
    {"name":"", "Comments":[]},
    {"name":"", "Comments":[]},
    {"name":"", "Comments":[] }
  ]
}

exports.old = function(){
  app.post('/accounts', (req, res) => {
  let newAccount = req.body
  let id = store.accounts.length
  store.accounts.push(newAccount)
  res.status(201).send({id: id})


})
}
