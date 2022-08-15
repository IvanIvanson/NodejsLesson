const fs = require('fs');

// --------потоки-------
const readStream = fs.createReadStream("./accessread.log", 'utf8');
readStream.on("data", (chunk) => {
  if (chunk.toString().includes("89.123.1.41")) {
    console.log("Запрос выполнен");
    console.log(chunk);
    const writeStream = fs.createWriteStream("./accesswrite.log/", {
      flags: "a",
      encoding: "utf8",
    });
    writeStream.write("\n");
    writeStream.write(chunk);
    writeStream.end(() => console.log("File writing finished"));
  } else {
    console.log("по Вашему запросу ничего не найдено");
  }
    
   
});
readStream.on("end", () => console.log("File reading finished"));
readStream.on("error", () => console.log(err));