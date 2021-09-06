binaryText("Hello hmm");

function binaryText(text) {
  let binary = " ";

  for (var i = 0; i < text.length; i++) {
    binary += text[i].charCodeAt(0).toString(2) + " ";
  }
  console.log(binary);
}
