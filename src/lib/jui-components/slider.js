export default function handle(node) {
  const onDown = getOnDown(node);

  node.addEventListener("touchstart", onDown);
  node.addEventListener("mousedown", onDown);
  return {
    destroy() {
      node.removeEventListener("touchstart", onDown);
      node.removeEventListener("mousedown", onDown);
    }
  };
}

function getOnDown(node) {
  const onMove = getOnMove(node);

  return function (e) {
    e.preventDefault();
    node.dispatchEvent(new CustomEvent("dragstart"));

    const moveevent = "touches" in e ? "touchmove" : "mousemove";
    const upevent = "touches" in e ? "touchend" : "mouseup";

    document.addEventListener(moveevent, onMove);
    document.addEventListener(upevent, onUp);

    function onUp(e) {
      e.stopPropagation();

      document.removeEventListener(moveevent, onMove);
      document.removeEventListener(upevent, onUp);

      node.dispatchEvent(new CustomEvent("dragend"));
    };
  };
}

function getOnMove(node) {
  const track = node.parentNode;

  return function (e) {
    const { left, width } = track.getBoundingClientRect();
    const clickOffset = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clickPos = Math.min(Math.max((clickOffset - left) / width, 0), 1) || 0;
    node.dispatchEvent(new CustomEvent("drag", { detail: clickPos }));
  };
}