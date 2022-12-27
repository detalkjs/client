import gen_detail from './pack/detail.js';
import _id_s from './lib/dom.js';
// mode = 1: 倒序; mode = 0: 正序.
export default async function load(url, path, mode = 1, pageID = 0, pageSize = 10) {
    
    let page = "";
    if (pageID > 0) {
        page = _id_s("_detalk_detail").innerHTML;
        _id_s("_detalk_load_more").innerHTML =  `<svg width="30px" height="30px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
    <g>
        <animateTransform attributeName="transform" type="rotate" values="0 33 33;270 33 33" begin="0s" dur="1.4s" fill="freeze" repeatCount="indefinite"></animateTransform>
        <circle fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30" stroke-dasharray="187" stroke-dashoffset="610">
            <animate attributeName="stroke" values="#4285F4;#DE3E35;#F7C223;#1B9A59;#4285F4" begin="0s" dur="5.6s" fill="freeze" repeatCount="indefinite"></animate>
            <animateTransform attributeName="transform" type="rotate" values="0 33 33;135 33 33;450 33 33" begin="0s" dur="1.4s" fill="freeze" repeatCount="indefinite"></animateTransform>
            <animate attributeName="stroke-dashoffset" values="187;46.75;187" begin="0s" dur="1.4s" fill="freeze" repeatCount="indefinite"></animate>
        </circle>
    </g>
    </svg>`;
    } else {
        _id_s("_detalk_detail").innerHTML =  `<svg width="30px" height="30px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
    <g>
        <animateTransform attributeName="transform" type="rotate" values="0 33 33;270 33 33" begin="0s" dur="1.4s" fill="freeze" repeatCount="indefinite"></animateTransform>
        <circle fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30" stroke-dasharray="187" stroke-dashoffset="610">
            <animate attributeName="stroke" values="#4285F4;#DE3E35;#F7C223;#1B9A59;#4285F4" begin="0s" dur="5.6s" fill="freeze" repeatCount="indefinite"></animate>
            <animateTransform attributeName="transform" type="rotate" values="0 33 33;135 33 33;450 33 33" begin="0s" dur="1.4s" fill="freeze" repeatCount="indefinite"></animateTransform>
            <animate attributeName="stroke-dashoffset" values="187;46.75;187" begin="0s" dur="1.4s" fill="freeze" repeatCount="indefinite"></animate>
        </circle>
    </g>
    </svg>`;
        _id_s("_detalk_detail").classList.add("_detalk_loading_container");
    }
    
    if (mode != window.DETALK_LOAD_TYPE) window.DETALK_LOADED_LIST = [];

    let loadType = "";
    if (mode) loadType = "true";
    let listr = await fetch(url+"/_api/comment?id="+path+"&pageid="+pageID+"&pagesize="+pageSize+"&timefst="+loadType, {
        method: "GET"
    }).then(res => res.json());

    let nextPage = false;
    if (listr.hasNextPage) nextPage = true;

    let list = listr.value;

    let count = 0;
    let render_list = list;
    // if (!mode) {
    //     for (let i in list) {
    //         if (!list[i].deleted) {
    //             count++;
    //             render_list.push(list[i]);
    //             if (list[i].replies) {
    //                 for (let j in list[i].replies) {
    //                     if (!list[i].replies[j].deleted) {
    //                         count++;
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // } else {
    //     for (let i = list.length - 1; i >= 0; i--) {
    //         if (!list[i].deleted && !list[i].hide) {
    //             count++;
    //             render_list.push(list[i]);
    //             if (list[i].replies) {
    //                 for (let j in list[i].replies) {
    //                     if (!list[i].replies[j].deleted) {
    //                         count++;
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

    count = listr.length;

    if (pageID == 0) {
        _id_s("_detalk_detail").innerHTML = gen_detail(count, render_list, {mode,url,path});
    } else {
        _id_s("_detalk_detail").innerHTML = page + gen_detail(count, render_list, {mode,url,path}, true);
    }
    if (pageID > 0) {
        _id_s("_detalk_load_more").remove();
    } else {
        _id_s("_detalk_detail").classList.remove("_detalk_loading_container");
    }

    if (nextPage) {
        _id_s("_detalk_detail").innerHTML += `<div class="load-more" id="_detalk_load_more" onclick="detalk.load('${url}', '${path}', ${mode}, ${pageID + 1}, ${pageSize})">加载更多</div>`;
    }

    if (DETALK_INIT.onCommentLoaded) {
        DETALK_INIT.onCommentLoaded();
    }
    window.DETALK_LOAD_TYPE = mode;
}
