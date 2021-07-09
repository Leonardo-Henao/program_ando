open_page()

function open_page(){
    setTimeout(() => {
        $class('header').style.height = '100px'
        $class('header_brand-logo').style.width = '50px'
        $class('header_brand-name ').style = 'font-size:1.8rem'

        let list_p = document.getElementsByClassName('parrafo')
        let pos = 0
        let interval_p = setInterval(() => {
            list_p[pos].style.animation = 'slide_enter 0.5s linear'
            pos++
            if(pos > list_p.length) clearInterval(interval_p)
        }, 200);
        
        setTimeout(() => {
            $class('header').style.display = 'block'
            $class('nav_primary').style.display = 'block'
        }, 900);

    }, 1000);
}

function $class(id_class){
    return document.getElementsByClassName(id_class)[0]
}