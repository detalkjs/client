import comment from './pack/comment.js';
import './pack/comment.css';
import load from './load.js';
import getUUID from './lib/getUUID.js';
export default async function init(options = {}) {
    // init detalk
    if (!options.url) {
        throw new Error('Backend URL is required!');
    }
    let url = new URL(options.url).protocol + '//' + new URL(options.url).host;
    let el = document.querySelector(options.el);
    let path = options.path;
    if (!el) {
        throw new Error('Element is required!');
    }
    if (!path) {
        path = window.DETALK_PATH || window.location.pathname;
    }

    window.DETALK_INIT = {
        url,
        el: options.el,
        path,
    };

    el.innerHTML = comment;
    el.classList.add('detalk-container');

    // get comment list

    load(url, path);


    if (!localStorage.getItem("DETALK_AUTH")) {
        localStorage.setItem("DETALK_AUTH", getUUID());
    }
    document.getElementById("detalk_input_nickname").value = localStorage.getItem("DETALK_NICKNAME") || "";
    document.getElementById("detalk_input_email").value = localStorage.getItem("DETALK_EMAIL") || "";
    document.getElementById("detalk_input_link").value = localStorage.getItem("DETALK_LINK") || "";
    return true;
}

