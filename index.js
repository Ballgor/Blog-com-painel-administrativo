const express =  require ("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database")

const categoriesController = require("./categories/categoriesController");
const articlesController = require("./articles/articlesController");



// View engine
app.set('view engine','ejs');

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//static
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index");
})

//databse
connection
    .authenticate()
    .then(() => {
        console.log("Conexão realizada com sucesso");
    }).catch((error) => {
        console.log(error);
    })

app.use("/",categoriesController);
app.use("/",articlesController);


app.get("/", (req, res) =>{
    res.render("index");
}) 

app.listen(8080, () => {
    console.log("O servidor esta on!")
})