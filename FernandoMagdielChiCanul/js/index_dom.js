import hamburguerMenu from "./DOM/menu_hamburguesa.js";
import { digitalClock,alarm } from "./DOM/reloj.js";
import { moveBall,shortcuts } from "./DOM/teclado.js";
import countdown from "./DOM/cuenta_regresiva.js";
import scrollTopButton from "./DOM/boton_scroll.js";
import darkTheme from "./DOM/tema_oscuro.js";


const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown", "Nov 12, 2023 19:00:40", "Feliz Cumpleaños");
    scrollTopButton(".scroll-top-btn");
    
});

d.addEventListener("keydown", (e) =>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
});

darkTheme(".dark-theme-btn","dark-mode");
 