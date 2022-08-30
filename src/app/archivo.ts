export interface sonido{
    titulo:string,
    subtitulo:string,
    playlist:string,
    imagen:string,
    reproduciendo:boolean,
    tiempo:number
}

export const listas:Array<sonido>=[
    {titulo:"Explosión",subtitulo:"explotando ando",imagen:'assets/imagenes/explot.webp',playlist:'assets/sonidos/explote.wav',reproduciendo:false,tiempo:4000},
    {titulo:"Pajaros",subtitulo:"Son pajaraos",imagen:'assets/imagenes/pajaro.jpeg',playlist:'assets/sonidos/birds.wav',reproduciendo:false,tiempo:4000},
    {titulo:"Cines",subtitulo:"Andamos en el cine",imagen:'assets/imagenes/cine.jpeg',playlist:'assets/sonidos/cine.wav',reproduciendo:false,tiempo:4000},
    {titulo:"Juegos",subtitulo:"Esto es un juego",imagen:'assets/imagenes/juegos.jpeg',playlist:'assets/sonidos/juegos.wav',reproduciendo:false,tiempo:4000},
    {titulo:"Notificaciones",subtitulo:"Te llegó la notificación",imagen:'assets/imagenes/notifications.webp',playlist:'assets/sonidos/notificacion.wav',reproduciendo:false,tiempo:4000},
    {titulo:"Rocket",subtitulo:"Sonido rocket",imagen:'assets/imagenes/rocket.png',playlist:'assets/sonidos/rocket.wav',reproduciendo:false,tiempo:4000},
    {titulo:"Es noche",subtitulo:"Sonido noche",imagen:'assets/imagenes/noche.jpeg',playlist:'assets/sonidos/noche.wav',reproduciendo:false,tiempo:4000}];