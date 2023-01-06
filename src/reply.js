import _id_s from './lib/dom.js';
export default async function reply(rpid, replyTo) {
    if (!rpid) return false;
    location.hash = "#detalk_input_content";
    _id_s("detalk_input_content").value = window.DETALK_I18N.replyTo + ` @${replyTo}: `;
    _id_s("detalk_input_content").focus();
    _id_s("detalk_input_link").value = `#ReplyTo:${rpid}`;
    _id_s("_detalk_submit").setAttribute("onclick", `detalk.send(null, '${rpid}')`);
    _id_s("_detalk_submit").innerText = window.DETALK_I18N.reply;
    _id_s("_detalk_preview").innerText = window.DETALK_I18N.cancel;
    _id_s("_detalk_preview").setAttribute("onclick", `document.getElementById("detalk_input_link").value="";document.getElementById("_detalk_submit").innerText="发送";document.getElementById("_detalk_preview").innerText="预览";document.getElementById("_detalk_preview").setAttribute("onclick", "detalk.preview()");document.getElementById("_detalk_submit").setAttribute("onclick", "detalk.send()");`);
}