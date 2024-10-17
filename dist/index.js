"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', async (req, res) => {
    return res.status(200).send({
        message: 'Hello World!'
    });
});
app.post('/post', async (req, res) => {
    return res.status(200).send({
        message: 'Hello world from the post'
    });
});
const PORT = 3000;
try {
    app.listen(PORT, () => {
        console.log(`Connected successfully on port ${PORT}`);
    });
}
catch (error) {
    console.error(`Error occured: ${error.message}`);
}
