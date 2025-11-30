let lastPage = "";
setInterval(() => {
    const currentPage = window.location.href;

    if (lastPage == currentPage) return;
    const faUserGroupElements = document.getElementsByClassName("svg-inline--fa fa-user-group");
    if (faUserGroupElements.length === 0) return;
    const nEnrolled = parseInt(
        faUserGroupElements[0].parentNode.querySelector("p").innerHTML.replace(/,/g, "")
    );


    const faThumbsUp = document.getElementsByClassName("svg-inline--fa fa-thumbs-up");
    if (faThumbsUp.length === 0) return;
    const nRecomends = parseInt(
        faThumbsUp[0].parentNode.querySelector("span").innerHTML.split(" ")[0]
    );

    if (Number.isNaN(nRecomends) || Number.isNaN(nEnrolled)) return;
    console.log(`e=${nEnrolled}, r=${nRecomends}`);

    const percent = nRecomends * 100 / nEnrolled;

    faThumbsUp[0].parentNode.querySelector("span").innerHTML = `${nRecomends} (${percent.toFixed(2)}%)`;
    lastPage = currentPage;
}, 1000);
