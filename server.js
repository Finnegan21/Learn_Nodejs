const app = require("./src/app");

const PORT = 3000
const server = app.listen(PORT, () => {
    console.log(`Ecommerce start with ${PORT}`)
})

// process.on('SIGINT', () => {
//     server.close( () => console.log('Exit server express'))
// })