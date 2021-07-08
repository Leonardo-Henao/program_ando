let item_class = id_class => document.getElementsByClassName(id_class)[0]
let menu_is_open = false
const menu = item_class('menu--menu')

// f = 1 open menu || 0 close menu
function ctr_menu(){
    if(menu_is_open) {
        menu.style.animation = 'close_menu 0.3s linear'
        setTimeout(() => {
            menu.style.display = 'none'
        }, 250);
        menu_is_open = false
    }else {
        menu.style.animation = 'open_menu 0.3s linear'
        setTimeout(() => {
            menu.style.display = 'grid'
        }, 250);
        menu_is_open = true
    }
}

