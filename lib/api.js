// Assorted functions to deal with the api


export async function getSectors() {
    const response = await get("https://syst-api.azurewebsites.net/sectors");
    if (response.status !== 200) {
        throw new Error(response.message);
    }
    return await response.json();
}

export async function postCV(cv) {
    const response = await post("https://syst-api.azurewebsites.net/cv", cv);
    const text = await response.text();
    if (response.status !== 200) {
        throw new Error(text || response.message);
    }
    return text;
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
