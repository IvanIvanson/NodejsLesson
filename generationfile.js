const {stat, writeFile} = require('fs');

const filesize = 1;

function generateFileName() {
    return 'file.txt';
}
function getContent() {
    return 'lorem ipsum dolor seet'
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function getFileSize(name) {
    
    return new Promise((resolve, reject) => stat(name, (err, { size }) => {
        if (err) return reject(err);
        resolve(size);
    }));
}
function writeFileContent(name, content) {
    return new Promise((resolve, reject) => writeFile(name, content, (err) => {
        if (err) return reject(err);
        resolve();
    }));
}

(async function main(fileName) {
    const cfs = await getFileSize(fileName);
    if (cfs > filesize) {
        return main(generateFileName());
    }
    const content = getContent();
    await writeFileContent(fileName, content);

    await sleep(200);
    return main(fileName);
})(generateFileName()).catch(console.error);