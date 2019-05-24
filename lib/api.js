export async function getSectors() {
    const response = await get("https://syst-api.azurewebsites.net/sectors");
    const sectors = await response.json();
    return sectors;
}

async function post(url, data) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    };
    return await fetch(url, options);
}

async function get(url, data) {
    const options = {
        method: "GET",
    };
    return await fetch(url, options);
}