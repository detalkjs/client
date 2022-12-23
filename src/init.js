import comment from './pack/comment.js';
import './pack/comment.css';
import load from './load.js';
export default async function init(options = {}) {
    window.DETALK_INIT = options;
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


    el.innerHTML = comment;
    el.classList.add('detalk-container');

    // get comment list

    load(url, path);

    return true;
}

