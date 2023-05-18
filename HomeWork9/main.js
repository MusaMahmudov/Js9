let labeldrag = document.getElementById("label-drag");
let labelchoose = document.getElementById("label-choose");
let form = document.getElementsByTagName("form")[0];
let fileInp = document.getElementById("file-upload");
let preview = document.getElementsByClassName("preview")[0];
let imgArr = [];

form.addEventListener("change", (event) => {
  event.preventDefault;

  for (let i = 0; i < fileInp.files.length; i++) {
    imgArr.push(fileInp.files[i]);
    let imgName = fileInp.files[i].name;
    let IndexDot = imgName.lastIndexOf(".") + 1;
    let ext = imgName.substring(IndexDot).toLowerCase();
    let format = fileInp.files[i].type;
    let IndexLine = format.lastIndexOf("/");
    let formatLeft = format.slice(0, IndexLine);
    let formatRight = format.slice(IndexLine + 1, format.length);

    if (ext === "png" || ext === "jpg" || ext === "jpeg") {
      let reader = new FileReader();
      reader.readAsDataURL(fileInp.files[i]);

      reader.addEventListener("load", () => {
        let img = new Image();
        img.src = reader.result;
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        row.innerHTML = ` 
              <div class="left">
                <img src="${img.src}" alt="asd" />
                <div class="heading">
                  <h1>${fileInp.files[i].name}</h1>
                  <p>${formatLeft} - ${
          fileInp.files[i].size
        } - ${formatRight.toUpperCase()} </p>
                </div>
              </div>
              <button >X</button>
           `;

        preview.appendChild(row);
      });
    } else {
      alert("wrong file type");
    }
  }
});
// function remove(size2) {
//   console.log(imgArr);
//   preview.innerHTML = "";
//   imgArr.map((item) => {
//     let format = item.type;
//     let IndexLine = format.lastIndexOf("/");
//     let formatLeft = format.slice(0, IndexLine);
//     let formatRight = format.slice(IndexLine + 1, format.length);
//     imgArr = imgArr.filter((item2) => item2.size !== size2);
//     let row = document.createElement("div");
//     row.setAttribute("class", "row");
//     row.innerHTML += `
//               <div class="left">
//                 <img src="${item.src}" alt="asd" />
//                 <div class="heading">
//                   <h1>${item.name}</h1>
//                   <p>${formatLeft} - ${
//       item.size
//     } - ${formatRight.toUpperCase()} </p>
//                 </div>
//               </div>
//               <button onclick="remove(${item.size})">X</button>
//            `;

//     preview.appendChild(row);
//   });
// }
