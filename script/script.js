const body = document.body
const header = document.createElement("header")
const logo_block = document.createElement("div")
logo_block.classList.add("logo_block")
const img = document.createElement("img")
img.src = "./img/logo.png"
const logo_blockH1 = document.createElement("h1")
logo_blockH1.textContent = "SLOGAN SLOGAN SLOGAN"




const navbar = document.createElement("nav")
navbar.classList.add("navbar")
const nav_ul = document.createElement("ul")
nav_ul.classList.add("ull")
const menu_item = ["Главная", "О приложении", "О проекте", "Скачать", "Контакты"]
for (let i = 0; i < menu_item.length; i++) {
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.classList.add("menu_item")
    a.textContent = menu_item[i]
    li.append(a)
    nav_ul.append(li)
}




const section1 = document.createElement("div")
section1.classList.add("section1")
for (let i = 0; i < 3; i++) {
    const card = document.createElement("div")
    card.classList.add("card")
    const img = document.createElement("img")
    img.src = "./img/foto.png"
    const p = document.createElement("p")
    p.textContent = "Часто ли Вы опаздываете на работу (учёбу)?"
    card.append(img, p)
    section1.append(card)
}

const main = document.createElement("main")
const h2 = document.createElement("h2")
h2.textContent = "О приложении"
const container_rod = document.createElement("div")
container_rod.classList.add("container_rod")
const img_video = document.createElement("img")
img_video.classList.add("video")
img_video.src = "./img/fott.png"
const img_play = document.createElement("img")
img_play.classList.add("play")
img_play.src = "./img/play-button.png"


const question_block = document.createElement("section")
question_block.classList.add("question_block")
const block_imgs = document.createElement("div")
block_imgs.classList.add("block_imgs")
for (let i = 0; i < 5; i++) {
    const img_block = document.createElement("img")
    img_block.classList.add("block_img")
    img_block.src = "/img/question.png"
    block_imgs.append(img_block)

}

const section3 = document.createElement("section")
const container_info = document.createElement("div")
container_info.classList.add("container_info")

const container_infoH2 = document.createElement("h2")
container_infoH2.textContent = "О проекте"
const container_infoP = document.createElement("p")
container_infoP.textContent = "Курс для начинающих предпринимателей, направленный на качественныйрезультат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы всвоем деле помогают участникам на всех этапах развития их бизнеса: отразработки идеи до ее реализации."


const download_section = document.createElement("section")
download_section.classList.add("download_section")
const container_download = document.createElement("div")
container_download.classList.add("container_download")
const container_downloadH2 = document.createElement("h2")
container_downloadH2.textContent = "Скачать"
const down = document.createElement("div")
down.classList.add("down")
const img11 = document.createElement("img")
img11.src = "./img/android.png"
const img22 = document.createElement("img")
img22.src = "./img/icon.png"
const p1 = document.createElement("p")
p1.textContent = "Курс для начинающих предпринимателей, направленный на качественныйрезультат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы всвоем деле помогают участникам на всех этапах развития их бизнеса: отразработки идеи до ее реализации."


const footer = document.createElement("footer")
const h6 = document.createElement("h6")
h6.textContent = "SOME"
const footer1 = document.createElement("div")
footer1.classList.add("footer")
const img1 = document.createElement("img")
img1.src = ""








footer.append(h6, footer1)

down.append(img11, img22)
container_download.append(container_downloadH2, down, p1)
download_section.append(container_download)

container_info.append(container_infoH2, container_infoP)
section3.append(container_info)

question_block.append(block_imgs)

// block_imgs
// question_block.append(block_imgs)

container_rod.append(img_video, img_play)
main.append(h2, container_rod, question_block, section3, download_section)

navbar.append(nav_ul)

logo_block.append(img, logo_blockH1)
header.append(logo_block, navbar, section1)
body.append(header, main, footer)
