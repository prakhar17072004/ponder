import { ponder } from "ponder:registry";
import schema, { Refund, Reward } from "ponder:schema";
import { generateRandomHexString, stringToHex } from "../utils/helper";

ponder.on("SideBetV6:SideBetEventInitialized", async ({ event, context }) => {
  const network = context.network.name;
  const db = context.db;
  await db.insert(schema.prediction).values({
    id: `0x${stringToHex(`${event.args.eventCode}${network}`)}`,
    network: network,
    EventCode: event.args.eventCode,
    teamA: event.args.teamA,
    teamB: event.args.teamB,
    standardToken: event.args.standardToken,
    startTime: event.args.startTime,
    endTime: event.args.endTime,
  
    createAt: event.block.timestamp,
  });
});

ponder.on("SideBetV6:Deposited", async ({ event, context }) => {
  const network = context.network.name;
  const db = context.db;
  const eventData = await db.find(schema.prediction, {
    id: `0x${stringToHex(`${event.args.eventCode}${network}`)}`,
    network: network,
  });
  if (eventData) {
    await db.insert(schema.deposit).values({
      network: network,
      EventId: eventData.id,
      EventCode: event.args.eventCode,
      amount: event.args.amount,
      teamIndex: event.args.teamIndex,
      teamName: event.args.teamIndex === 0 ? eventData.teamA : eventData.teamB,
      
      standardToken: eventData.standardToken,
      txid: event.transaction.hash,
      createAt: event.block.timestamp,
    });
    
  }
});
