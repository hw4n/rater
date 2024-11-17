const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");

overlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("overlay")) {
        closeOverlay();
    }
});

close.addEventListener("click", closeOverlay);

const mediaArray = [];

fetch("http://localhost:3000/api/v1/media")
    .then((res) => {
        return res.json();
    })
    .then((media) => {
        initMedia(media);
        addMediaEventListener();
    });

function initMedia(media) {
    let innerhtml = "";

    for (let i = 0; i < media.length; i++) {
        mediaArray.push(media[i]);
        const { id, title, score, image_url } = media[i];

        innerhtml += `
        <li id=${id} class="media">
            <img
                draggable="false"
                src="${image_url ? image_url : "https://placehold.co/1280x720"}"
            />
            <div class="media-body">
                <div class="score" style="width: ${(score / 10) * 100}%"></div>
                <div class="title">${title}</div>
            </div>
        </li>`;
    }

    document.querySelector(".mediaList").innerHTML = innerhtml;
}

function addMediaEventListener() {
    const mediaItems = document.querySelectorAll(".media");
    mediaItems.forEach((mediaItem) => {
        mediaItem.addEventListener("click", (e) => {
            setOverlay(e.target.closest(".media").id);
            openOverlay();
        });
    });
}

const overlayImage = document.querySelector("#overlayImage");
const overlayTitle = document.querySelector("#overlayTitle");
const overlayYear = document.querySelector("#overlayYear");
const overlayGenre = document.querySelector("#overlayGenre");
const overlayScore = document.querySelector("#overlayScore");
const overlayDesc = document.querySelector("#overlayDesc");

function setOverlay(mediaId) {
    // type conversion
    const media = mediaArray.find((media) => media.id === +mediaId);

    overlayImage.src = media.image_url
        ? media.image_url
        : "https://placehold.co/1280x720";
    overlayTitle.textContent = media.title;
    overlayYear.textContent = media.release_year;
    overlayGenre.textContent = media.genre;
    overlayScore.textContent = media.score;
    overlayDesc.textContent = media.review;
}

function openOverlay() {
    overlay.style.display = "flex";
}

function closeOverlay() {
    overlay.style.display = "none";
}
