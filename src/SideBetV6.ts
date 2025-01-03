import { ponder } from "ponder:registry";
import schema, { } from "ponder:schema";
 import { generateRandomHexString, stringToHex } from "../Utils/helper"

ponder.on("SideBetV6:SideBetEventInitialized", async ({ event, context }) => {
  const network = context.network.name
  const db = context.db
  await db.insert(schema.prediction).values({
    id: `0x${stringToHex(`${event.args.eventCode}${network}`)}`,
    network: network,
    teamA: event.args.teamA,
    teamB: event.args.teamB,
    standardToken: event.args.standardToken,
    startTime: event.args.startTime,
    endTime: event.args.endTime,
    
  })
});

ponder.on("SideBetV6:Deposited", async ({ event, context }) => {
  const network = context.network.name
  const db = context.db
  const eventData = await db.find(schema.prediction, {id: `0x${stringToHex(`${event.args.eventCode}${network}`)}`, network:network})
  if(eventData){
      await db.insert(schema.deposit).values({
          network: network,
          amount: event.args.amount,
          teamIndex: event.args.teamIndex,
          teamName: event.args.teamIndex === 0 ? eventData.teamA : eventData.teamB,
          
      })
  }
});
