import hamburguerMenu from "./DOM/menu_hamburguesa.js";
import { digitalClock,alarm } from "./DOM/reloj.js";
import { moveBall,shortcuts } from "./DOM/teclado.js";
import countdown from "./DOM/cuenta_regresiva.js";
import scrollTopButton from "./DOM/boton_scroll.js";
import darkTheme from "./DOM/tema_oscuro.js";
import responsiveMedia from "./DOM/objeto_responsive.js";


const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown", "Nov 12, 2023 19:00:40", "Feliz Cumpleaños");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube","(min-width: 1024px)",`<a href="https://youtu.be/0kZeoYQd9Dc?si=YzaDcJBYffgiWUEZ" target="_blank" rel="noopener">Ver video</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/0kZeoYQd9Dc?si=8nRY8FgWFk2YThbN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsiveMedia("gmaps","(min-width: 1024px)",`<a href="https://maps.app.goo.gl/rBgd4bnduXzkJT6b7" target="_blank" rel="noopener">Ver mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238419.68081292012!2d-89.79773368038961!3d20.980306903287538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56715cab450d17%3A0x5dfc155715abeb09!2zTcOpcmlkYSwgWXVjLg!5e0!3m2!1ses!2smx!4v1697171790799!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    
});

d.addEventListener("keydown", (e) =>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
});

darkTheme(".dark-theme-btn","dark-mode");
 