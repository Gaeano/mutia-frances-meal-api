const express = require("express");

const app = express();
const PORT = 3000;



const menu =[
    {
        "id": 1,
        "name": "Pork Adobo",
        "price": "150"
    },
    {
        "id": 2,
        "name": "Beef Sinigang",
        "price": "220"
    },
    {
        "id": 3,
        "name": "Pork Sisig",
        "price": "190"
    },
    {
        "id": 4,
        "name": "Chicken Inasal",
        "price": "180"
    },
    {
        "id": 5,
        "name": "Kare-Kare",
        "price": "280"
    },
    {
        "id": 6,
        "name": "Lechon Kawali",
        "price": "250"
    },
    {
        "id": 7,
        "name": "Pancit Canton",
        "price": "120"
    },
    {
        "id": 8,
        "name": "Lumpiang Shanghai",
        "price": "100"
    },
    {
        "id": 9,
        "name": "Halo-Halo",
        "price": "90"
    },
    {
        "id": 10,
        "name": "Leche Flan",
        "price": "75"
    }
];

app.get("/api/menu", (req, res) => {
    res.json(menu);
});

//get by id
app.get("/api/menu/:id", (req, res) => {
    const id = Number(req.params.id);

    const menuItem = menu.find(item => 
        item.id === id
    );

    if (!menuItem){
        return res.status(404).json({message: "food not found"});
    }

    res.json(menuItem);

});


app.use(express.static(__dirname));
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})
