const list = document.getElementById("animeList");
let draggedItem = null;

// Function to update ranking numbers
function updateRanks() {
  const items = document.querySelectorAll("#animeList>li");

  items.forEach((item, index) => {
    const rankSpan = item.querySelector(".rank");

    rankSpan.textContent = index + 1;
  });
}

// Add rank numbers initially
function addRanks() {

  const items = document.querySelectorAll("#animeList>li");

  // initial ranks based on index
  items.forEach((item, index) => {
    const rank = document.createElement("span");
    rank.classList.add("rank");
    rank.textContent = index + 1;
    // added at top or before as rank need to show before
    item.prepend(rank);
  });
}

addRanks();

const items = document.querySelectorAll("#animeList>li");

items.forEach(item => {

  // html5 api's
  //dragstart event is start of dragging
  item.addEventListener("dragstart", () => {
    draggedItem = item;
    item.classList.add("dragging");
  });

  //end of drag
  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });

  // dragging over element
  // so we do some visual bordering in ui
  item.addEventListener("dragover", (e) => {
    e.preventDefault();
    item.classList.add("over");
  });
  //we have moved ahead of over element
  item.addEventListener("dragleave", () => {
    item.classList.remove("over");
  });

  // when we drop
  item.addEventListener("drop", () => {
    item.classList.remove("over");

    // only change order when item is dropped in some other place
    //if dropped on its own place no change needed
    if (draggedItem !== item) {

      // Convert children to array for use of indexof function
      // getting new order from ui
      const allItems = [...document.querySelectorAll("#animeList > li")];
      const draggedIndex = allItems.indexOf(draggedItem);
      const targetIndex = allItems.indexOf(item);

      // case 1 of dropping down
      // then we insert the dragged to the next of target ie before of nextsibling
      if (draggedIndex < targetIndex) {
        list.insertBefore(draggedItem, item.nextSibling);
      }
      // case2 of dropping up
      // we insert the dragged to before of target
      else {
        list.insertBefore(draggedItem, item);
      }

      //updating ranks after reorder
      updateRanks();
    }
  });

});