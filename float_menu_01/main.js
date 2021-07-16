const show_figcaption = (id_caption) => {
    document.getElementsByClassName(id_caption)[0].style.transform = 'scaleX(1)'
}
const hidden_figcaption = (id_caption) => {
    document.getElementsByClassName(id_caption)[0].style.transform = 'scaleX(0)'
}
const menu = document.getElementsByClassName('menu_primary--list')[0]
const list_items = document.getElementsByClassName('menu_primary--list-item')
const size_list_items = list_items.length
var menu_is_open = false

function ctr_menu(){
    if(menu_is_open){
        menu.style.top = '-50px'
        menu.style.left = '-50px'
        menu.style.transform = "scale(0) translate(-70%, -70%)"
        menu_is_open = false
        for (let index = 0; index < size_list_items; index++) {
            list_items[index].style.animation = ''
        }
    }else{
        menu.style.top = '0px'
        menu.style.left = '0px'
        menu.style.transform = "scale(1) translate(-70%, -70%)"
        menu_is_open = true

        let delay = 70
        for (let index = 0; index < size_list_items; index++) {
            console.log(list_items[index])
            list_items[index].style.animation = 'anim_item_menu 0.3s linear ' + delay + 'ms'
            delay += 70
        }
    }
}