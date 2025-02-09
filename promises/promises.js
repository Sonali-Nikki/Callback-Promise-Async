document.getElementById("fetchDataBtn").addEventListener("click", function() {
    document.getElementById("resultDiv").textContent = "Loading...";
    fetchDataUsingPromise()
        .then(data => {
            const postTitles = data.slice(0, 5).map(post => post.title).join(', ');
            document.getElementById("resultDiv").textContent = postTitles;
        })
        .catch(error => {
            document.getElementById("resultDiv").textContent = error;
        });
});

function fetchDataUsingPromise() {
    return new Promise((resolve, reject) => {
        fetch("(https://dummyjson.com/posts")
            .then(response => response.json())
            .then(data => resolve(data.posts))
            .catch(() => reject("Operation timed out"));
    });
}
