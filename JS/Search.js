window.onload = function(){
    document.getElementById("searchInput").addEventListener("input", function() {
        // Trim method deletes blank spaces at the beginning or at the end of the string
        var searchText = this.value.trim().toLowerCase();
        // items stores all the elements that are part of the class MusicPieceBlock
        var items = document.querySelectorAll(".MusicPieceBlock");
        items.forEach(function(item) {
            var itemText = item.textContent.toLowerCase();
            if (searchText === "") {
                item.style.display = "flex"; // Diplays every music piece if there's no input
            }else if (itemText.includes(searchText)) {
                item.style.display = "flex"; // Displays music pieces matching the input
            }else {
                item.style.display = "none"; 
            }
        });
    });
}