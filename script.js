function login()
{
  let u = username.value
  let p = pw.value
  if (u=="bomboclat" && p=="66")
  {
    window.open("login.html")
    document.getElementById(compiler).style.display="block"
  }
}