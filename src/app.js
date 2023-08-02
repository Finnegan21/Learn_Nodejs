const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const Compression = require('compression')
const app = express()


// init middlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(Compression())


// init db

// init router
app.get('/', (req, res, next) => {
    const strCompress = 'Hello jstips'
    return res.status(200).json({
        message: 'Welcome fantipjs',
        metadata: strCompress.repeat(10000)
    })
})
// handle error

module.exports = app;