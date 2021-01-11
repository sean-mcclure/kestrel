export function style_element(type, e) {
    if(type === "feed") {
            document.getElementsByClassName("feed_titles")[0].style.background = "#313030";
            document.getElementsByClassName("feed_titles")[1].style.background = "#313030";
            document.getElementsByClassName("feed_titles")[0].style.color = "whitesmoke";
            document.getElementsByClassName("feed_titles")[1].style.color = "whitesmoke";
            document.getElementById(e.target.id).style.background = "gold";
            document.getElementById(e.target.id).style.color = "#141414";
    }
}