# Multichain Wallet Tracker

A high-performance monitoring tool for Web3 power users and developers. This service tracks specific wallet addresses across various EVM chains and logs transaction details, facilitating the creation of portfolio trackers or security alerts.

## Features
* **Real-time Monitoring:** Uses WebSocket connections (WSS) for near-instant transaction detection.
* **Cross-Chain Support:** Easily add or remove chains like Ethereum, Polygon, Base, and Arbitrum.
* **Smart Filter:** Distinguishes between native token transfers and ERC-20 token movements.
* **Headless Design:** Perfect for integration into Telegram bots, Discord webhooks, or dashboard backends.

## Prerequisites
* Node.js (v18+)
* WSS (WebSocket) provider URLs from Alchemy or QuickNode.

## Setup
1. `npm install`
2. Update the `watch-list.js` with the addresses you want to track.
3. Start the tracker: `node tracker.js`
