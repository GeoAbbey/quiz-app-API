const fs = require("fs");

// To get new ID while creating a question
const getNewId = array => {
  if (array.length > 0) {
    return array[array.length - 1].id + 1;
  } else {
    return 1;
  }
};


// To get new date while creating a question
const newDate = () => new Date().toString();


// To find a question with provided ID
function findAQuestion(array, id) {
  return new Promise((resolve, reject) => {
    const row = array.find(r => r.id == id);
    if (!row) {
      reject({
        message: "Question with the provided ID does not exist",
        status: 404
      });
    }
    resolve(row);
  });
}


// To write to the JSON file
function writeJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", err => {
    if (err) {
      console.log(err);
    }
  });
}


module.exports = {
  getNewId,
  newDate,
  findAQuestion,
  writeJSONFile
};
