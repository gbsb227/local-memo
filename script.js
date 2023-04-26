let flag = 0;

let allMemo = JSON.parse(localStorage.getItem("allMemo"));
allMemo = allMemo ?? [];
render();

const memobtn = document.querySelector("#memoButton");
memobtn.addEventListener("click", memo);

const newbtn = document.querySelector(".up");
newbtn.addEventListener("click", sortNew);

const oldbtn = document.querySelector(".down");
oldbtn.addEventListener("click", sortOld);

function memo() {
  console.log("memo start");
  const title = document.getElementById("memoTitle").value;
  const content = document.getElementById("memoContent").value;

  const date = new Date().toLocaleString();

  allMemo.push({ title, content, date, len: allMemo.length });

  localStorage.setItem("allMemo", JSON.stringify(allMemo));

  console.log(allMemo);
  render();
}

function render() {
  console.log("render start");
  if (flag === 0) {
    sortNew();
  } else {
    sortOld();
  }
}

function sortNew() {
  console.log("sortnew start");
  const display = document.querySelector(".show");
  display.innerHTML = "";

  for (let i = allMemo.length; i > 0; i--) {
    console.log(allMemo);
    console.log(allMemo[i - 1]);
    const wrapper = document.createElement("section");
    wrapper.className = "contentWrapper";
    display.append(wrapper);

    const title = document.createElement("h3");
    title.className = "contentTitle";
    title.textContent = allMemo[i - 1].title;

    const date = document.createElement("p");
    date.className = "date";
    date.textContent = allMemo[i - 1].date;

    const content = document.createElement("textarea");
    content.className = "content";
    content.id = allMemo[i - 1];
    content.textContent = allMemo[i - 1].content;

    const del = document.createElement("button");
    del.className = "contentDelete";
    del.textContent = "삭제";

    const mod = document.createElement("button");
    mod.className = "contentModify";
    mod.textContent = "수정";

    wrapper.appendChild(title);
    wrapper.appendChild(date);
    wrapper.appendChild(content);
    wrapper.appendChild(del);
    wrapper.appendChild(mod);

    del.setAttribute("id", allMemo[i - 1].len);
    del.setAttribute("onclick", "remove()");

    mod.setAttribute("id", allMemo[i - 1].len);
    mod.setAttribute("onclick", "modify()");

    flag = 0;
  }
}

function sortOld() {
  console.log("sortold start");
  const display = document.querySelector(".show");
  display.innerHTML = "";

  for (const item of allMemo) {
    const wrapper = document.createElement("section");
    wrapper.className = "contentWrapper";
    display.append(wrapper);

    const title = document.createElement("h3");
    title.className = "contentTitle";
    title.textContent = item.title;

    const date = document.createElement("p");
    date.className = "date";
    date.textContent = item.date;

    const content = document.createElement("textarea");
    content.className = "content";
    content.id = item.len;
    content.textContent = item.content;

    const del = document.createElement("button");
    del.className = "contentDelete";
    del.textContent = "삭제";

    const mod = document.createElement("button");
    mod.className = "contentModify";
    mod.textContent = "수정";

    wrapper.appendChild(title);
    wrapper.appendChild(date);
    wrapper.appendChild(content);
    wrapper.appendChild(del);
    wrapper.appendChild(mod);

    del.setAttribute("id", item.len);
    del.setAttribute("onclick", "remove()");

    mod.setAttribute("id", item.len);
    mod.setAttribute("onclick", "modify()");
    flag = 1;
  }
}

function remove() {
  const idx = allMemo.find((item) => item.len == event.srcElement.id);
  if (idx) {
    allMemo.splice(
      allMemo.findIndex((item) => item.len == idx.len),
      1
    );
  }
  localStorage.setItem("allMemo", JSON.stringify(allMemo));
  render();
}

///
function modify() {
  console.log("modify start");
  // console.log(number);

  // const content = document.getElementById(number).value;

  const date = new Date().toLocaleString();

  // allMemo[number].title = title;
  // allMemo[number].content = content;
  // allMemo[number].date = date;
  // localStorage.setItem("allMemo", JSON.stringify(allMemo));
  // console.log(allMemo);

  alert("기능 추가중!");
  render();
}
