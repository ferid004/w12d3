const express = require('express')
const app = express()
// cors
app.use(require("cors")())
const port = 3000
const arr = [
    {
        "id": 1,
        "name": "Alma",
        "price": "5",
        "info": "Quba Almasi",
        "image": "https://img2.milli.az/n/clickable/204433/07/4/alma_041.jpg"
    },
    {
        "id": 2,
        "name": "armud",
        "price": "3",
        "info": "sari armud",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUDzV6R36ismof4afvbBq1v_LdbWFGOHCBIA&usqp=CAU"
    },
    {
        "id": 3,
        "name": "nar",
        "price": "1",
        "info": "goycay nari",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7GZBJc4JZqUbLuavEJ1gGAYAljaUMCoHJw&usqp=CAU"
    },
    {
        "id": 4,
        "name": "naringi",
        "price": "kaşki 10 manat olsa",
        "info": "astara naringisi ",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qMJKNZlNWR4-WWN2gFpoWi9WqStNhu5pzA&usqp=CAU"
    },
]
app.use(express.json());
// normal get
app.get('/', (req, res) => {
    res.send(arr);
});

// id'ye gore get
app.get('/user/:id', (req, res) => {
    const id = req.params.id
    const item = arr.find(x => x.id === +id)
    res.send(item)
})

// normal post 
app.post('/', (req, res) => {
    let user = req.body;
    let idNo = arr[arr.length - 1].id
    user.id = idNo + 1;
    arr.push(user);
    res.send(arr)
})


//normal put id'ye gore
app.put('/:id', (req, res) => {
    const { id } = req.params
    const index = arr.findIndex(x => x.id === +id)
    arr[index] = { id: +id, ...req.body }
    res.send(arr)
})

// normal delete
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

// id'e gore delete
app.delete('/user/:id', (req, res) => {
    const id = req.params.id
    const item = arr.find(x => x.id == +id)
    if (item) {
        const DeletedUser = arr.filter(x => x.id != id)
        res.send(DeletedUser)
        res.status(200).json({ message: "User Deleted!" })
    } else {
        res.status(404).json({ message: "User Tapilmadi!" })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

