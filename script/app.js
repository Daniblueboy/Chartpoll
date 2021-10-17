"use strict"

let notificationItems = [{
    noticeImg:"./images/Mask Group (1).png",
    date: "June 30",
    tag: "#technology",
    notice:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed laborum vitae at quos aperiam, officiis omnis! Accusamus, id adipisci.",
    foot: "This Question was followed by",
    user: "Obi Smart @obismart",

},

{
    noticeImg:"./images/Mask Group (1).png",
    date: "June 30",
    tag: "#technology",
    notice:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed laborum vitae at quos aperiam, officiis omnis! Accusamus, id adipisci.",
    foot: "This Question was followed by",
    user: "Obi Smart @obismart",
},

{
    noticeImg:"./images/Mask Group (1).png",
    date: "June 30",
    tag: "#technology",
    notice:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed laborum vitae at quos aperiam, officiis omnis! Accusamus, id adipisci.",
    foot: "This Question was followed by",
    user: "Obi Smart @obismart",
},

{
    noticeImg:"./images/Mask Group (1).png",
    date: "June 30",
    tag: "#technology",
    notice:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed laborum vitae at quos aperiam, officiis omnis! Accusamus, id adipisci.",
    foot: "This Question was followed by",
    user: "Obi Smart @obismart",
},

{
    noticeImg:"./images/Mask Group (1).png",
    date: "June 30",
    tag: "#technology",
    notice:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed laborum vitae at quos aperiam, officiis omnis! Accusamus, id adipisci.",
    foot: "This Question was followed by",
    user: "Obi Smart @obismart",
    
},
{
    noticeImg:"./images/Mask Group (1).png",
    date: "June 30",
    tag: "#technology",
    notice:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed laborum vitae at quos aperiam, officiis omnis! Accusamus, id adipisci.",
    foot: "This Question was followed by",
    user: "Obi Smart @obismart",
},
{
    noticeImg:"./images/Mask Group (1).png",
    date: "June 30",
    tag: "#technology",
    notice:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed laborum vitae at quos aperiam, officiis omnis! Accusamus, id adipisci.",
    foot: "This Question was followed by",
    user: "Obi Smart @obismart",
},
{
    noticeImg:"./images/Mask Group (1).png",
    date: "June 30",
    tag: "#technology",
    notice:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed laborum vitae at quos aperiam, officiis omnis! Accusamus, id adipisci.",
    foot: "This Question was followed by",
    user: "Obi Smart @obismart",
},
{
    noticeImg:"./images/Mask Group (1).png",
    date: "June 30",
    tag: "#technology",
    notice:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed laborum vitae at quos aperiam, officiis omnis! Accusamus, id adipisci.",
    foot: "This Question was followed by",
    user: "Obi Smart @obismart",
    
},
{
    noticeImg:"./images/Mask Group (1).png",
    date: "June 30",
    tag: "#technology",
    notice:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed laborum vitae at quos aperiam, officiis omnis! Accusamus, id adipisci.",
    foot: "This Question was followed by",
    user: "Obi Smart @obismart",
},
{
    noticeImg:"./images/Mask Group (1).png",
    date: "June 30",
    tag: "#technology",
    notice:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed laborum vitae at quos aperiam, officiis omnis! Accusamus, id adipisci.",
    foot: "This Question was followed by",
    user: "Obi Smart @obismart",
},

{
    noticeImg:"./images/Mask Group (1).png",
    date: "June 30",
    tag: "#technology",
    notice:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed laborum vitae at quos aperiam, officiis omnis! Accusamus, id adipisci.",
    foot: "This Question was followed by",
    user: "Obi Smart @obismart",
    
}]



let  notification = document.getElementById("note");
let html = "";
notificationItems.forEach(i => {
    html += `
  <div class=" d-flex align-items-start border border-dark py-1 rounded">
  <div class="icon-square bg-light text-dark flex-shrink-0 me-3" id="note">
    <img src="${i.noticeImg}" alt="" width="35px">
  </div>
  <div>
    <p>${i.date}</p>
    <p>${i.tag}</p>
    <p>${i.notice}</p>
    <p>${i.foot}<span class=".feeds-btn-bg fw-bold mx-1">${i.user}</span></p>
  </div>
</div>
  
  `
  console.log(i)
  notification.innerHTML  = html
});

