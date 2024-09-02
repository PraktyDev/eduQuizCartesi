import { CartesiNode } from '@cartesi/node';

class DApp {
    constructor() {
        this.node = new CartesiNode();
    }

    async start() {
        // Start the Cartesi node
        await this.node.start();
    }

    async stop() {
        // Stop the Cartesi node
        await this.node.stop();
    }
}

export default DApp;