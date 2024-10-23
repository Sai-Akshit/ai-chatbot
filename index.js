const socialIconButtons = document.getElementsByClassName("social-icon");

const addEventListenersToSocialIconButton = () => {
    for (let i = 0; i < socialIconButtons.length; i++) {
        socialIconButtons[i].addEventListener("click", () =>
            postToSocialMedia(socialIconButtons[i].classList)
        );
    }
};

addEventListenersToSocialIconButton();

const skillIcon = document.getElementsByClassName("tooltip");


const addEventListenersToSkillIcon = () => {
    for (let i = 0; i < skillIcon.length; i++) {
        skillIcon[i].addEventListener("click", (e) => {
            console.log(e.target)
            updateDescription(e.target.id);
        });
    }
};

addEventListenersToSkillIcon();
