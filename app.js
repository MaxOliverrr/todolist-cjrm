const submitTodo = document.querySelector(".form-add-todo");
const Ul = document.querySelector(".todos-container");
const searchInput = document.querySelector(".search");
const submitSearch = document.querySelector(".form-search");
const insertTodo = document.querySelector(".add");

const createLi = value => {
  const id = (Math.random() * 1000).toFixed();

  let li = `
<li class="list-group-item d-flex justify-content-between align-items-center"
data-id="${id}"
>
<span>${value}</span>
<i class="far fa-trash-alt delete"
data-id="${id}"></i>
</li>
`;
  return Ul.insertAdjacentHTML("afterbegin", li);
};

submitTodo.addEventListener("submit", (event) => {
  event.preventDefault();

  if (insertTodo.value.trim()) {
    createLi(insertTodo.value);
    insertTodo.value = "";
    return;
  }
  insertTodo.classList.add("is-invalid");
  insertTodo.setAttribute("placeholder", "Insira uma tafera");
  insertTodo.value = ""
});

const removeTodo = event => {
  const deleteButton = event.target.getAttribute("class").includes("delete");
  const todoById = document.querySelector(
    `[data-id="${event.target.dataset.id}"]`
  );

  if (deleteButton) {
    todoById.remove();
  }
};

const searchTodo = () => {
  const lis = document.querySelectorAll("li");
  
  lis.forEach(li => {
    const liContent = li.textContent.toLowerCase();
    const searchContent = searchInput.value.toLowerCase().trim();
    
    li.classList.remove("d-flex");
    li.classList.add("d-none");

    if (liContent.includes(searchContent)) {
      li.classList.remove("d-none");
      li.classList.add("d-flex");
      
    }
  
  });
};

const removeClassInvalid = () => {
  insertTodo.classList.remove("is-invalid");
  insertTodo.removeAttribute("placeholder");
};

const checkFocusInputFunc = () => {
  const checkFocusInput = insertTodo
  .getAttribute("class")
  .includes("focus-visible");

if (!checkFocusInput) {
  removeClassInvalid();
  insertTodo.value = ""
}
}


Ul.addEventListener("click", removeTodo);

searchInput.addEventListener("keypress", searchTodo);

submitSearch.addEventListener("submit", (event) => event.preventDefault());

insertTodo.addEventListener("input", removeClassInvalidFunc = () => {
  if (insertTodo.value.trim()) {
    removeClassInvalid();
  }
});

document.addEventListener("click", checkFocusInputFunc)

