export async function fetchConfig() {
    return await fetch('/config').then(response => response.json());
}

export async function fetchData() {
    return await fetch('/data').then(response => response.json());
}