import comment from './pack/comment.js';
import './pack/comment.css';
import load from './load.js';
import getUUID from './lib/getUUID.js';
import _id_s from './lib/dom.js';
import md5 from 'js-md5';
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

    window.DETALK_INIT = options;
    DETALK_INIT.url = url;

    el.innerHTML = comment;
    document.getElementById("detalk-version").innerText = window.detalk.version;
    el.classList.add('detalk-container');

    // get comment list

    load(url, path);


    if (!localStorage.getItem("DETALK_AUTH")) {
        localStorage.setItem("DETALK_AUTH", getUUID());
    }
    _id_s("detalk_input_nickname").value = localStorage.getItem("DETALK_NICKNAME") || "";
    _id_s("detalk_input_email").value = localStorage.getItem("DETALK_EMAIL") || "";
    _id_s("detalk_input_link").value = localStorage.getItem("DETALK_LINK") || "";

    if (_id_s("detalk_input_email").value) {
        _id_s("_detalk_myavatar").src = `https://cravatar.cn/avatar/${md5(_id_s("detalk_input_email").value)}?d=mp`;
    }


    if (document.querySelector(options.el + " .inline-input").clientWidth >= 540) {
        document.querySelector(options.el + " .inline-input").classList.add("input-oneline");
    } else {
        document.querySelector(options.el + " .inline-input").classList.remove("input-oneline");
    }

    window.addEventListener("resize", function () {
        if (document.querySelector(DETALK_INIT.el + " .inline-input").clientWidth >= 540) {
            document.querySelector(DETALK_INIT.el + " .inline-input").classList.add("input-oneline");
        } else {
            document.querySelector(DETALK_INIT.el + " .inline-input").classList.remove("input-oneline");
        }
    });
    return true;
}

