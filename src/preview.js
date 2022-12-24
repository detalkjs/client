import _id_s from "./lib/dom";

export default async function preview(cg) {
    if (_id_s("detalk_content_preview").style.display == "block" && !cg && !_id_s("detalk_input_content").value) {
        _id_s("detalk_content_preview").style.display = "none";
        return true;
    }
    _id_s("detalk_content_preview").innerHTML = "[ Loading ]";;
    let content = await detalk.parse(_id_s('detalk_input_content').value);
    _id_s("detalk_content_preview").innerHTML = content;
    if (!cg) {
        _id_s("detalk_content_preview").style.display = "block";
    }
    return true;
}