"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
let app;
app = express_1.default();
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.listen(port, () => {
    // console.log(`Server running at http://localhost:${port}`);
});
exports.default = app;
//# sourceMappingURL=server.js.map