class UserProfile {
    constructor(userName, userImage, track, githubURL) {
        this.userName = userName;
        this.userImage = userImage;
        this.track = track;
        this.githubURL = githubURL;
    }

    getDayOfWeek() {
        return new Date().toLocaleString('en-us', { weekday: 'long' });
    }

    getUTCTimeInMilliseconds() {
        return new Date().getTime();
    }

    renderProfile() {
        document.querySelector('[data-testid="slackUserName"]').textContent = this.userName;
        const imageElem = document.querySelector('[data-testid="slackDisplayImage"]');
        imageElem.src = this.userImage;
        imageElem.alt = this.userName;
        document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Today is: ${this.getDayOfWeek()}`;
        document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC time in milliseconds: ${this.getUTCTimeInMilliseconds()}`;
        document.querySelector('[data-testid="myTrack"]').textContent = this.track;
        document.querySelector('[data-testid="githubURL"]').href = this.githubURL;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const userProfile = new UserProfile(
        'Chinwe Okonkwo',
        'image/youtub.jpeg', 
        'Frontend',
        'https://github.com/G-Chilie'
    );

    userProfile.renderProfile();
});
