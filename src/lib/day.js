export default function dayjs(timestamp) {
    // convert date to YYYY-MM-DD HH:mm:ss
    let date = new Date(timestamp);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let i18n = window.DETALK_I18N.day;
    let now = new Date();

    if (now.getMinutes() == minute && now.getHours() == hour && now.getDate() == day && now.getMonth()+1 == month && now.getFullYear() == year) {
        return i18n.justNow;
    } else if (now.getHours() == hour  && now.getDate() == day && now.getMonth()+1 == month && now.getFullYear() == year) {
        return i18n.minute.replace('[#TIME]', now.getMinutes() - minute);
    } else if (now.getDate() == day && now.getMonth()+1 == month && now.getFullYear() == year) {
        return i18n.hour.replace('[#TIME]', now.getHours() - hour);
    } else if (now.getMonth()+1 == month && now.getDate() - day < 14 && now.getFullYear() == year) {
        return i18n.day.replace('[#TIME]', now.getDate() - day);
    } else {
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minute < 10) {
            minute = "0" + minute;
        }
        if (second < 10) {
            second = "0" + second;
        }
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    }
}