export default function dayjs(timestamp) {
    // convert date to YYYY-MM-DD HH:mm:ss
    let date = new Date(timestamp);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let now = new Date();

    if (now.getMinutes() == minute && now.getHours() == hour && now.getDate() == day && now.getMonth()+1 == month && now.getFullYear() == year) {
        return "刚刚";
    } else if (now.getHours() == hour  && now.getDate() == day && now.getMonth()+1 == month && now.getFullYear() == year) {
        return `${now.getMinutes() - minute } 分钟前`;
    } else if (now.getDate() == day && now.getMonth()+1 == month && now.getFullYear() == year) {
        return `${now.getHours() - hour} 小时前`;
    } else if (now.getMonth()+1 == month && now.getDate() - day < 14 && now.getFullYear() == year) {
        return `${now.getDate() - day} 天前`;
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