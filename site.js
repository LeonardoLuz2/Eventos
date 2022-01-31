function run() {
  const currentPass = "uniritter@50";
  const pass = localStorage.getItem('Token');
  console.log(pass)
  if (!pass) {
    const response = prompt('Informe a senha: ', '');

    if (response !== currentPass) {
      window.location = "senhaErrada.html"
      localStorage.removeItem('Token');
    } else {
      localStorage.setItem('Token', response);
    }
  } else {
    if (pass !== currentPass) {
      localStorage.removeItem('Token');
      window.location = "senhaErrada.html"
    }
  }
}

run();