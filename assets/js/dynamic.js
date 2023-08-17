// Accessing elements in HTML and updating their content using JSON data
document.getElementById("category").textContent = jsonData.title;
document.getElementById("score").textContent = jsonData.score;
document.getElementById("icon").textContent = jsonData.icon;