export function resetSelected(nodes) {
  nodes.forEach((resetItems) => {
    resetItems.checked = false;
  })
}