function replaceAt(str, index, ch) {
  return str.substr(0, index) + ch + str.substr(index + ch.length + 5);
}



function typeWriterBeginning(i, txt, id, speed) {
  if (i < txt.length) {
    innerHtml = document.getElementById(id).innerHTML
    document.getElementById(id).innerHTML = replaceAt(innerHtml, i, txt.charAt(i))

    i++;
    // console.log(i);
    setTimeout(typeWriterBeginning, speed, i, txt, id, speed);
  }
}

function fillIn(txt, id){
  console.log(id);
  console.log(document.getElementById(id));
  let spaces = Array(txt.length).fill('\xa0').join('');
  // console.log(txt.length * " ");
  // console.log(spaces);
  document.getElementById(id).innerHTML = spaces
}
