const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
let endPoint = 0;
let select = Array(qnaList.length).fill(0);

function calResult(type) {
  for (let i = 0; i < type.length; i++) {
    select[type[i]]++;
  }
}

function goResult() {
  qna.style.display = "none";
  result.style.WebkitAnimation = "fadeIn 1s";
  result.style.animation = "fadeIn 1s";
  result.style.display = "block";

  // res는 제일 많이 선택된 동물의 인덱스
  let res = select.indexOf(Math.max(...select));
  const resultName = document.querySelector(".resultName");
  const resultDesc = document.querySelector(".resultDesc");
  const ImgContainer = document.querySelector("#resultImg");
  const Img = document.createElement("img");
  Img.src = `./img/image-${res}.png`;
  Img.alt = res; // 공유하기 기능에서 사용된다.
  Img.classList.add("img-fluid");
  ImgContainer.appendChild(Img);

  resultName.innerHTML = infoList[res].name;
  resultDesc.innerHTML = infoList[res].desc;
}

function answer(qnaIdx) {
  for (let el of qnaList[qnaIdx].a) {
    const a = document.querySelector(".aBox");
    const answerButton = document.createElement("button");
    answerButton.classList.add("answerButton");
    answerButton.classList.add("my-3");
    answerButton.classList.add("py-3");
    answerButton.classList.add("fadeIn");

    answerButton.innerHTML = el.answer;
    a.appendChild(answerButton);

    answerButton.addEventListener(
      "click",
      () => {
        const children = document.querySelectorAll(".answerButton");
        for (let i = 0; i < children.length; i++) {
          children[i].disabled = true; // 버튼 비활성화
          children[i].style.WebkitAnimation = "fadeOut 0.5s";
          children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {
          for (let i = 0; i < children.length; i++) {
            children[i].style.display = "none";
          }
          goNext(++qnaIdx);
        }, 400);
        calResult(el.type);
      },
      false
    );
  }
}

function goNext(qnaIdx) {
  if (endPoint === qnaList.length) {
    return goResult();
  }
  const q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qnaIdx].q;
  answer(qnaIdx);
  const status = document.querySelector(".statusBar");
  status.style.width = `${parseInt((++endPoint / qnaList.length) * 100, 10)}%`;
}

function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    main.style.display = "none";
    qna.style.display = "block";
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    let qnaIdx = 0;
    goNext(qnaIdx);
  }, 1000);
}
