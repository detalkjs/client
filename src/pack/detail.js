export default function gen_detail(count, list) {
    let list_content = "";
    for (let i in list) {
        let reply_content = "";

        if (list[i].replies) {
            reply_content += "<hr/>";
            for (let j of list[i].replies) {
                if (!j.deleted) {
                    reply_content += `
                    <div class="reply">
                        <div class="avatar">
                            <img src="${j.avatar || "https://cravatar.cn/avatar/?d=mp"}" class="avatar-img">
                        </div>
                        <div class="cmt-main" style="display: inline;">
                            <div class="cmt-data">
                                <span><strong>${j.nickname}</strong></span>
                            </div>
                            <div class="cmt-content">
                                ${j.content}
                            </div>
                        </div>
                    </div>`;
                }
            }
        }
        list_content += `
            <div class="mr-cmt" onclick="detalk.reply('${list[i].rpid}', '${list[i].nickname}')">
                <div class="avatar">
                    <img src="${list[i].avatar || "https://cravatar.cn/avatar/?d=mp"}" class="avatar-img">
                </div>
                <div class="cmt-main">
                    <div class="cmt-data">
                        <span><strong>${list[i].nickname}</strong></span>
                    </div>
                    <div class="cmt-content">
                        ${list[i].content}
                    </div>
                    <div class="replies">
                        ${reply_content}
                    </div>
                </div>
            </div>`;
    }
    return `
    <div class="comment-title">
        <h3>共 ${count} 条评论</h3>
    </div>
    <div class="comment-list">
        ${list_content}
    </div>
    `;
}