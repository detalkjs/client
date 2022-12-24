export default `
<div class="input-data">
    <div class="avatar">
        <img src="https://cravatar.cn/avatar/?d=mp" class="avatar-img" id="_detalk_myavatar">
    </div>
    <div class="input-area">
        <div class="inline-input">
            <input id="detalk_input_nickname" placeholder="昵称" type="text" class="mgr-2p" oninput="detalk.oninput(this, 'nickname')">
            <input id="detalk_input_email" placeholder="邮箱" type="email" class="mgr-2p" oninput="detalk.oninput(this, 'email')">
            <input id="detalk_input_link" placeholder="网址" type="url" oninput="detalk.oninput(this, 'link')">
        </div>
        <div class="comment-text">
            <textarea oninput="detalk.oninput(this, 'content')" autocomplete="off" placeholder="" maxlength="500" style="min-height: 75px; height: 75px;" id="detalk_input_content"></textarea>
        </div>
    </div>
</div>
<div class="action-btn-group">
    <div class="action-btn">
        <p class="word-limit"><span id="_detalk_word_limit">0</span> / 500</p>
        <button class="sec-btn cm-btn" id="_detalk_preview">预览</button>
        <button onclick="detalk.send();" class="fst-btn cm-btn disabled" id="_detalk_submit" disabled>发送</button>
    </div>
</div>
<div class="comment-container _detalk_loading_container" id="_detalk_detail"></div>
<div class="detalk_copyright">
    <p>Powered by <a href="https://github.com/oCoke/detalk" target="_blank">Detalk</a> & <a href="https://github.com/oCoke/detalk-static" target="_blank">Detalk Static</a></p>
</div>
`;