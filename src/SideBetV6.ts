import { ponder } from "ponder:registry";
// import { blitmapTokens } from "ponder:schema";
 
ponder.on("SideBetV6:SideBetEventInitialized", async ({ event, context }) => {
  const network = context.network.name
  const db = context.db
  await db.insert(schema.prediction).values({
    id: `0x${stringToHex(`${event.args.eventCode}${network}`)}`,
    network: network,
    predictionCode: event.args.eventCode,
    teamA: event.args.teamA,
    teamB: event.args.teamB,
    standardToken: event.args.standardToken,
    startTime: event.args.startTime,
    endTime: event.args.endTime,
    txid: event.transaction.hash,
    createAt: event.block.timestamp
  })
});