function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pego a tag da imagem
  const img = document.querySelector("#profile img")
  // substituo a imzagem
  if (html.classList.contains("light")) {
    //se tiver em light mode, adiciono a imagem light
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Lucas alexandre usando vestimenta social tirando uma foto em frente ao banheiro"
    )
    //se tiver sem o light mode, mantenho a imagem normal
  } else {
    img.setAttribute("src", "./assets/batman.png")
    img.setAttribute("alt", "Foto do batman")
  }
}
