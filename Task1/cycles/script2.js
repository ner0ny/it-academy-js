let desc = "";

for (let i = 1; i <= 8; i++) {
  desc += "\n";
  for (let j = 1; j <= 8; j++) {
    if (i % 2 === 0) {
      if (j % 2 === 0) {
        desc += "\u2B1C";
      } else {
        desc += "\u2B1B";
      }
    } else {
      if (j % 2 === 0) {
        desc += "\u2B1B";
      } else {
        desc += "\u2B1C";
      }
    }
  }
}
console.log(desc);
