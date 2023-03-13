import http from "node:http";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.APP_PORT || 2000;

http
  .createServer(function (req, res) {
    res.setHeader("Content-type", "text/html;charset = utf-8;");
    if (req.url === "/") {
      res.write(
        "<h1>Hi, Mikhail !!! Here will be my project about hospital</h1>"
      );
    } else {
      res.write("<h1>You can't found pages here(</h1>");
    }
    res.end();
  })
  .listen(PORT);
