import asyncio
import playwright.async_api as async_api

async def main():
    from playwright.async_api import async_playwright
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=["--no-sandbox"])
        page = await browser.new_page(viewport={"width": 1280, "height": 900})
        try:
            await page.goto("http://localhost:3000/v2", wait_until="networkidle", timeout=30000)
            await page.wait_for_timeout(2000)
            await page.screenshot(path="/home/bapuksz/.hermes/cache/documents/native-inputs/img_v2_full.png", full_page=True)
            # Get the result card element
            card = await page.query_selector('.bg-gradient-to-br.from-rose-500.to-rose-600')
            if card:
                box = await card.bounding_box()
                print("Result card visible:", box)
            else:
                print("Result card not found by gradient class")
        except Exception as e:
            print("Error:", repr(e))
        finally:
            await browser.close()

asyncio.run(main())
