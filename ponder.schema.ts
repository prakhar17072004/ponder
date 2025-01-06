import { onchainEnum, onchainTable, primaryKey, relations  } from "ponder";
import { generateRandomHexString } from "./Utils/helper";

export const NETWORK_ENUM = onchainEnum("network",["taiko"])

export const prediction = onchainTable("prediction",(t) => ({
    id: t.hex().notNull(),
    network: NETWORK_ENUM("network").notNull(),
    EventCode: t.text().notNull(),
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
    EventId: t.hex().notNull(),
    EventCode: t.text().notNull(),
    amount: t.bigint().notNull(),
    teamIndex: t.integer().notNull(),
    teamName: t.text().notNull(),
    
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.id, table.network] }),
  }))


  export const predictionRelations = relations(prediction, ({ many, one }) => ({
    deposits: many(deposit),
    // rewards: many(reward),
    // refunds: many(refund),
    // fee: one(fee, {
    //   fields: [prediction.id, prediction.network],
    //   references: [fee.predictionId, fee.network],
    // }),
    // result: one(result, {
    //   fields: [prediction.id, prediction.network],
    //   references: [result.predictionId, result.network],
    // }),
    // cancel: one(cancel, {
    //   fields: [prediction.id, prediction.network],
    //   references: [cancel.predictionId, cancel.network],
    // }),
  }));
  export const depositRelations = relations(deposit, ({ one }) => ({
    prediction: one(prediction, {
      fields: [deposit.EventId, deposit.network],
      references: [prediction.id, prediction.network],
    }),
  }));