import load from './load.js';

export default async function send(options, rpid) {
    document.getElementById("_detalk_submit").disabled = true;
    document.getElementById("_detalk_submit").classList.add("disabled");
    document.getElementById("_detalk_submit").classList.remove("enabled");
    if (!options) {
        options = window.DETALK_INIT;
    }
    let url = new URL(options.url).protocol + '//' + new URL(options.url).host;
    let el = document.querySelector(options.el);
    let path = options.path;

    let nickname = document.getElementById("detalk_input_nickname").value;
    let email = document.getElementById("detalk_input_email").value;
    let link = document.getElementById("detalk_input_link").value;
    let content = document.getElementById("detalk_input_content").value;

    if (!nickname || !email || !content || nickname.length >= 15 || content.length >= 500 || email.length >= 50 || link.length >= 100) {
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
        })
    }).then(res => res.json());

    if (resp.success) {
        load(url, path);
    } else {
        alert(resp.message);
    }

    document.getElementById("_detalk_submit").disabled = false;
    document.getElementById("_detalk_submit").classList.remove("disabled");
    document.getElementById("_detalk_submit").classList.add("enabled");

    if (rpid && resp.success) {
        document.getElementById("detalk_input_content").value = "";
        document.getElementById("_detalk_submit").setAttribute("onclick", `detalk.send(null)`);
        document.getElementById("_detalk_submit").innerText = "发送";
        document.getElementById("_detalk_preview").innerText = "预览";
        document.getElementById("_detalk_preview").setAttribute("onclick", `detalk.preview()`);
    }
}