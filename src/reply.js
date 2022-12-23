export default async function reply(rpid, replyTo) {
    if (!rpid) return false;
    location.hash = "#detalk_input_content";
    document.getElementById("detalk_input_content").value = `回复 @${replyTo}: `;
    document.getElementById("detalk_input_content").focus();
    document.getElementById("detalk_input_link").value = `#ReplyTo:${rpid}`;
    document.getElementById("_detalk_submit").setAttribute("onclick", `detalk.send(null, '${rpid}')`);
    document.getElementById("_detalk_submit").innerText = "回复";
    document.getElementById("_detalk_preview").innerText = "取消";
    document.getElementById("_detalk_preview").setAttribute("onclick", `document.getElementById("detalk_input_link").value="";detalk.send(null);document.getElementById("_detalk_submit").innerText="发送";document.getElementById("_detalk_preview").innerText="预览";document.getElementById("_detalk_preview").setAttribute("onclick", "detalk.preview()");`);
}