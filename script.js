const list = document.getElementById("infi-list");
let itemCount = 1;
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount++}`;
    list.appendChild(li);
  }
}
addItems(10);
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 2) {
    addItems(4); 
  }
});
