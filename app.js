const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

app.use(express.json({ extended: true}))

app.use('/api/auth', require('./routes/auth.routes'))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
  }
  
const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongodbUrl'), {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
    } catch(err) {
        console.log('Database connect error', err.message)
        process.exit(1)
    }
}

start()

app.listen(PORT, () => {
    console.log(`app has been started on port ${PORT}`)
})