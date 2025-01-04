
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
      address: "0xF1caaa7570EEbB4E6aefE9C2Db3E918f7a65192d",
      network: {
        taiko: {
          startBlock: 414069,
        },
        telos: {
          startBlock: 364808780,
        }
      }
    },
  },
});
