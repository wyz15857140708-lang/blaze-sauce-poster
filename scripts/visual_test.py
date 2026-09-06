from pathlib import Path
from playwright.sync_api import sync_playwright

OUT = Path('/tmp/blaze-poster-tests')
OUT.mkdir(exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    for name, width, height in [('desktop', 1440, 1000), ('mobile', 390, 844)]:
        page = browser.new_page(viewport={'width': width, 'height': height}, device_scale_factor=1)
        errors = []
        page.on('console', lambda msg: errors.append(f'console:{msg.type}:{msg.text}') if msg.type == 'error' else None)
        page.on('pageerror', lambda exc: errors.append(f'pageerror:{exc}'))
        page.goto('http://127.0.0.1:5173', wait_until='networkidle')
        dimensions = page.evaluate('''() => ({
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          scrollHeight: document.documentElement.scrollHeight,
          sections: document.querySelectorAll('section').length,
          bottles: document.querySelectorAll('.bottle').length
        })''')
        page.screenshot(path=str(OUT / f'{name}-top.png'), full_page=False)
        page.locator('#story').scroll_into_view_if_needed()
        page.wait_for_timeout(250)
        page.screenshot(path=str(OUT / f'{name}-story.png'), full_page=False)
        page.locator('#pairings').scroll_into_view_if_needed()
        page.wait_for_timeout(250)
        page.screenshot(path=str(OUT / f'{name}-pairing.png'), full_page=False)
        page.locator('#buy').scroll_into_view_if_needed()
        page.wait_for_timeout(250)
        page.screenshot(path=str(OUT / f'{name}-buy.png'), full_page=False)
        if name == 'desktop':
            motion = []
            journey_range = page.evaluate("document.querySelector('.bottle-journey').offsetHeight - innerHeight")
            for pct in [82, 86, 89, 92, 94, 96]:
                page.evaluate('(y) => scrollTo(0, y)', journey_range * pct / 100)
                page.wait_for_timeout(80)
                if pct >= 92:
                    page.screenshot(path=str(OUT / f'desktop-motion-{pct}.png'), full_page=False)
                motion.append(page.evaluate("""() => {
                  const b = document.querySelector('.journey-bottle').getBoundingClientRect()
                  return {x: Math.round(b.x), y: Math.round(b.y), transform: getComputedStyle(document.querySelector('.journey-bottle')).transform}
                }"""))
            print('bottle-motion', list(zip([82, 86, 89, 92, 94, 96], motion)))
        print(name, dimensions, 'errors=', errors)
        page.close()
    reduced = browser.new_page(viewport={'width': 800, 'height': 600}, reduced_motion='reduce')
    reduced.goto('http://127.0.0.1:5173', wait_until='networkidle')
    state = reduced.locator('.marquee__track').first.evaluate("el => getComputedStyle(el).animationPlayState")
    print('reduced-motion marquee=', state)
    reduced.close()
    browser.close()
