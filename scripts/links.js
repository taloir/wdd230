const baseURL = "https://taloir.github.io/wdd230/";
const linksURL = "https://taloir.github.io/wdd230/data/links.json";

const list = document.querySelector('.assignments');

async function getLinkData(){
    const response = await fetch("data/links.json");
    const data = await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (lessons) => {
    lessons.forEach((week) => {
        const item = document.createElement("li");
        item.setAttribute("Text", week.lesson);
        const link = document.createElement("a");
        link.setAttribute("href",week.links[url]);
        link.setAttribute("Text",week.links[title]);

        item.appendchild(link);

        list.appendChild(item);
    });
}

getLinkData();