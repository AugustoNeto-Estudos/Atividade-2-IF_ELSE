function Login() {
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;
  let msg = document.getElementById("mensagem");

  // Defina aqui seu nome e sobrenome
  let usuarioCorreto = "teste";
  let senhaCorreta = "123";

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    document.getElementById("mensagem").innerHTML = "Login realizado com sucesso!"
    console.log("Login realizado com sucesso!")

  } else {
    document.getElementById("mensagem").innerHTML = "Usuário ou senha incorretos!"
    console.log("Usuário ou senha incorretos!")

  }
}
