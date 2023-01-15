import comment from './pack/comment.js';
import './pack/comment.css';
import './pack/label.css';
import load from './load.js';
import getUUID from './lib/getUUID.js';
import _id_s from './lib/dom.js';
import recaptcha from './lib/recaptcha.js';
import md5 from 'js-md5';
import OwO from 'owo';
import './pack/owo.css';
export default async function init(options) {
    if (!window.DETALK_I18N) {
        window.DETALK_I18N = {
            loadMore: '加载更多',
            notAllowedInput: '输入内容不符合要求！',
            recaptcha_not_ready: 'reCAPTCHA 验证加载中，请稍后。',
            send: '发送',
            preview: '预览',
            reply: '回复',
            replyTo: '回复',
            cancel: '取消',
            loadingLoginFrame: '登录窗口加载中...',
            gotoLoginFrame: '请在登录窗口中继续',
            waitingInfo: '登录成功，正在获取用户信息...',
            loginSuccess: '登录成功',
            failedLoadingInfo: '获取用户信息失败',
            deleteConfirm: '即将删除 ID:[#ID] 评论，是否继续？',
            total: '共 [#TOTAL] 条评论',
            noComment: '暂无评论',
            up: '正序',
            down: '倒序',
            delete: '删除',
            top: '置顶',
            login: '登录',
            required: '必填',
            optional: '选填',
            nickname: '昵称',
            email: '邮箱',
            link: '网址',
            day: {
                justNow: '刚刚',
                minute: '[#TIME] 分钟前',
                hour: '[#TIME] 小时前',
                day: '[#TIME] 天前'
            }
        }
    }
    if (typeof options == 'string') {
        init(await fetch(options).then(res => res.json()));
    }
    // init detalk
    if (!options.url) {
        throw new Error('Backend URL is required!');
    }
    

    let url = new URL(options.url).protocol + '//' + new URL(options.url).host;
    let el = document.querySelector(options.el);
    let path = options.path;
    if (!el) {
        throw new Error('Element is required!');
    }
    if (!path && !options.path) {
        path = window.DETALK_PATH || window.location.pathname;
        options.path = window.DETALK_PATH || window.location.pathname;
    }
    if (!options.DASHBOARD_URL) {
        options.DASHBOARD_URL = 'https://detalk-dash.netlify.app';
    } else {
        options.DASHBOARD_URL = new URL(options.DASHBOARD_URL).origin;
    }

    window.DETALK_INIT = options;
    window.DETALK_INIT.url = url;

    if (options.recaptchaSiteKey) {
        window.DETALK_RECAPTCHA_SITE_KEY = options.recaptchaSiteKey;
        recaptcha(options.recaptchaSiteKey);
    }

    
    

    el.innerHTML = comment;
    _id_s("detalk-version").innerText = window.detalk.version;
    _id_s('detalk-nickname').innerText = window.DETALK_I18N.nickname;
    _id_s('detalk-email').innerText = window.DETALK_I18N.email;
    _id_s('detalk-link').innerText = window.DETALK_I18N.link;
    _id_s('_detalk_login').innerText = window.DETALK_I18N.login;
    _id_s('_detalk_preview').innerText = window.DETALK_I18N.preview;
    _id_s('_detalk_submit').innerText = window.DETALK_I18N.send;

    el.classList.add('detalk-container');

    if (path == '@TALK' && !localStorage.getItem("DETALK_IS_ADMIN")) {
        _id_s('detalk_input_data_area').style.display = 'none';
        _id_s('detalk_input_btn_area').style.display = 'none';
    }

    // get comment list

    load(url, path);

    if (options.owo) {
        new OwO({
            logo: 'OωO',
            container: document.getElementById("detalk_owo"),
            target: document.getElementById("detalk_input_content"),
            api: options.owo,
            position: 'down',
            width: '100%',
            maxHeight: '250px'
        });
    }


    if (!localStorage.getItem("DETALK_AUTH")) {
        localStorage.setItem("DETALK_AUTH", getUUID());
    }
    _id_s("detalk_input_nickname").value = localStorage.getItem("DETALK_NICKNAME") || "";
    _id_s("detalk_input_email").value = localStorage.getItem("DETALK_EMAIL") || "";
    _id_s("detalk_input_link").value = localStorage.getItem("DETALK_LINK") || "";

    if (_id_s("detalk_input_email").value) {
        _id_s("_detalk_myavatar").src = `https://cravatar.cn/avatar/${md5(_id_s("detalk_input_email").value)}?d=mp`;
    }


    if (document.querySelector(options.el + " .inline-input").clientWidth >= 540) {
        document.querySelector(options.el + " .inline-input").classList.add("input-oneline");
    } else {
        document.querySelector(options.el + " .inline-input").classList.remove("input-oneline");
    }

    window.addEventListener("resize", function () {
        if (document.querySelector(DETALK_INIT.el + " .inline-input").clientWidth >= 540) {
            document.querySelector(DETALK_INIT.el + " .inline-input").classList.add("input-oneline");
        } else {
            document.querySelector(DETALK_INIT.el + " .inline-input").classList.remove("input-oneline");
        }
    });

    return true;
}

