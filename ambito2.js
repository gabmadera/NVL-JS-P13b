
function prueba(p) {
  var l = p.length;

  for (var i = 0; i < l/2; i++) {
    if (p[i] !== p[l - 1 - i]) {
      return document.write("NO PALINDROMO");
    }
  }
  return document.write("SI PALINDROMO");
}
prueba("reconocer");
