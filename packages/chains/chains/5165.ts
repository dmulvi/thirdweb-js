import type { Chain } from "../src/types";
export default {
  "name": "Sahara",
  "title": "Bahamut mainnet Sahara",
  "chain": "Bahamut",
  "icon": {
    "url": "ipfs://QmSemioP83RXnDWwTZbet8VpwJxcFRboX4B3pcdhLZGodP",
    "width": 200,
    "height": 200,
    "format": "png"
  },
  "rpc": [
    "https://sahara.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc1.sahara.bahamutchain.com",
    "https://rpc2.sahara.bahamutchain.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "FTN",
    "symbol": "FTN",
    "decimals": 18
  },
  "shortName": "ftn",
  "infoURL": "https://fastexchain.com",
  "chainId": 5165,
  "networkId": 5165,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://ftnscan.com",
      "standard": "none"
    }
  ],
  "testnet": false,
  "slug": "sahara"
} as const satisfies Chain;