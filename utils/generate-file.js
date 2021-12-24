const fs = require("fs");

const writeReadMe = (userInput) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/readme.md", userInput, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "README created!",
      });
    });
  });
};

module.exports = {
  writeReadMe: writeReadMe,
};
