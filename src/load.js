import gen_detail from './pack/detail.js';
export default async function load(url, path) {
    document.getElementById("_detalk_detail").classList.add("_detalk_loading_container");
    document.getElementById("_detalk_detail").innerHTML =  `<svg width="30px" height="30px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
    <g>
        <animateTransform attributeName="transform" type="rotate" values="0 33 33;270 33 33" begin="0s" dur="1.4s" fill="freeze" repeatCount="indefinite"></animateTransform>
        <circle fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30" stroke-dasharray="187" stroke-dashoffset="610">
            <animate attributeName="stroke" values="#4285F4;#DE3E35;#F7C223;#1B9A59;#4285F4" begin="0s" dur="5.6s" fill="freeze" repeatCount="indefinite"></animate>
            <animateTransform attributeName="transform" type="rotate" values="0 33 33;135 33 33;450 33 33" begin="0s" dur="1.4s" fill="freeze" repeatCount="indefinite"></animateTransform>
            <animate attributeName="stroke-dashoffset" values="187;46.75;187" begin="0s" dur="1.4s" fill="freeze" repeatCount="indefinite"></animate>
        </circle>
    </g>
    </svg>`;
    let list = await fetch(url+"/_api/comment?id="+path, {
        method: "GET"
    }).then(res => res.json());


    list = list.value;

    let count = 0;
    let render_list = [];
    for (let i in list) {
        if (!list[i].deleted) {
            count++;
            render_list.push(list[i]);
            if (list[i].replies) {
                for (let j in list[i].replies) {
                    if (!list[i].replies[j].deleted) {
                        count++;
                    }
                }
            }
        }
    }

    document.getElementById("_detalk_detail").innerHTML = gen_detail(count, render_list);
    document.getElementById("_detalk_detail").classList.remove("_detalk_loading_container");
}
