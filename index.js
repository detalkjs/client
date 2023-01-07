import init from './src/init.js';
import send from './src/send.js';
import reply from './src/reply.js';
import load from './src/load.js';
import oninput from './src/oninput.js';
import _delete from './src/delete.js';
import preview from './src/preview.js';
// import { parse } from 'marked';
import login from './src/login.js';
import recaptcha from './src/lib/recaptcha.js';
import parse from './src/lib/parse.js';
import pkg from "./package.json";
window.detalk = {
    init,
    send,
    reply,
    load,
    oninput,
    delete: _delete,
    preview,
    login,
    parse,
    recaptcha,
    version: pkg.version
};