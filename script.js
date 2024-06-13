function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "foto de mayk brito sorrindo, usando oculos escuro e uma jaqueta cinza barba, fundo azul"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
