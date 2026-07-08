export default function domControl(){
    console.log('dom');
    const title = document.querySelector("#title");
    const link = document.querySelector(".link");
    const button = document.querySelector("#button");
    // optional chaining

    if(title?.innerHTML)
    title.innerHTML = '반가워요';

    if(link instanceof HTMLAnchorElement){
        link.href="http://kakao.com"
    }

    // 버튼에 addEventListener 가능하면 해주시고 아니면 undefined 뱉어
    button?.addEventListener("click",()=>{

    })
}