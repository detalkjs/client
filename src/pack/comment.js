export default `
<div class="input-data">
    <div class="avatar">
        <img src="https://cravatar.cn/avatar/?d=mp" class="avatar-img" id="_detalk_myavatar">
    </div>
    <div class="input-area">
        <div class="inline-input">
            <div class="input-label">
                <label>昵称</label>
                <input id="detalk_input_nickname" placeholder="必填" type="text" class="mgr-2p" oninput="detalk.oninput(this, 'nickname')"></div>
            <div class="input-label">
                <label>邮箱</label>
                <input id="detalk_input_email" placeholder="必填" type="email" class="mgr-2p" oninput="detalk.oninput(this, 'email')"></div>
            <div class="input-label">
                <label>网址</label>
                <input id="detalk_input_link" placeholder="选填 [http(s)://]" type="url" oninput="detalk.oninput(this, 'link')"></div>
        </div>
        <div class="comment-text">
            <textarea oninput="detalk.oninput(this, 'content')" autocomplete="off" placeholder="" maxlength="500" style="min-height: 75px; height: 75px;" id="detalk_input_content"></textarea>
        </div>
        <div class="comment-text content-preview cmt-content" id="detalk_content_preview"></div>
    </div>
</div>
<div class="action-btn-group">
    <div class="action-btn">
        <p class="word-limit"><span id="_detalk_word_limit">0</span> / 500</p>
        <button class="sec-btn cm-btn" id="_detalk_preview" onclick="detalk.preview();">预览</button>
        <button onclick="detalk.send();" class="fst-btn cm-btn disabled" id="_detalk_submit" disabled>发送</button>
    </div>
</div>
<div class="comment-container _detalk_loading_container" id="_detalk_detail"></div>
<div class="detalk_copyright">
    <p>Powered by <a href="https://github.com/oCoke/detalk" target="_blank">Detalk</a> & <a href="https://github.com/oCoke/detalk-static" target="_blank">Detalk Static</a></p>
</div>
`;