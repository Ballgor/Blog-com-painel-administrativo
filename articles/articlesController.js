const express = require("express");
const router = express.Router();
 
router.get("/articles", (req, res) => {
    res.send("ROTA DE ARTIGOS")
});

router.get("/admin/articles/new", (req,res) =>{
    redirect.send("ROTA PARA CRIAR UMA NOVO ARTIGO")
})

module.exports = router;