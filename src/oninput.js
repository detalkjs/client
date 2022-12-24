import md5 from 'js-md5';
import _id_s from './lib/dom.js';
import preview from './preview.js';
export default function oninput(el, type) {
    if (type == 'content') {
        _id_s("_detalk_word_limit").innerText = el.value.length;
        if (el.value.length > 0 && el.value.length < 500) {
            el.classList.remove("border_error");
            if (DETALK_INIT.previewOnInput) preview(true);
            window.TEMP_CONTENT = true;
        } else {
            el.classList.add("border_error");
        }
    }
    if (type == 'nickname') {
        _id_s("_detalk_word_limit").innerText = el.value.length;
        if (el.value.length > 0 && el.value.length < 15) {
            el.classList.remove("border_error");
            window.TEMP_NICKNAME = true;
        } else {
            el.classList.add("border_error");
        }
    }
    if (type == 'email') {
        if (!el.value.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/) || el.value.length > 50) {
            el.classList.add("border_error");
        } else {
            el.classList.remove("border_error");
            window.TEMP_EMAIL = true;
            _id_s("_detalk_myavatar").src = `https://cravatar.cn/avatar/${md5(el.value)}?d=mp`;
        }
    }
    if (type == 'link') {
        if (el.value.length > 100) {
            el.classList.add("border_error");
        } else {
            el.classList.remove("border_error");
        }
    }
    if ((window.TEMP_NICKNAME || _id_s("detalk_input_nickname")) && (window.TEMP_EMAIL || _id_s("detalk_input_email")) && (window.TEMP_CONTENT || _id_s("detalk_input_content"))) {
        _id_s("_detalk_submit").classList.remove("disabled");
        _id_s("_detalk_submit").classList.add("enabled");
        _id_s("_detalk_submit").disabled = false;
    } else {
        _id_s("_detalk_submit").classList.remove("enabled");
        _id_s("_detalk_submit").classList.add("disabled");
        _id_s("_detalk_submit").disabled = true;
    }
}