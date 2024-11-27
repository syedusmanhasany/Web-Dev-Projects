const githubURL = "https://api.github.com/users";
const search_bar = document.getElementById("user-input");
const search_btn = document.getElementById("search-btn");
const github_profile = document.getElementById("card");

const profile = (info) => {
    return `
    <div class="profile-card">
        <div class="left">
            <img src="${info.avatar_url}" alt="profile pic" id="profile_pic">
            <div class="img-con">
                <h4>${info.name || 'No Name Available'}</h4> <!-- Display a fallback if no name is provided -->
                <h4>${info.login}</h4>
            </div>
        </div>
        <div class="btn">
            <button id="profile-btn"><a href="${info.html_url}" target="_blank">Check Profile</a></button>
        </div>
        <div class="about">
            <h3>Bio</h3>
            <h5>${info.bio || 'No bio available'}</h5> <!-- Display a fallback if bio is missing -->
            <div class="features">
                <div>
                    <h4>Followers</h4>
                    <h5 class="center">${info.followers}</h5>
                </div>
                <div>
                    <h4>Following</h4>
                    <h5 class="center">${info.following}</h5>
                </div>
                <div>
                    <h4>Repositories</h4>
                    <h5 class="center">${info.public_repos}</h5>
                </div>
            </div>
        </div>
    </div>
    `;
};

const fetchProfile = async () => {
    const username = search_bar.value
    console.log(username);

    if (!username) {
        alert("Please enter a GitHub username.");
        return; // Exit the function if no username is provided
    }

    try {
        const githubData = await fetch(`${githubURL}/${username}`);
        const fetchData = await githubData.json();
        
        // Check if the user was found or not
        if (fetchData.message === "Not Found") {
            github_profile.innerHTML = `<p>User not found. Please try again.</p>`;
            return;
        }

        // If the profile data is valid, display it
        github_profile.innerHTML = profile(fetchData);
        console.log(fetchData);

    } catch (err) {
        console.log("Error fetching profile:", err);
        github_profile.innerHTML = `<p>There was an error fetching the profile. Please try again.</p>`;
    }
};

search_btn.addEventListener("click", fetchProfile);
search_bar.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        fetchProfile()
        console.log(event)
}
});
