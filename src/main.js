import OverlayMenu  from "@/modules/OverlayMenu";
import SliderCollection from "@/modules/SliderCollection";
import ScrollingContent from "@/modules/ScrollingContent";
import InputMaskCollection from "@/modules/InputMask";
import Form from "@/modules/Form";


const keyboardNavigationKeys = new Set([
  "Tab",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Home",
  "End",
  "PageUp",
  "PageDown",
]);

document.addEventListener("keydown", (event) => {
  if (keyboardNavigationKeys.has(event.key)) {
    document.documentElement.classList.add("is-keyboard-navigation");
  }
}, true);

document.addEventListener("pointerdown", () => {
  document.documentElement.classList.remove("is-keyboard-navigation");
}, true);

new OverlayMenu()
new SliderCollection()
new ScrollingContent()
new InputMaskCollection()
new Form()
