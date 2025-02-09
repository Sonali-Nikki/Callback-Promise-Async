document.getElementById("fetchDataBtn").addEventListener("click", async function() {
    document.getElementById("resultDiv").textContent = "Loading...";
    try {
        const data = await fetchDataUsingAsyncAwait();
        const postTitles = data.slice(0, 5).map(post => post.title).join(', ');
        document.getElementById("resultDiv").textContent = postTitles;
    } catch (error) {
        document.getElementById("resultDiv").textContent = error;
    }
});

async function fetchDataUsingAsyncAwait() {
    const response = await fetch("https://dummyjson.com/posts");
    if (!response.ok) {
        throw new Error("Operation timed out");
    }
    const data = await response.json();
    return data.posts;
}




document.getElementById("fetchDataBtn").addEventListener("click", async function() {
    document.getElementById("resultDiv").textContent = "Loading...";
    try {
        const data = await fetchDataUsingAsyncAwait();
        const postTitles = data.slice(0, 5).map(post => post.title).join(', ');
        document.getElementById("resultDiv").textContent = postTitles;
    } catch (error) {
        document.getElementById("resultDiv").textContent = error.message;
    }
});

async function fetchDataUsingAsyncAwait() {
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("Operation timed out.")), 5000));
    const fetchData = fetch("https://dummyjson.com/posts")
        .then(response => {
            if (!response.ok) {
                throw new Error("Operation timed out");
            }
            return response.json();
        })
        .then(data => data.posts);

    const data = await Promise.race([fetchData, timeout]);
    return data;
}
