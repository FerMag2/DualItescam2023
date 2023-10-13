import hamburguerMenu from "./DOM/menu_hamburguesa.js";
import { digitalClock,alarm } from "./DOM/reloj.js";
import { moveBall,shortcuts } from "./DOM/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
});

d.addEventListener("keydown", (e) =>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
})
 