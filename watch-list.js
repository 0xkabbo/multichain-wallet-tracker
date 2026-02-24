// WALLETS AND NETWORKS TO MONITOR
module.exports = {
    // Array of addresses to watch
    TARGET_WALLETS: [
        "0x0000000000000000000000000000000000000000" // Replace with actual addresses
    ],
    
    // WSS endpoints for different networks
    NETWORKS: [
        {
            name: "Ethereum",
            wss: "wss://eth-mainnet.g.alchemy.com/v2/YOUR_KEY"
        },
        {
            name: "Base",
            wss: "wss://base-mainnet.g.alchemy.com/v2/YOUR_KEY"
        }
    ]
};
