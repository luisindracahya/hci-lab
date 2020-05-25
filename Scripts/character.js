

const zenyatta_option = document.getElementById('character_img_1');
const genji_option = document.getElementById('character_img_2');
const hanzo_option = document.getElementById('character_img_3');

zenyatta_option.addEventListener('click', (e) => {
    document.getElementById('lore_img').src = '../Image/zenyatta-1.jpg'
    document.getElementById('lore_title').innerHTML = 'ZENYATTA'
    document.getElementById('lore_desc').innerHTML = 'Zenyatta is an omnic monk who wanders the world in search of spiritual enlightenment. It is said that those who cross his path are never the same again.'
})

genji_option.addEventListener('click', (e) => {
    document.getElementById('lore_img').src = '../Image/genji-1.png'
    document.getElementById('lore_title').innerHTML = 'GENJI'
    document.getElementById('lore_desc').innerHTML = 'The cyborg Genji Shimada has made peace with the augmented body he once rejected, and in doing so, he has discovered a higher humanity.'
})

hanzo_option.addEventListener('click', (e) => {
    document.getElementById('lore_img').src = '../Image/hanzo-1.png'
    document.getElementById('lore_title').innerHTML = 'HANZO'
    document.getElementById('lore_desc').innerHTML = 'Mastering his skills as a bowman and an assassin, Hanzo Shimada strives to prove himself as a warrior without peer.'
})

zenyatta_option.click()