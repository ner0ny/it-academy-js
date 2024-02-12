function compress(uncompressedStr) {
  let compressed = "";
  let letter;
  let count = 0;

  for (let i = 0; i <= uncompressedStr.length - 1; i++) {
    letter = uncompressedStr[i];

    if (uncompressedStr.length === 1) {
      compressed = letter;
    } else {
      if (uncompressedStr[i + 1] !== letter) {
        count++;
        compressed += letter + count;
        count = 0;
      } else {
        count++;
      }
    }
  }
  console.log(compressed);
}

function uncompress(compressedStr) {
  let uncompressed = "";
  let letter;
  let count;

  for (let i = 0; i <= compressedStr.length - 1; i++) {
    if (isNaN(compressedStr[i])) {
      letter = compressedStr[i];
      count = 0;
      if (i === compressedStr.length - 1) {
        uncompressed += letter;
      }
    } else {
      count += compressedStr[i];
      if (isNaN(compressedStr[i + 1])) {
        uncompressed += letter.repeat(count);
      }
    }
  }
  console.log(uncompressed);
}

compress("a");
compress("aaa");
compress("aabbb");
compress("fffdccbbb");

uncompress("a");
uncompress("a5");
uncompress("a2b3");
uncompress("a12b1c3");
