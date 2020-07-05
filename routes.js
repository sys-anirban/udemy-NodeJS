const fs = require("fs");

const routeServer = (req, res) => {
  const { url, method } = req;
  if (url === "/") {
    res.write("<html><head><title>Assignment 1</title></head>");
    res.write(
      '<body><form method="POST" action="create-user"><input type="text" name="user"  /><button type="submit">Submit</button></form></body>'
    );
    res.write("</html>");
    res.end();
  }
  if (url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        if (!err) {
          console.log("p", message);
          res.setHeader("Content-Type", "text/html");
          res.statusCode = 302;

          res.write("<html><head><title>users</title></head>");
          res.write(
            "<body><ul><li>Anirban</li><li>Alex</li><li>JOhn</li></ul></body></html>"
          );
        }
        res.end();
      });
    });
  }
};
module.exports = routeServer;
