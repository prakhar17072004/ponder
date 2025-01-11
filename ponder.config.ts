
import { createConfig } from "ponder";
import { http } from "viem";

import { SideBetV6Abi } from "./abis/SideBetV6Abi";

export default createConfig({
  networks: {
    taiko: {
      chainId: 167000,
      transport: http(process.env.PONDER_RPC_URL_167000),
    }
  },
  contracts: {
    SideBetV6: {
      abi: SideBetV6Abi,
      address: "0x9ef9c57754ed079d750016b802dccd45d0ab66f8",
      network: {
        taiko: {
          startBlock: 414069,
        },
      
      }
    },
  },
});
