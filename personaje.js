class Personaje {
    constructor(vida, ataque, nombre, nivel){
        this.vida = vida
        this.ataque = ataque
        this.nombre = nombre
        this.nivel = nivel 
}
getVida() {
    let mensaje_vida;
    mensaje_vida = "La vida de "+ this.nombre + " es " + this.vida
    return mensaje_vida
    }
    
getAtaque() {
    let mensaje_ataque;
    mensaje_ataque = "El ataque de "+ this.nombre + " es " + this.ataque
    return mensaje_ataque
    }
    
getNombre() {
    let mensaje_nombre;
    mensaje_nombre = "El nombre de "+ this.nombre + " es " + this.nombre
    return mensaje_nombre
    }
    
getNivel() {
    let mensaje_nivel;
    mensaje_nivel = "El nivel de "+ this.nombre + " es " + this.nivel
    return mensaje_nivel
    }
    
    
setVida(vida) {
    this.vida = vida
    }
    
setAtaque(ataque) {
    this.ataque = ataque
    }
    
setNombre(nombre) {
    this.nombre = nombre
    }
    
setNivel(nivel) {
    this.nivel = nivel
    }
recibirDanio(vida, ataque) {
    this.vida = vida - ataque
    }
vidaomuerte() {
    if(this.vida > 0) {
    return true
    }
    if(this.vida <= 0) {
    return false
    }
    }   
    
hacerDanio() {
    var daño_jugador = (this.ataque*this.nivel)
    return daño_jugador
    }     
}