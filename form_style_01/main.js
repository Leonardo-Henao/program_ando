const get_item = (id_class) => document.getElementsByClassName(id_class)[0]
const icon_sign_in = get_item('form_button-submit--img')

let hover = ()=> {
    icon_sign_in.style.width = '16px'
    icon_sign_in.style.margin = '0px 0px 0px 16px'
}
let hover_out = ()=> {
    icon_sign_in.style.width = '0px'
    icon_sign_in.style.margin = '0px'
}
function send_form() {
 // ADD YOU FUNCTIONS TO SEND FORM
}