const { test, expect} = require('@playwright/test')
const {generateRandomNumber,getRandomNumber} = require('../../support/random-data-helper')
login = require('../../mappings/locators/login.json')
home = require('../../mappings/locators/home.json')
channels = require('../../mappings/locators/channels.json')
data = require('../../mappings/data/data.json')
pageRouting = require('../../mappings/page-routing.json')

test.beforeEach(async ({ page }) => {
    //navigate to baseURL
    await page.goto('/');

    //sign in with Google
    await page.click(login.signInWithGoogleButton);
    await page.fill(login.usernameField,data.username);
    await page.click(login.identifierNextButton)
    await page.fill(login.passwordField,data.password);
    await page.click(login.passwordNextButton)
    await page.waitForURL(pageRouting.home)
    await expect(page.locator(home.myStreamLabel)).toHaveText(data.myStreamLabelText);
});

test('As a user I want to add a random reaction from the default reactions list to a post', async ({page}) => {
    //Search channel
    await page.click(home.channelsButton);
    await page.fill(home.channelSearchInput,"Interview Channel");
    await page.click(home.channelsListData);

    //View a random post
    await page.locator(channels.posts).first().waitFor();
    const postCount = await page.locator(channels.posts).count();
    console.log("Post Count - "+postCount);
    let randomNumber = generateRandomNumber(postCount);
    console.log("Random number - "+randomNumber)
    const postComment = await page.locator(channels.postComments).nth(randomNumber).textContent();
    console.log("Post comment - "+postComment);
    await page.locator(channels.posts).nth(randomNumber).click();
    await page.click(channels.viewPost);
    await expect(page.locator(channels.postComments)).toHaveText(postComment);

    //Select a random reaction to the post
    await page.hover(channels.reactionButton);
    let randomNumberForReaction = generateRandomNumber(6);
    console.log("random - "+randomNumberForReaction);
    await page.locator(channels.reactions).nth(randomNumberForReaction).click();

});

test('As a user I want to share a post as announcement with expiry period', async ({page}) => {
    //Search channel
    await page.click(home.channelsButton);
    await page.fill(home.channelSearchInput,"Interview Channel");
    await page.click(home.channelsListData);

    await page.click(channels.newPostEditor);
    const randomPost = "New Post "+getRandomNumber();
    await page.keyboard.type(randomPost);
    await page.click(channels.postButton)

    await page.click(channels.newPostActionMenu);
    await page.click(channels.editPost);
    await page.click(channels.shareOptions);
    await page.click(channels.shareAsAnnouncement);
    await page.click(channels.announcementExpiry);
    await page.locator('text=1 week').click();
    await page.click(channels.shareButton);
    await page.click(channels.confirmButton);

    await page.pause();
});