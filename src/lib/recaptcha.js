export default async function recaptcha(siteKey, reload) {
    // 重新加载 reCAPTCHA
    if (reload) {
        grecaptcha.execute(siteKey || window.DETALK_RECAPTCHA_SITE_KEY, {action: 'DetalkJS'}).then(function(token) {
            window.DETALK_RECAPTCHA_TOKEN = token;
        });
        return true;
    }


    // 载入 reCAPTCHA
    if (window.DETALK_INIT && !window.DETALK_INIT.recaptchaLoaded) {
        let script = document.createElement('script');
        script.src = 'https://www.recaptcha.net/recaptcha/api.js?render=' + siteKey || window.DETALK_RECAPTCHA_SITE_KEY;
        script.async = true;
        script.defer = true;
        script.onload = () => {
            grecaptcha.ready(function() {
                grecaptcha.execute(siteKey || window.DETALK_RECAPTCHA_SITE_KEY, {action: 'DetalkJS'}).then(function(token) {
                    window.DETALK_RECAPTCHA_TOKEN = token;
                });
            });
        }
        document.body.appendChild(script);
    }
}