const { ethers } = require('ethers');
const { TARGET_WALLETS, NETWORKS } = require('./watch-list');

function startTracking() {
    NETWORKS.forEach(network => {
        try {
            const provider = new ethers.WebSocketProvider(network.wss);
            console.log(`--- Monitoring started on ${network.name} ---`);

            provider.on("pending", async (txHash) => {
                try {
                    const tx = await provider.getTransaction(txHash);
                    
                    if (tx && TARGET_WALLETS.some(addr => addr.toLowerCase() === tx.from.toLowerCase())) {
                        console.log(`[${network.name}] OUTGOING: ${tx.from} -> ${tx.to} | Value: ${ethers.formatEther(tx.value)} ETH`);
                    }
                    
                    if (tx && tx.to && TARGET_WALLETS.some(addr => addr.toLowerCase() === tx.to.toLowerCase())) {
                        console.log(`[${network.name}] INCOMING: ${tx.from} -> ${tx.to} | Value: ${ethers.formatEther(tx.value)} ETH`);
                    }
                } catch (err) {
                    // Silently handle cases where tx body is not yet available
                }
            });

            // Handle connection drops
            provider._websocket.on("close", () => {
                console.error(`Connection lost for ${network.name}. Reconnecting...`);
                setTimeout(startTracking, 5000);
            });

        } catch (error) {
            console.error(`Error connecting to ${network.name}:`, error.message);
        }
    });
}

startTracking();
