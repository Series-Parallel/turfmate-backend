require('dotenv').config();

const express = require('express')
const app = express()
const turf = require('./routes/turf')

//middleware
app.use(express.json())

app.get('/',(req,res) => {
  res.send('hello there!')
})

app.use('/api/v1/turf',turf)


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

