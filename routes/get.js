exports.old = function(){
app.get('/accounts', (reg, res) => {
  res.status(200).send(store.accounts)
})
}
