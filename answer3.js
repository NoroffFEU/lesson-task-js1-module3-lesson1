async function getCatFacts() {
    const url = "https://api.noroff.dev/api/v1/cat-facts";
    const response = await fetch(url);
    const results = await response.json();
    console.log(results.length);
}

getCatFacts();
