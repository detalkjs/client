export default async function parse(content) {
    let resp = await fetch(window.DETALK_INIT.url + "/_api/markdown", {
        method: "POST",
        body: content,
    }).then(res => res.json());
    if (resp.success) {
        return resp.html;
    } else {
        return resp.error;
    }
}