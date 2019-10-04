exports.old = function(){

    app.delete('/accounts/:id', (req, res) =>{
    store.accounts.splice(req.params.id,1)
    res.status(204).send()
})
}
