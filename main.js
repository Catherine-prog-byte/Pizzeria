menu_list_array = ["Chicken Tandoori Pizza " , "Veg Supreme Pizza" , "Paneer Tikkia Pizza" , "Deluxe Veggie Pizza" , "Veg Supreme Pizza"]
function getmenu() {
    var htmldata;
    htmldata="<ol class= 'menulist'>"
    menu_list_array.sort();
 for (var i=0; (menu_list_array.length;i++) { 
      htmldata=htmldata+"<li>" + menu_list_array[i] + "</li>";
 }
 htmldata=htmldata+"</ol>"
 document.getElementById("display_menu").innerHTML = htmldata;
}

function addItem() {
    var htmldata;
    var item=document.getElementById("addItem").value
    menu_list_array.sort();
    htmldata="<section class='cards'>";
for (var i=0; i <menu_list_array.length;i++) {
    htmldata= htmldata+'<div class="card>'+'<img src="pizzaImg.png">style="width: 100px; height:80px;" menu_list_array[i] + </div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top() {
    var item=documentgetElementById("addItem").value;
    menu_list_array.push(item);
    addItem();
}