import { state } from "../../state";

export function initHomepage(containerEl) {
  const div = document.createElement("div");
  const tasks = state.getEnabledTasks();
  console.log(tasks);

  div.innerHTML = `
    <h1>Mis pendientes</h1>
    <button class="add-button">Agregar</button>
    <ul class="lista"></ul>
  `;
  const listaEl = div.querySelector(".lista");

  function createTasks(items) {
    listaEl.innerHTML = "";
    for (const item of items) {
      const todoItemEl = document.createElement("todo-item");
      todoItemEl.setAttribute("title", item.title);
      todoItemEl.setAttribute("id", item.id);
      if (item.completed) {
        todoItemEl.setAttribute("checked", "true");
      }
      todoItemEl.addEventListener("change", (e: any) => {
        state.changeItemState(e.detail.id, e.detail.value);
      });
      listaEl.appendChild(todoItemEl);
    }
  }

  state.subscribe(() => {
    createTasks(state.getEnabledTasks());
  });

  createTasks(tasks);

  div.querySelector(".add-button").addEventListener("click", () => {
    state.addTask(Math.random(), "Desde el botón");
  });
  containerEl.appendChild(div);
}
