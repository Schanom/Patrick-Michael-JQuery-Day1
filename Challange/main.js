for(i in groceries){
    $(".container").append(`
        <div id="storeItems${groceries[i].Id}">
                <p class="itemName">Item Name: ${groceries[i].Name}</p>
                <p class="itemsLeft">Items Left: ${groceries[i].Amount}</p>
                <p class="itemPrice">Price: ${groceries[i].PricePerItem}</p>
                <p class="itemPic">${groceries[i].Image}</p>
        </div>
    `);

    if(groceries[i].Amount <= 3){
        $("#storeItems" + groceries[i].Id).css("background-color", "red");
    } else if(groceries[i].Amount >= 3 && groceries[i].Amount <= 5) {
        $("#storeItems" + groceries[i].Id).css("background-color", "yellow");
    } else {
        $("#storeItems" + groceries[i].Id).css("background-color", "green");
    }
}