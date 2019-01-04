const Prism = require("prismjs");

const div = document.querySelector(".editor-inner > pre");
const textarea = document.querySelector(".editor-inner > textarea");
function resize() {
  textarea.style.height = `${div.clientHeight}px`;
  textarea.style.width = `${div.clientWidth}px`;
}
function set() {
  div.innerHTML = Prism.highlight(textarea.value + "\n", Prism.languages.js, "js");
  resize();
}
const editor = document.querySelector(".editor");
const size = { width: editor.clientWidth, height: editor.clientHeight };
function watch() {
  setTimeout(watch, 1000);
  if (
    size.width === editor.clientWidth &&
    size.height === editor.clientHeight
  ) {
    return;
  }
  size.width = editor.clientWidth;
  size.height = editor.clientHeight;
  editor.onresize && editor.onresize();

}

editor.onresize = () => {
  console.log();
  resize();
};
watch();

set();
textarea.oninput = () => {
  set();
}

const run = document.querySelector("button");
run.onclick = function() {
  eval(textarea.value)
}
