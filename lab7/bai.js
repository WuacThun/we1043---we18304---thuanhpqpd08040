let items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
  let item = items[i];

  item.setAttribute("draggble", true);
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("itemId", item.id);
  });
}
let bin = document.getElementById("bin");
bin.addEventListener("dragover", (e) => {
  if (e.preventDefault) e.preventDefault();
});

bin.addEventListener("drop", (e) => {
  let itemID = e.dataTransfer.getData("itemID");
  let item = document.getElementById("itemId");
  bin.target.appendChild(item);
  item.remove();
});
