import dayjs from '../lib/day.js';

function inarray(arr, val, admin) {
    if (localStorage.getItem("DETALK_IS_ADMIN") && admin) return true;
    for (let i of arr) {
        if (i == val) return true;
    }
    return false;
}
export default function gen_detail(count, list, options, noindex) {
    if (!window.DETALK_LOADED_LIST) window.DETALK_LOADED_LIST = [];
    let list_content = "";
    for (let i in list) {
        let reply_content = "";

        if (list[i] && list[i].replies) {
            reply_content += "<hr/>";
            for (let j of list[i].replies) {
                if (!j.deleted) {
                    let deletBtn = "";
                    if (inarray(JSON.parse(localStorage.getItem("DETALK_CAN_DELETE") || "[]"), j.rpid, true)) {
                        deletBtn = `<span class="hover_show" onclick="detalk.delete('${j.rpid}')">删除</span>`;
                    }
                    let label = "";
                    if (j && j.label && DETALK_INIT.label && DETALK_INIT.label[j.label]) {
                        if (!DETALK_INIT.label[j.label].class) DETALK_INIT.label[j.label].class = "label-green";
                        if (!DETALK_INIT.label[j.label].name) DETALK_INIT.label[j.label].name = "";
                        label = `<span class="custom-label ${DETALK_INIT.label[j.label].class}">${DETALK_INIT.label[j.label].name}</span>`;
                    }
                    if (!j || !j.email || !j.nickname || !j.content) continue;
                    reply_content += `
                    <div class="reply">
                        <div class="avatar">
                            <img src="${"https://cravatar.cn/avatar/"+list[i].email+"?d=mp" || "https://cravatar.cn/avatar/?d=mp"}" class="avatar-img">
                        </div>
                        <div class="cmt-main" style="display: inline;">
                            <div class="cmt-data">
                                <span style="margin-right:1rem;"><strong><a href="${j.url || "#"}" target="_blank" style="color: unset;text-decoration:none;">${j.nickname}</a>${label}</strong> · <span class="cmt_date">${dayjs(j.timestamp)}</span></span>
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
        if (list[i] && list[i].rpid && inarray(JSON.parse(localStorage.getItem("DETALK_CAN_DELETE") || "[]"), list[i].rpid, true)) {
            deletBtn = `<span class="hover_show" onclick="detalk.delete('${list[i].rpid}')">删除</span>`;
        }
        let label = "";
        if (list[i] && list[i].label && DETALK_INIT.label && DETALK_INIT.label[list[i].label]) {
            if (!DETALK_INIT.label[list[i].label].class) DETALK_INIT.label[list[i].label].class = "label-green";
            if (!DETALK_INIT.label[list[i].label].name) DETALK_INIT.label[list[i].label].name = "";
            label = `<span class="custom-label ${DETALK_INIT.label[list[i].label].class}">${DETALK_INIT.label[list[i].label].name}</span>`;
        }
        let top = "";
        if (list[i] && list[i].top) {
            top = `<span class="custom-label label-red" style="margin-left:0;">置顶</span>`;
        }
        if (!list[i] || !list[i].email || !list[i].nickname || !list[i].content) continue;
        if (inarray(window.DETALK_LOADED_LIST, list[i].rpid)) continue;
        list_content += `
            <div class="mr-cmt">
                <div class="avatar">
                    <img src="${"https://cravatar.cn/avatar/"+list[i].email+"?d=mp" || "https://cravatar.cn/avatar/?d=mp"}" class="avatar-img">
                </div>
                <div class="cmt-main">
                    <div class="cmt-data">
                        <span style="margin-right:1rem;"><strong><a href="${list[i].url || "#"}" target="_blank" style="color: unset;text-decoration:none;">${list[i].nickname}</a>${label}</strong> · <span class="cmt_date">${dayjs(list[i].timestamp)}</span></span>
                        <span class="hover_show" onclick="detalk.reply('${list[i].rpid}', '${list[i].nickname}')">回复</span>
                        ${deletBtn}
                    </div>
                    <div class="cmt-content">
                        ${top}
                        ${list[i].content}
                    </div>
                    <div class="replies">
                        ${reply_content}
                    </div>
                </div>
            </div>`;
        window.DETALK_LOADED_LIST.push(list[i].rpid);
    }
    if (list == []) {
        list_content = `<h3 style="text-align: center;opacity: 0.8;">暂无评论</h3>`;
    }
    let IndexContent = `<div class="comment-title">
        <h3>共 ${count} 条评论<span class="filter" onclick="detalk.load('${options.url}','${options.path}',${options.mode ? 0 : 1});">${options.mode ? "正序" : "倒序"}</span></h3>
    </div>`;
    if (noindex) {
        IndexContent = "";
    }
    return `
    ${IndexContent}
    <div class="comment-list">
        ${list_content}
    </div>
    `;
}