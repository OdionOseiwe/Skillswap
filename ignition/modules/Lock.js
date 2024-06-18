const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LockModule", (m) => {

  // const USDT = m.contract("USDT",[], {
  // });

  const Skillswap = m.contract("SkillSwap",["0xFbba553bd8a051EA83D4Ac145b00c5F3827E2335"], {
  });

  return {Skillswap };
});

// skillswap 0xBF7823f67A9bde2FBA0cE79749335B010bD71722
// USDT 0xFbba553bd8a051EA83D4Ac145b00c5F3827E2335