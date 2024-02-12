function compress(uncompressStr) {
  let compressed = "";
  let letter = "";
  for (let i = 0; i < uncompressStr.length; i++) {
    let count = "";
    if (letter !== uncompressStr[i]) {
      letter = uncompressStr[i];

      if (i === uncompressStr.length - 1) {
        compressed = letter;
      } else {
        for (let i = 0; i <= uncompressStr.length; i++) {
          if (letter === uncompressStr[i]) {
            count++;
          }
        }
        compressed += letter + count;
      }
    }
  }
  console.log(compressed);
}

function uncompress(compressStr) {
  let uncompressed = "";
  let letter = "";
  let count = "";
  for (let i = 0; i < compressStr.length; i++) {
    if (isNaN(compressStr[i])) {
      letter = compressStr[i];
      count = "";
      if (i === compressStr.length - 1) {
        uncompressed += letter;
      }
    }

    if (!isNaN(compressStr[i])) {
      count += compressStr[i];
      if (isNaN(compressStr[i + 1])) {
        uncompressed += letter.repeat(count);
      }
    }
  }
  console.log(uncompressed);
  return uncompressed;
}
