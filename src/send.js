import load from './load.js';
import _id_s from './lib/dom.js';
export default async function send(options, rpid) {
    _id_s("_detalk_submit").disabled = true;
    _id_s("_detalk_submit").classList.add("disabled");
    _id_s("_detalk_submit").classList.remove("enabled");
    if (!options) {
        options = window.DETALK_INIT;
    }
    let url = new URL(options.url).protocol + '//' + new URL(options.url).host;
    let el = document.querySelector(options.el);
    let path = options.path;

    let nickname = _id_s("detalk_input_nickname").value;
    let email = _id_s("detalk_input_email").value;
    let link = _id_s("detalk_input_link").value;
    let content = _id_s("detalk_input_content").value;
    if (!nickname || !email || !content || nickname.length >= 15 || content.length >= 500 || email.length >= 50 || link.length >= 100 || (link && !link.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/) && !link.startsWith("#ReplyTo:")) || !email.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)) {
        alert(window.DETALK_I18N.notAllowedInput);
        return false;
    }
    if (options.recaptchaSiteKey && !window.DETALK_RECAPTCHA_TOKEN) {
        alert(window.DETALK_I18N.recaptcha_not_ready);
        return false;
    }

    localStorage.setItem("DETALK_NICKNAME", nickname);
    localStorage.setItem("DETALK_EMAIL", email);
    if (!link.startsWith("#ReplyTo:")) {
        localStorage.setItem("DETALK_LINK", link);
    }
    let auth = localStorage.getItem("DETALK_AUTH");

    let resp = await fetch(url + '/_api/comment', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nickname,
            email,
            id: path,
            url: link,
            replyTo: rpid || null,
            content,
            auth,
            recaptcha: window.DETALK_RECAPTCHA_TOKEN,
        })
    }).then(res => res.json());

    if (resp.success) {
        load(url, path);
        let canDelete = JSON.parse(localStorage.getItem("DETALK_CAN_DELETE") || "[]");
        canDelete.push(resp.rpid);
        localStorage.setItem("DETALK_CAN_DELETE", JSON.stringify(canDelete));
        if (options.recaptchaSiteKey) {
            detalk.recaptcha(options.recaptchaSiteKey, true);
        }
        // 清除输入框内容
        _id_s("detalk_input_content").value = "";
    } else {
        if (resp.error == 'reCAPTCHA Error.' && options.recaptchaSiteKey) {
            detalk.recaptcha(options.recaptchaSiteKey, true);
        }
        alert(resp.error);
    }

    _id_s("_detalk_submit").disabled = false;
    _id_s("_detalk_submit").classList.remove("disabled");
    _id_s("_detalk_submit").classList.add("enabled");

    if (rpid && resp.success) {
        _id_s("detalk_input_content").value = "";
        _id_s("_detalk_submit").setAttribute("onclick", `detalk.send(null)`);
        _id_s("_detalk_submit").innerText = window.DETALK_I18N.send;
        _id_s("_detalk_preview").innerText = window.DETALK_I18N.preview;
        _id_s("_detalk_preview").setAttribute("onclick", `detalk.preview()`);
    }
}