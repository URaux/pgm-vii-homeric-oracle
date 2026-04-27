const oracles = window.PGM_VII_HOMERIC_ORACLES || {};

const dieA = document.querySelector("#die-a");
const dieB = document.querySelector("#die-b");
const dieC = document.querySelector("#die-c");
const oracleText = document.querySelector("#oracle-text");
const drawButton = document.querySelector("#draw-button");

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function drawOracle() {
  const roll = [rollDie(), rollDie(), rollDie()];
  const key = `${roll[0]}-${roll[1]}-${roll[2]}`;
  const oracle = oracles[key] || "原文表格缺少这一条。请重新掷一次，或在源文本中补入此编号。";

  dieA.value = roll[0];
  dieB.value = roll[1];
  dieC.value = roll[2];
  oracleText.textContent = oracle;
}

drawButton.addEventListener("click", drawOracle);
