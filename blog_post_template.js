const youtubeBannerLink = document.getElementById('youtube-banner-link')
const youtubeBanner = document.getElementById('youtube-banner')

youtubeBannerLink.addEventListener('mouseover', () => youtubeBanner.style.backgroundColor = 'red')
youtubeBannerLink.addEventListener('mouseleave', () => youtubeBanner.style.backgroundColor = 'white')



function myFunction(){

    var hidden1 = document.getElementById("hidden-exercise-section");

    if (hidden1.style.display === "none")
    {
        hidden1.style.display = "flex";
    }

    else
    {
        hidden1.style.display = "none";
    }

}

myFunction();