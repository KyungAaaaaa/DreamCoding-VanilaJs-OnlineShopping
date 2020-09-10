function loadItems(){
    return fetch(`data/data.json`).then(response=>response.json()).then(json=>json.items);
}

function createHtmlTag(item) {
    let li=document.createElement('li');
    let description=document.createElement('p');
    let img=document.createElement('img');
    description.innerText=`${item.color} / ${item.type}`;
    img.src=item.img;
    img.classList.add("itemImg")
    li.classList.add("item");
    description.classList.add("description");
    li.append(img);
    li.append(description);

    return li;
}

function displayItems(items) {

    const itemList=document.querySelector(".itemList");
    itemList.innerHTML="";
    for (let i=0;i<items.length;i++){
        itemList.appendChild(createHtmlTag(items[i]));
    }
}

function clickEvent(items){
    const btns=document.querySelector('.buttons');
    const logo=document.querySelector('.logo');
    logo.addEventListener('click',()=>displayItems(items));
    btns.addEventListener("click",function (e){
        const newItems=items.filter(item=>{
            if(item.type===e.target.id)return item;
            else if (item.color===e.target.id) return item;
        });
        displayItems(newItems);
    })
}


loadItems().then(items=>{displayItems(items);
    clickEvent(items);}
);