const { test, expect} = require('@playwright/test')
endpoints = require('../../mappings/endpoints.json')
apiHeaders = require('../../mappings/api-headers.json')

test('Add a new comment', async ({request}) => {

    const response = await request.post(endpoints.post_Posts, {
        headers: {
            'Content-Type': apiHeaders.Content_Type,
            'Cookie' : apiHeaders.Cookie,
            'x-csrf-token' : apiHeaders.x_csrf_token
        },
        data: {
            channelId: "31457284",
            type: "POST",
            state: "PUBLISHED",
            layout: "POST",
            content: "<p>Test api 5</p>",
            contentType: "HTML",
            authorId: "46039041",
            attachments: [],
            mentionedIds: [],
            hashtags: [],
            channelIds: [
                "31457284"
            ]
        }
    });

    expect(response.status()).toBe(200);
    expect(await response.json()).toEqual(expect.objectContaining({
        "content": "<p>Test api 5</p>"
    }))
})