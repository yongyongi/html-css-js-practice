const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function goNext(qnaIdx) {
  const q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qnaIdx].q;
}

function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    main.style.display = "none";
    qna.style.display = "block";
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    const qnaIdx = 0;
    goNext(qnaIdx);
  }, 1000);
}
