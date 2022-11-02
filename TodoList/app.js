var btn_add = document.querySelector(".btn--add");
var list_item = document.querySelector(".list_work_item");
var form_add = document.querySelector(".form_add");
var btn_delete = document.querySelector(".delete_icon");
var btn_save = document.querySelector(".btn_save");
var btn_cancel = document.querySelector(".btn_cancel");
var action_delete = document.querySelector(".action_delete");
var action_edit = document.querySelector(".action_edit");
var name_work = document.querySelector(".input_name");
var status_work = document.querySelector(".input_status");
var btn_search = document.querySelector(".search");
var input_search = document.querySelector(".input_search");
var anpha = document.querySelector(".abc");
var handle = document.querySelector(".handle");

btn_delete.addEventListener("click", () => {
  clear();
  form_add.style.display = "none";
});
btn_add.addEventListener("click", () => {
  form_add.style.display = "block";
});
function getId(id) {
  let todoList = JSON.parse(localStorage.getItem("todos"));

  for (let i = 0; i < todoList.length; i++) {
    if (id !== i) {
      return -1;
    }
  }
  return id;
}
btn_save.addEventListener("click", () => {
  let item = {};
  item.name = name_work.value;
  if (name_work.value === "") {
    alert("may chua nhap gi ma");
    return;
  }
  item.status = status_work.value === "true" ? true : false;
  let localTodos = localStorage.getItem("todos");
  let todoList = localTodos ? JSON.parse(localTodos) : [];
  todoList.push(item);
  localStorage.setItem("todos", JSON.stringify(todoList));
  show();
  clear();
});
btn_cancel.addEventListener("click", () => {
  clear();
});
show();
function clear() {
  name_work.value = "";
  status_work.value = "true";
}
var defaultTodoList = [
  { name: "go to school", status: true },
  { name: "watching movie ", status: false },
  { name: " go fishing", status: true },
];
function show() {
  var localTodos = localStorage.getItem("todos");
  var todoList = localTodos ? JSON.parse(localTodos) : [];
  var list_work = "";
  let status = "";
  let action = "";
  for (let i = 0; i < todoList.length; i++) {
    if ((status = todoList[i].status === true ? "Active" : "Hide"))
      if (
        (action = todoList[i].status === true ? "action_active" : "action_hide")
      )
        list_work += `
    <tr>
      <th scope="row">${i + 1}</th>
      <td>${todoList[i].name}</td>
      <td>
        <button class="  ${action}">${status}</button>
      </td>
      <td>
        <div class="action_btn">
          <button class="action_edit" onclick="edit(${i})">
            <i class="fa-solid fa-pencil"></i>Edit
          </button>
          <button class="action_delete" onclick="remove(${i})">
            <i class="fa-solid fa-trash"></i>
            Delete
          </button>
        </div>
      </td>
    </tr>
  `;
  }
  list_item.innerHTML = list_work;
}
function remove(id) {
  let todoList = JSON.parse(localStorage.getItem("todos"));
  let newTodos = todoList.filter((item, index) => {
    return id !== index;
  });
  localStorage.setItem("todos", JSON.stringify(newTodos));
  show();
}

function edit(id) {
  let todoList = JSON.parse(localStorage.getItem("todos"));
  for (let i = 0; i < todoList.length; i++) {
    if (id === i) {
      name_work.value = todoList[i].name;
      status_work.value = todoList[i].status;
      // remove(id);
      show();
    }
  }
}

input_search.onkeyup = () => {
  let todoList = JSON.parse(localStorage.getItem("todos"));
  var searchItem = "";
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].name.includes(input_search.value)) {
      if ((status = todoList[i].status === true ? "Active" : "Hide"))
        if (
          (action =
            todoList[i].status === true ? "action_active" : "action_hide")
        )
          searchItem += `
      <tr>
      <th scope="row">${i + 1}</th>
      <td>${todoList[i].name}</td>
      <td>
        <button class="  ${action}">${status}</button>
      </td>
      <td>
        <div class="action_btn">
          <button class="action_edit" onclick="edit(${i})">
            <i class="fa-solid fa-pencil"></i>Edit
          </button>
          <button class="action_delete" onclick="remove(${i})">
            <i class="fa-solid fa-trash"></i>
            Delete
          </button>
        </div>
      </td>
    </tr>
      `;
    }
  }
  list_item.innerHTML = searchItem;
};

handle.onchange = function () {
  let todoList = JSON.parse(localStorage.getItem("todos"));
  var sortAZ = "";
  var sortZA = "";
  let arrayAZ = todoList.filter((item, index) => {
    return item.status === true;
  });
  let arrayZA = todoList.filter((item, index) => {
    return item.status === false;
  });

  if (handle.value === "true") {
    for (let i = 0; i < arrayAZ.length; i++) {
      if ((status = arrayAZ[i].status === true ? "Active" : "Hide"))
        if (
          (action =
            arrayAZ[i].status === true ? "action_active" : "action_hide")
        )
          sortAZ += `
        <tr>
        <th scope="row">${i + 1}</th>
        <td>${arrayAZ[i].name}</td>
        <td>
          <button class="  ${action}">${status}</button>
        </td>
        <td>
          <div class="action_btn">
            <button class="action_edit" onclick="edit(${i})">
              <i class="fa-solid fa-pencil"></i>Edit
            </button>
            <button class="action_delete" onclick="remove(${i})">
              <i class="fa-solid fa-trash"></i>
              Delete
            </button>
          </div>
        </td>
      </tr>
        `;
    }
    list_item.innerHTML = sortAZ;
  } else {
    for (let i = 0; i < arrayZA.length; i++) {
      if ((status = arrayZA[i].status === true ? "Active" : "Hide"))
        if (
          (action =
            arrayZA[i].status === true ? "action_active" : "action_hide")
        )
          sortZA += `
        <tr>
        <th scope="row">${i + 1}</th>
        <td>${arrayZA[i].name}</td>
        <td>
          <button class="  ${action}">${status}</button>
        </td>
        <td>
          <div class="action_btn">
            <button class="action_edit" onclick="edit(${i})">
              <i class="fa-solid fa-pencil"></i>Edit
            </button>
            <button class="action_delete" onclick="remove(${i})">
              <i class="fa-solid fa-trash"></i>
              Delete
            </button>
          </div>
        </td>
      </tr>
        `;
    }
    list_item.innerHTML = sortZA;
  }
};

anpha.onchange = function () {
  var anphaAZ = "";
  var anphaZA = "";
  let todoList = JSON.parse(localStorage.getItem("todos"));
  if (anpha.value == 1) {
    todoList = todoList.sort((a, b) => a.name.localeCompare(b.name));
    for (let i = 0; i < todoList.length; i++) {
      if ((status = todoList[i].status === true ? "Active" : "Hide"))
        if (
          (action =
            todoList[i].status === true ? "action_active" : "action_hide")
        )
          anphaAZ += `
  <tr>
    <th scope="row">${i + 1}</th>
    <td>${todoList[i].name}</td>
    <td>
      <button class="  ${action}">${status}</button>
    </td>
    <td>
      <div class="action_btn">
        <button class="action_edit" onclick="edit(${i})">
          <i class="fa-solid fa-pencil"></i>Edit
        </button>
        <button class="action_delete" onclick="remove(${i})">
          <i class="fa-solid fa-trash"></i>
          Delete
        </button>
      </div>
    </td>
  </tr>
`;
    }

    list_item.innerHTML = anphaAZ;
  } else {
    todoList = todoList.sort((a, b) => b.name.localeCompare(a.name));
    for (let i = 0; i < todoList.length; i++) {
      if ((status = todoList[i].status === true ? "Active" : "Hide"))
        if (
          (action =
            todoList[i].status === true ? "action_active" : "action_hide")
        )
          anphaZA += `
  <tr>
    <th scope="row">${i + 1}</th>
    <td>${todoList[i].name}</td>
    <td>
      <button class="  ${action}">${status}</button>
    </td>
    <td>
      <div class="action_btn">
        <button class="action_edit" onclick="edit(${i})">
          <i class="fa-solid fa-pencil"></i>Edit
        </button>
        <button class="action_delete" onclick="remove(${i})">
          <i class="fa-solid fa-trash"></i>
          Delete
        </button>
      </div>
    </td>
  </tr>
`;
    }
    list_item.innerHTML = anphaZA;
  }
};
