function tooggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
  // pegar a tag alt
  const alt = document.querySelector("#profile img")
  // definida as constantes de alt
  const altlight = "Light mode Foto do Matheus Alves fardado"
  const altblack = "Black mode Foto do Matheus Alves fardado"
  // se tiver em light mode define a cosntante "altlight"
  if (html.classList.contains("light")) {
    alt.setAttribute("alt", altlight)
  } else {
    // se tiver em darkmode define a constante "altblack"
    alt.setAttribute("alt", altblack)
  }
}
