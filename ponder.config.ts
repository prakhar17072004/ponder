
import { createConfig } from "ponder";
import { http } from "viem";

import { SideBetV6Abi } from "./abis/SideBetV6Abi";
import { holesky } from "viem/chains";

export default createConfig({
  networks: {
    holesky: {
      chainId:17000,
      transport: http(process.env.PONDER_RPC_URL_17000),
    }
  },
  contracts: {
    SideBetV6: {
      abi: SideBetV6Abi,
      address: "0xF1caaa7570EEbB4E6aefE9C2Db3E918f7a65192d",
      network: {
        holesky: {
          startBlock: 2914848,
        }
      }
    },
  },
});
