const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const fsReadAsync = promisify(fs.readFile);
const fsWriteAsync = promisify(fs.writeFile);
const TODAY = new Date();

const FILE_PATH = path.resolve(__dirname, '../invalidation-batch.json');

console.log(FILE_PATH);

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const strTime = hours + ':' + minutes + ampm;
  return (
    date.getMonth() +
    1 +
    '-' +
    date.getDate() +
    '-' +
    date.getFullYear() +
    '-' +
    strTime
  );
}

(async () => {
  try {
    const data = await fsReadAsync(FILE_PATH, 'utf8');
    const invalidationFile = JSON.parse(data);
    invalidationFile.CallerReference = `clear-caches-${formatDate(TODAY)}`;

    await fsWriteAsync(FILE_PATH, JSON.stringify(invalidationFile, null, 2));

    console.log('Invalidation file has been updated!');
  } catch (error) {
    console.error(error);
  }
})();
