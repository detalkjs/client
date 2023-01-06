export default `
<div class="input-data">
    <div class="avatar">
        <img src="https://cravatar.cn/avatar/?d=mp" class="avatar-img" id="_detalk_myavatar">
    </div>
    <div class="input-area">
        <div class="inline-input">
            <div class="input-label">
                <label id="detalk-nickname"></label>
                <input id="detalk_input_nickname" type="text" class="mgr-2p" oninput="detalk.oninput(this, 'nickname')" maxlength="15"></div>
            <div class="input-label">
                <label id="detalk-email"></label>
                <input id="detalk_input_email" type="email" class="mgr-2p" oninput="detalk.oninput(this, 'email')" maxlength="50"></div>
            <div class="input-label">
                <label id="detalk-link"></label>
                <input id="detalk_input_link" type="url" oninput="detalk.oninput(this, 'link')" maxlength="100"></div>
        </div>
        <div class="comment-text">
            <textarea oninput="detalk.oninput(this, 'content')" autocomplete="off" placeholder="" maxlength="500" style="min-height: 75px; height: 75px;" id="detalk_input_content"></textarea>
        </div>
        <div class="comment-text content-preview cmt-content" id="detalk_content_preview"></div>
    </div>
</div>
<div class="action-btn-group">
    <div class="action-btn">
        <div style="text-align: end;">
            <p class="word-limit" style="color: rgb(255,70,0);"><span id="detalk-warn"></span></p>
            <p class="word-limit"><span id="_detalk_word_limit">0</span> / 500</p>
        </div>
        <button class="sec-btn cm-btn" id="_detalk_login" onclick="detalk.login();"></button>
        <button class="sec-btn cm-btn" id="_detalk_preview" onclick="detalk.preview();"></button>
        <button onclick="detalk.send();" class="fst-btn cm-btn disabled" id="_detalk_submit" disabled></button>
    </div>
</div>
<div class="comment-container _detalk_loading_container" id="_detalk_detail"></div>
<div class="detalk_copyright">
    <p>Powered by <a href="https://github.com/detalkjs" target="_blank">Detalk</a> v<span id="detalk-version"></span></p>
</div>
`;