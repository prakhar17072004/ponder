
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
      address: "0x5a2417ffc4964652dabbf24af6dc72ca43d62c62",
      network: {
        holesky: {
          startBlock: 3108205,
        }
      }
    },
  },
});
