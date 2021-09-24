import * as anchor from "@project-serum/anchor";
import { SYSVAR_RECENT_BLOCKHASHES_PUBKEY } from "@solana/web3.js";

describe("test-recent-bh", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.Provider.env();
  anchor.setProvider(provider);

  const idl = JSON.parse(require("fs").readFileSync("./target/idl/test_recent_bh.json"));
  const programId = new anchor.web3.PublicKey("3vcGd5N1KYq3Gv9xPq9VNKqZPGFBRsS8SMGRgAWa98ph");
  const program = new anchor.Program(idl, programId);

  it("Is initialized!", async () => {
    const tx = await program.rpc.initialize({
      accounts: { recentBlockhashes: SYSVAR_RECENT_BLOCKHASHES_PUBKEY },
      signers: [],
    });
    console.log(tx);
  });
});
