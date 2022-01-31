function main() {
var enemigo1 = new Enemigo 
enemigo1.setVida(100)
enemigo1.setNivel(2) 
enemigo1.setAtaque(4) 
enemigo1.setNombre("Ruperto")

$("hp").html(enemigo1.vida + "/100")
$("lvl").html(enemigo1.nivel)
$(".enemigo").css({
    "font-size": "16px",
    "color": "red",
    "text-align":"center",
    "position":"absolute",
    "left": "45%",
    "top": "10%",
    "border-with":"3px",
    "border-style":"solid",
    "border-color":"black"
})

var heroe1 = new Heroe
heroe1.setVida(100)
heroe1.setExperiencia(12)
heroe1.setNivel(2)
heroe1.setAtaque(10) 
heroe1.setNombre(prompt("Elige el nombre de tu heroe"))
var ultimo_turno = 0

$("#salud").html(heroe1.vida + "/100")
$("#experiencia").html(heroe1.experiencia)
$("#nivel").html(heroe1.nivel)
$(".heroe").css({
    "font-size": "20px",
    "color": "blue",
    "text-align":"center",
    "position":"absolute",
    "left": "30%",
    "top": "8%",
})

while(enemigo1.vidaomuerte() && heroe1.vidaomuerte()) { 

if(ultimo_turno == 1 || ultimo_turno == 0) {
enemigo1.recibirDanio(enemigo1.vida, heroe1.hacerDanio())
console.log("Enemigo " + enemigo1.vida)
$("#salud").html(heroe1.vida + "/100")
$("hp").html(enemigo1.vida + "/100")
ultimo_turno = -1  
}

if(ultimo_turno == -1) { 
heroe1.recibirDanio(heroe1.vida, enemigo1.hacerDanio())
console.log("Heroe " + heroe1.vida)
$("#salud").html(heroe1.vida + "/100")
$("hp").html(enemigo1.vida + "/100")
ultimo_turno = 1
}
} 


heroe1.recibirExperiencia(enemigo1.recibirExperiencia(1))
$("#experiencia").html(heroe1.experiencia)
$("#nivel").html(heroe1.nivel)
$("hp").html(enemigo1.vida + "/100")
$("#salud").html(heroe1.vida + "/100")
console.log(heroe1)
console.log(enemigo1)
}

main()

