export interface sonido{
    titulo:string,
    subtitulo:string,
    playlist:string,
    imagen:string,
    reproduciendo:boolean
}

export const listas:Array<sonido>=[
    {titulo:"Explosión",subtitulo:"explotando ando",imagen:'assets/imagenes/explot.webp',playlist:'assets/sonidos/explote.wav',reproduciendo:false},
    {titulo:"Pajaros",subtitulo:"Son pajaraos",imagen:'assets/imagenes/pajaro.jpg',playlist:'assets/sonidos/birds.wav',reproduciendo:false},
    {titulo:"Cines",subtitulo:"Andamos en el cine",imagen:'assets/imagenes/cine.jpg',playlist:'assets/sonidos/cine.wav',reproduciendo:false},
    {titulo:"Juegos",subtitulo:"Esto es un juego",imagen:'assets/imagenes/juegos.jpg',playlist:'assets/sonidos/juegos.wav',reproduciendo:false},
    {titulo:"Notificaciones",subtitulo:"Te llegó la notificación",imagen:'assets/imagenes/notifications.webp',playlist:'assets/sonidos/notificacion.wav',reproduciendo:false},
    {titulo:"Rocket",subtitulo:"Sonido rocket",imagen:'assets/imagenes/rocket.jpg',playlist:'assets/sonidos/rocket.wav',reproduciendo:false},
    {titulo:"Es noche",subtitulo:"Sonido noche",imagen:'assets/imagenes/noche.jpg',playlist:'assets/sonidos/noche.wav',reproduciendo:false}];