
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
      abi:SideBetV6Abi,
      address: "0x5a2417FfC4964652DABBF24Af6dc72cA43D62c62",
      network: {
        holesky: {
          startBlock: 3108205,
        }
      }
    },
  },
});
