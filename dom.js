export default function domControl() {
    console.log('dom');
    const title = document.querySelector("#title");
    // optional chaining
    if (title?.innerHTML)
        title.innerHTML = '반가워요';
}
