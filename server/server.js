const express = require ('express');
const app= express();
const cors = require('cors');

const PORT = 3001;

app.use(cors());

app.get("/api/home", (req, res) => {
  res.json({ message: "Hello world !", monkey: ["sadMonke", "happyMonke", "blaiseMonke"]});
});


app.listen(PORT, () =>{
  console.log(`Server started on port ${PORT}`);
})
