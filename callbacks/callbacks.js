document.getElementById("fetchDataBtn").addEventListener("click", function() {
    simulateDelay(5000, function() {
        fetchDataFromAPI(function(data) {
            const postTitles = data.slice(0, 5).map(post => post.title).join(', ');
            document.getElementById("resultDiv").textContent = postTitles;
        });
    });
});

function simulateDelay(ms, callback) {
    setTimeout(callback, ms);
}

function fetchDataFromAPI(callback) {
    fetch("https://dummyjson.com/posts")
        .then(response => response.json())
        .then(data => callback(data.posts))
        .catch(error => {
            document.getElementById("resultDiv").textContent = "Failed";
        });
}
