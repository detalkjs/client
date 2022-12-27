import _id_s from "./lib/dom";
import md5 from 'js-md5';
export default async function login() {
    // _id_s("detalk-warn").innerText = "加载登录窗口...";
    // let ele = document.createElement("iframe");
    // ele.src = "https://detalk-dash.netlify.app/login.html?url=" + encodeURIComponent(DETALK_INIT.url) + "&framelogin=true";
    // ele.id = "detalk-login-iframe";
    // ele.onload = function () {
    //     _id_s("detalk-warn").innerText = "请在登录窗口中继续";
    // }
    // _id_s("_detalk_detail").appendChild(ele);
    window.open(
        "https://detalk-dash.netlify.app/login.html?url=" + encodeURIComponent(DETALK_INIT.url) + "&framelogin=true",
        '_blank',
        `width=600,height=600,scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`
    );
    window.addEventListener('message', function (e) {
        _id_s("detalk-warn").innerText = "登录成功, 获取用户信息...";
        let { data } = e;
        data = JSON.parse(data);
        if (data.data == "detalk") {
            let token = data.token;
            console.log(data);
            if (data.admin) localStorage.setItem("DETALK_IS_ADMIN", true);
            localStorage.setItem("DETALK_AUTH", token);
            fetch(DETALK_INIT.url + "/_api/profile?token="+token, {
                method: "GET",
            }).then(res => res.json()).then(res => {
                if (res.success) {
                    _id_s("detalk-warn").innerText = "登录成功";
                    _id_s("detalk_input_nickname").value = res.nickname;
                    _id_s("detalk_input_email").value = res.email;
                    _id_s("detalk_input_link").value = res.link;
                    localStorage.setItem("DETALK_NICKNAME", res.nickname);
                    localStorage.setItem("DETALK_EMAIL", res.email);
                    localStorage.setItem("DETALK_LINK", res.link);
                    if (_id_s("detalk_input_email").value) {
                        _id_s("_detalk_myavatar").src = `https://cravatar.cn/avatar/${md5(_id_s("detalk_input_email").value)}?d=mp`;
                    }
                } else {
                    _id_s("detalk-warn").innerText = "获取用户信息失败";
                }
            });
        }
    });
}