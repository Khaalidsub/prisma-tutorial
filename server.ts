import { createServer } from 'http'
import { app } from './app'

const bootstrap = () => {
    const server = createServer(app)

    server.listen(3000, () => {
        console.log('listening on port 3000');
    })
}


bootstrap()