

const zenyatta_option = document.getElementById('character_img_1');
const genji_option = document.getElementById('character_img_2');
const hanzo_option = document.getElementById('character_img_3');

zenyatta_option.addEventListener('click', (e) => {
    document.getElementById('lore_img').src = '../Image/zenyatta-1.jpg'
    document.getElementById('lore_title').innerHTML = 'ZENYATTA'
    document.getElementById('lore_desc').innerHTML = 'Zenyatta is the prince of the earth kingdom, who run away from his kingdom, disguised as an omnic monk who wanders the world in search of spiritual enlightenment. It is said that those who cross his path are never the same again. When his kingdom faces an inevitable chaos, he returns to save his kingdom'
})

genji_option.addEventListener('click', (e) => {
    document.getElementById('lore_img').src = '../Image/genji-1.png'
    document.getElementById('lore_title').innerHTML = 'GENJI'
    document.getElementById('lore_desc').innerHTML = 'Genji Shimada was transformed into cyborg after he barely survived an accident, the ninja has made peace with the augmented body he once rejected, and in doing so, he has discovered a higher humanity. With his newfound power, he vows as a prince to protect his kingdom of wind'
})

hanzo_option.addEventListener('click', (e) => {
    document.getElementById('lore_img').src = '../Image/hanzo-1.png'
    document.getElementById('lore_title').innerHTML = 'HANZO'
    document.getElementById('lore_desc').innerHTML = 'Adopted son of the king of water kingdom, he was teached the way of a warrior since he was little. Mastering his skills as a bowman and an assassin, Hanzo Shimada strives to prove himself as a warrior without peer.'
})

zenyatta_option.click()