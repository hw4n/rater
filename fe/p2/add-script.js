const placeholders = [
    {
        title: "어벤져스: 엔드게임",
        genre: "액션",
        release_year: 2019,
        score: 10,
        review: "이 영화 제대로 즐길려면 마블 전작 다 보고 오셔야합니다.",
    },
    {
        title: "인셉션",
        genre: "액션",
        release_year: 2010,
        score: 10,
        review: "다시봐도 역시 좋은 영화영화관에서 보는 맛이 있어요스토리가 좀 어렵긴해도 멋진 영화입니다",
    },
    {
        title: "인터스텔라",
        genre: "SF",
        release_year: 2014,
        score: 10,
        review: "인셉션은 대단하다 느꼈는데, 인터스텔라는 경이롭다고 느껴진다.",
    },
    {
        title: "극장판 귀멸의 칼날: 무한열차편",
        genre: "애니메이션",
        release_year: 2021,
        score: 10,
        review: "영상미가 너무 좋앗다. 액션 신이 예상보다 많이 화려해서 보는재미가 잇엇다.",
    },
];

const randomPlaceholder =
    placeholders[Math.floor(Math.random() * placeholders.length)];

document.querySelector("#ftitle").placeholder = randomPlaceholder.title;
document.querySelector("#fgenre").placeholder = randomPlaceholder.genre;
document.querySelector("#fyear").placeholder = randomPlaceholder.release_year;
document.querySelector("#fscore").placeholder = randomPlaceholder.score;
document.querySelector("#freview").placeholder = randomPlaceholder.review;

// ----------------------------

const mediaForm = document.querySelector("#media-form");

mediaForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.querySelector("#ftitle").value;
    const genre = document.querySelector("#fgenre").value;
    const release_year = document.querySelector("#fyear").value;
    const score = document.querySelector("#fscore").value;
    const review = document.querySelector("#freview").value;
    const image_url = document.querySelector("#fimage").value;

    const media = {
        title,
        genre,
        release_year,
        score,
        review,
        image_url,
    };

    const response = await fetch("http://localhost:3000/api/v1/media", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(media),
    });

    if (response.ok) {
        window.location.href = window.location.href
            .split("/")
            .slice(0, -1)
            .join("/");
    } else {
        console.error("Error adding media");
    }
});
