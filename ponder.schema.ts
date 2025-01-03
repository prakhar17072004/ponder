import { onchainEnum, onchainTable, primaryKey, relations  } from "ponder";
import { generateRandomHexString } from "./Utils/helper";

export const NETWORK_ENUM = onchainEnum("network",["taiko", "telos", "mantle", "arbitrumSepolia"])

export const prediction = onchainTable("prediction",(t) => ({
    id: t.hex().notNull(),
    network: NETWORK_ENUM("network").notNull(),
    predictionCode: t.text().notNull(),
    teamA: t.text().notNull(),
    teamB: t.text().notNull(),
    standardToken: t.hex().notNull(),
    startTime: t.bigint().notNull(),
    endTime: t.bigint().notNull(),
    txid: t.hex().notNull(),
    isReward: t.boolean(),
    isRefund: t.boolean(),
    isCancelled: t.boolean(),
    hasWinner: t.boolean(),
    feeTaken: t.boolean(),
    createAt: t.bigint().notNull()
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.id, table.network] }),
  })
);
  
export const deposit = onchainTable("deposit", (t) => ({
    id: t.hex().$default(() => `0x${generateRandomHexString()}`),
    network: NETWORK_ENUM("network").notNull(),
    predictionId: t.hex().notNull(),
    predictionCode: t.text().notNull(),
    amount: t.bigint().notNull(),
    teamIndex: t.integer().notNull(),
    teamName: t.text().notNull(),
    user: t.hex().notNull(),
    txid: t.hex().notNull(),
    createAt: t.bigint().notNull()
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.id, table.network] }),
  }))
