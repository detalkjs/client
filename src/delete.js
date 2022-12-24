import load from "./load";

export default async function _delete(rpid, auth = localStorage.getItem("DETALK_AUTH")) {
    if (!rpid) return false;
    if (!confirm("即将删除 ID: "+rpid+" 评论，是否继续？")) return false;
    let url = window.DETALK_INIT.url;
    let path = window.DETALK_INIT.path;
    let resp = await fetch(url + `/_api/comment?id=${path}&rpid=${rpid}&auth=${auth}`, {
        method: "DELETE",
    }).then(res => res.json());
    if (resp.success) {
        // alert(resp.message);
        load(url, path);
    } else {
        alert(resp.error);
    }
}