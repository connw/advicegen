displayDivider = () => {
    const dividerDesktop = document.querySelector(".divider.desktop");
    const dividerMobile = document.querySelector(".divider.mobile");

    if (window.innerWidth <= 767) {
        dividerDesktop.classList.add("invisible");
        dividerMobile.classList.remove("invisible");
    } else {
        dividerMobile.classList.add("invisible");
        dividerDesktop.classList.remove("invisible");
    };
}
displayDivider();
window.addEventListener("resize", displayDivider);

getAdvice = () => {
    // const url = "https://api.adviceslip.com/advice";
    const url = "https://favqs.com/api/qotd";

    fetch(url)
        .then(res => res.json())
        .then(data => {
            // For original APL https://api.adviceslip.com/advice
            // const quote = data.slip.advice;
            // const adviceID = data.slip.id;
            const quote = data.quote.body;
            const adviceID = data.quote.id;
            document.querySelector(".advice-num").innerHTML = adviceID;
            document.querySelector(".quote").innerHTML = '"' + quote + '"';
        })
        .catch((err) => {
            console.error('Error:', err);
        });
}
getAdvice();
document.querySelector(".dice").addEventListener("click", getAdvice);


