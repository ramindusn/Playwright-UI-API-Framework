const { test, expect} = require('@playwright/test')
endpoints = require('../../mappings/endpoints.json')
apiHeaders = require('../../mappings/api-headers.json')

test('Empty body - BAD Request ', async ({request}) => {

    const response = await request.post(endpoints.post_Posts, {
        headers: {
            'Content-Type': apiHeaders.Content_Type,
            'Cookie' : apiHeaders.Cookie,
            'x-csrf-token' : apiHeaders.x_csrf_token
        }
    });

    expect(response.status()).toBe(400);
})