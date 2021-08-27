"use strict";
let data = "https://pdnm20091998.github.io/FetchApi/db.json";

//PostApi

fetch(data)
    .then((response) => {
        return response.json(); // Js type
    })
    .then((data) => {
        // console.log(data);
        let html = data
            .map((e) => {
                return `<ul>
            <li>STT: ${e.id}</li>
            <li>Tên: ${e.name}</li>
            <li>Nhóm: ${e.group.groupId}</li>
            <li>Chức vụ: ${e.group.position}</li>
            </ul>`;
            })
            .join("");
        document.getElementById("container").innerHTML = html;
    })
    .catch((error) => {
        console.log("postApi error");
    })
    .finally(() => {
        console.log("done");
    });