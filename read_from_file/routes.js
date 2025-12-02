const fs = require("fs");
const reqResHandler = (req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    let fileContent = null;

    try {
      fileContent = fs.readFileSync("formData.txt", "utf-8");
    } catch (err) {
      console.error("Error reading file:", err.message);
    }

    res.end(`
        <p>${fileContent}</p>
        <form action="/message" method="POST">
          <label>Name:</label>
          <input type="text" name="username">
          <button>Add</button
        </form
        `);
  } else if (url === "/message") {
    let data = "";
    req.on("data", (chunk) => {
      data = chunk.toString().split("=")[1];
    });

    req.on("end", () => {
      fs.writeFile("formData.txt", data, () => {});
    });

    res.writeHead(302, { Location: "/" });
    res.end();
  }
};

const testFunction = () => {
  console.log("this is test function");
};

exports.handler = reqResHandler;
exports.test = testFunction;
