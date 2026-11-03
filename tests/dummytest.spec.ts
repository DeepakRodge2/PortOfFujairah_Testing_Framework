import{test,expect}from '@playwright/test';

test.describe("test fujaira website",()=>
{
    test("test case 1",async({page})=>
    {
        await page.goto("http://localhost:5173/users")
    })
})
