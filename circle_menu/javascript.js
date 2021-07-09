let item_class = id_class => document.getElementsByClassName(id_class)[0]
let menu_is_open = false
const menu = item_class('menu--menu')

function ctr_menu(){
    if(menu_is_open) {
        menu.style.animation = 'close_menu 0.3s linear'
        setTimeout(() => {
            menu.style.display = 'none'
        }, 150);
        menu_is_open = false
    }else {
        menu.style.animation = 'open_menu 0.3s linear'
        menu.style.display = 'grid'
        menu_is_open = true
    }
}