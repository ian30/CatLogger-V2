document.addEventListener("DOMContentLoaded", function() {
    // Get references to UI elements
    var catImageCheckbox = document.getElementById("flexCheckIndeterminate");
    var catImage = document.getElementById("cat_logo");
    var editButtons = document.querySelectorAll(".btn-primary");
    var saveButtons = document.querySelectorAll(".modal-footer .btn-primary");

    // Handle cat image toggle
    catImageCheckbox.addEventListener("change", function() {
        if (catImageCheckbox.checked) {
            catImage.style.display = "inline";
        } else {
            catImage.style.display = "none";
        }
    });

    // Handle edit button click
    editButtons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            var catRow = button.parentElement.parentElement;
            var catDetails = catRow.querySelectorAll("td");
            document.getElementById("catAge").value = catDetails[2].textContent;
            document.getElementById("catBreed").value = catDetails[3].textContent;
            // Additional code for filling out the rest of the modal fields
        });
    });

    // Handle save button click
    saveButtons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            var catRow = editButtons[index].parentElement.parentElement;
            var catDetails = catRow.querySelectorAll("td");
            catDetails[2].textContent = document.getElementById("catAge").value;
            catDetails[3].textContent = document.getElementById("catBreed").value;
            // Additional code for saving the rest of the modal fields
        });
    });
});
