export default function oninput(el, type) {
    if (type == 'content') {
        document.getElementById("_detalk_word_limit").innerText = el.value.length;
        if (el.value.length > 0 && el.value.length < 500) {
            el.classList.remove("border_error");
            window.TEMP_CONTENT = true;
        } else {
            el.classList.add("border_error");
        }
    }
    if (type == 'nickname') {
        document.getElementById("_detalk_word_limit").innerText = el.value.length;
        if (el.value.length > 0 && el.value.length < 15) {
            el.classList.remove("border_error");
            window.TEMP_NICKNAME = true;
        } else {
            el.classList.add("border_error");
        }
    }
    if (type == 'email') {
        if (!el.value.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/) || el.value.length > 50) {
            el.classList.add("border_error");
        } else {
            el.classList.remove("border_error");
            window.TEMP_EMAIL = true;
        }
    }
    if (type == 'link') {
        if (el.value.length > 100) {
            el.classList.add("border_error");
        } else {
            el.classList.remove("border_error");
        }
    }
    if (window.TEMP_NICKNAME && window.TEMP_EMAIL && window.TEMP_CONTENT) {
        document.getElementById("_detalk_submit").classList.remove("disabled");
        document.getElementById("_detalk_submit").classList.add("enabled");
    } else {
        document.getElementById("_detalk_submit").classList.remove("enabled");
        document.getElementById("_detalk_submit").classList.add("disabled");
    }
}