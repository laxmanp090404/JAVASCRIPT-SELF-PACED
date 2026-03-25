# Anime Ranking (Drag n Drop)

A simple, interactive web application that allows users to rank their favorite anime titles using a drag-and-drop interface.

## Features

- **Drag and Drop Interface**: Intuitive drag-and-drop functionality using the native HTML5 API.
- **Dynamic Ranking**: Rank numbers automatically update based on the order of the list items.
- **Visual Feedback**: visual cues when hovering over drop targets and while dragging items.

## Core Logic

### 1. Event Listeners
Each list item (`<li>`) is assigned event listeners to handle the drag lifecycle:
- `dragstart`: Triggered when the user starts dragging. Stores the reference to the `draggedItem` and adds a visual class.
- `dragover`: Triggered when an item is dragged over another.
- `dragleave`: Triggered when leaving a valid drop target, removing the highlight.
- `drop`: Triggered when the item is dropped.

### 2. Reordering Logic
When an item is dropped, the script calculates where it should be placed specifically relative to the target item:

```javascript
const allItems = [...document.querySelectorAll("#animeList > li")];
const draggedIndex = allItems.indexOf(draggedItem);
const targetIndex = allItems.indexOf(item);

if (draggedIndex < targetIndex) {
  // Dragging downwards: Insert after the target (before target's next sibling)
  list.insertBefore(draggedItem, item.nextSibling);
} else {
  // Dragging upwards: Insert before the target
  list.insertBefore(draggedItem, item);
}
```

### 3. Rank Updates
After every successful drop and reorder, the `updateRanks()` function is called. It iterates through the current DOM order of list items and updates the text content of the ranking number spans (1, 2, 3...) to reflect the new sequence.

