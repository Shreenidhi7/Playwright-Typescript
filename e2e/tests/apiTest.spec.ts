import { test, expect, request } from "@playwright/test"

test('API Test Intro', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200)
    //console.log(await response.json())
    const response_json = await response.json();
    expect(response_json.data.id).toBe(2);
})

test.only('POST API Request Test', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "morpheus",
            "job": "leader"
        },
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1"
        },
        timeout: 10000
    })

    expect(response.status()).toBe(201)
    const response_json = await response.json()
    console.log(response_json)
    expect(response_json.name).toBe('morpheus')
})

test('fetch records', async () => {
    const api = await request.newContext();
    const response = await api.get('https://reqres.in/api/collections/orders/records', {
        headers: { 'x-api-key': process.env.REQRES_API_KEY || 'YOUR_API_KEY' },
    });
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    console.log(data);
});
