import dayjs from '../lib/day.js';

function inarray(arr, val) {
    for (let i of arr) {
        if (i == val) return true;
    }
    return false;
}
export default function gen_detail(count, list, options) {
    let list_content = "";
    for (let i in list) {
        let reply_content = "";

        if (list[i].replies) {
            reply_content += "<hr/>";
            for (let j of list[i].replies) {
                if (!j.deleted) {
                    let deletBtn = "";
                    if (inarray(JSON.parse(localStorage.getItem("DETALK_CAN_DELETE") || "[]"), j.rpid)) {
                        deletBtn = `<span class="hover_show" onclick="detalk.delete('${j.rpid}')">删除</span>`;
                    }
                    reply_content += `
                    <div class="reply">
                        <div class="avatar">
                            <img src="${j.avatar || "https://cravatar.cn/avatar/?d=mp"}" class="avatar-img">
                        </div>
                        <div class="cmt-main" style="display: inline;">
                            <div class="cmt-data">
                                <span style="margin-right:1rem;"><strong>${j.nickname}</strong> · <span class="cmt_date">${dayjs(j.timestamp)}</span></span>
                                <span class="hover_show" onclick="detalk.reply('${list[i].rpid}', '${j.nickname}')">回复</span>
                                ${deletBtn}
                            </div>
                            <div class="cmt-content">
                                ${j.content}
                            </div>
                        </div>
                    </div>`;
                }
            }
        }
        let deletBtn = "";
        if (inarray(JSON.parse(localStorage.getItem("DETALK_CAN_DELETE") || "[]"), list[i].rpid)) {
            deletBtn = `<span class="hover_show" onclick="detalk.delete('${list[i].rpid}')">删除</span>`;
        }
        list_content += `
            <div class="mr-cmt">
                <div class="avatar">
                    <img src="${"https://cravatar.cn/avatar/"+list[i].email+"?d=mp" || "https://cravatar.cn/avatar/?d=mp"}" class="avatar-img">
                </div>
                <div class="cmt-main">
                    <div class="cmt-data">
                        <span style="margin-right:1rem;"><strong><a href="${list[i].url || "#"}" target="_blank" style="color: unset;text-decoration:none;">${list[i].nickname}</a></strong> · <span class="cmt_date">${dayjs(list[i].timestamp)}</span></span>
                        <span class="hover_show" onclick="detalk.reply('${list[i].rpid}', '${list[i].nickname}')">回复</span>
                        ${deletBtn}
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
    if (list == []) {
        list_content = `<h3 style="text-align: center;opacity: 0.8;">暂无评论</h3>`;
    }
    return `
    <div class="comment-title">
        <h3>共 ${count} 条评论<span class="filter" onclick="detalk.load('${options.url}','${options.path}',${options.mode ? 0 : 1});">${options.mode ? "正序" : "倒序"}</span></h3>
    </div>
    <div class="comment-list">
        ${list_content}
    </div>
    `;
}