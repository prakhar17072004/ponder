import { onchainEnum, onchainTable, primaryKey, relations  } from "ponder";
import { generateRandomHexString } from "./Utils/helper";

export const NETWORK_ENUM = onchainEnum("network",["taiko"])

export const prediction = onchainTable("prediction",(t) => ({
    id: t.hex().notNull(),
    network: NETWORK_ENUM("network").notNull(),
    teamA: t.text().notNull(),
    teamB: t.text().notNull(),
    standardToken: t.hex().notNull(),
    startTime: t.bigint().notNull(),
    endTime: t.bigint().notNull(),

  }),
  (table) => ({
    pk: primaryKey({ columns: [table.id, table.network] }),
  })
);
  
export const deposit = onchainTable("deposit", (t) => ({
    id: t.hex().$default(() => `0x${generateRandomHexString()}`),
    network: NETWORK_ENUM("network").notNull(),
  
    amount: t.bigint().notNull(),
    teamIndex: t.integer().notNull(),
    teamName: t.text().notNull(),
    
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.id, table.network] }),
  }))
