import "./components/text";
import "./components/todo-item";
import { initHomepage } from "./pages/home";
import { state } from "./state";
(function () {
  state.init();
  initHomepage(document.querySelector(".root"));
})();
