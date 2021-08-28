// start your server here
const server = require('./api/server')

const port = process.env.PORT ? process.env.PORT : 5000

server.listen(port, () => {
    console.log(`\n +★✶ Server running on port ${port} ✶★+ \n`)
})