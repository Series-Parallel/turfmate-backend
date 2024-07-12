require('dotenv').config();

const express = require('express')
const app = express()
const allTurf = require('./routes/turf')
const singleTurf = require('./routes/singleTurf')


//middleware
app.use(express.json())

app.get('/',(req,res) => {
  res.send('hello there!')
})

app.use('/api/v1/turf',allTurf)
app.use('/api/v1/turf',singleTurf)


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

