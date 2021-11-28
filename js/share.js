let url = "https://giftyou.netlify.app/";

function setShare() {
  let resultImg = document.querySelector("#resultImg");
  let resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = "십이간지 연애유형 결과";
  const shareDes = infoList[resultAlt];
  const shareImage = `${url}img/image${resultAlt}.png`;
  const shareURL = `${url}pages/result-${resultAlt}.html`;

  Kakao.Link.createDefaultButton({
    container: "#CONTAINER_ID",
    objectType: "feed",
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL,
      },
    },
    buttons: [
      {
        title: "결과 확인하기",
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ],
  });
}
