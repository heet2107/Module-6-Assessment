
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

test('Title shows up when page loads', async () => {
    
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
});

test('Verfy clicking the Draw button displays the div with id = choices', async () => {
    const choise_container = await driver.findElement(By.id('choices'));
    const draw_button  = await driver.findElement(By.id('draw'));

    expect(draw_button.isDisplayed()).toBeTruthy();
    
    draw_button.click().then(async() => {
        await sleep(3000)
        expect(choise_container.isDisplayed()).toBeTruthy()
    })
});

test('Verfy choose 2 header', async () => {
    const choose_header = await driver.findElement(By.id('choose-header'));
    const draw_button  = await driver.findElement(By.id('draw'));

    expect(draw_button.isDisplayed()).toBeTruthy();
    
    draw_button.click().then(async() => {
        await sleep(3000)
        expect(choose_header.isDisplayed()).toBeTruthy()
        expect(choose_header.getText()).toEqual("Choose 2!")
    })
});



// test('Check that clicking the Draw button displays the div with id = “choices”', async () => {
//     const choise_container = await driver.findElement(By.id('choice'));
//     const second_card =  await driver.findElement(By.css('#choices > div:nth-child(2)'))
//     const forth_card =  await driver.findElement(By.css('#choices > div:nth-child(4)'))
//     const remove_first_selected_card =   await driver.findElement(By.css('#player-duo > div:nth-child(1) > button'))
//     const remove_secound_selected_card =   await driver.findElement(By.css('#player-duo > div:nth-child(2) > button'))
//     const duel_button  = await driver.findElement(By.id('duel'));

//     const draw = await driver.findElement(By.id('draw'))
//     const displayed = await draw.isDisplayed()
//     expect(displayed).toBe(true)
// })


// test('Verify DUEL button showing up  after user add two add to duo card', async () => {
//     const choise_container = await driver.findElement(By.id('choices'));
//     const second_card =  await driver.findElement(By.xpath('//*[@id="choices"]/div[1]'));
//     const forth_card =  await driver.findElement(By.css('#choices > div:nth-child(4)'))
//     const duel_button  = await driver.findElement(By.id('duel'));
//     const draw_button  = await driver.findElement(By.id('draw'));
    
//        expect(draw_button.isDisplayed()).toBeTruthy();
//         draw_button.click().then(async()=>{
//         await sleep(3000)
//         expect(choise_container.isDisplayed()).toBeTruthy()
//         await sleep(3000)
//         expect(choise_container.isDisplayed()).toBeTruthy()
//         }).
//         then(async ()=> {
//             await sleep(8000)
//             expect(second_card.isDisplayed()).toBeTruthy()
//            second_card.click();
//           forth_card.click();
//           expect(duel_button.isEnabled).toBeTruthy()
//       })
       
//});


