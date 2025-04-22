# CS 144 Project 1: Website Requirements and how I satisfied them.

1.  **Good web design hygiene (title, divs, CSS, paragraphs, index.html):**
    *   All pages include `<title>`, `<div>` elements are used for layout (`page-container`, `header-controls`, `image-row`, `item`), CSS provides a cohesive theme (fonts, colors via variables), paragraphs are used, and the main page is `index.html`.

2.  **HTML5 semantic tags:**
    *   Uses `<header>`, `<nav>`, `<main>`, and `<section>` appropriately. `<div>` used for non-semantic containers.

3.  **Responsiveness:**
    *   2 Media queries 
        *   `@media (max-width: 768px)` for ipads and smaller computers
        *   `@media (max-width: 480px)` for phones

4.  **At least two `<meta>` tags:**
    *   Includes `<meta charset="UTF-8">` and `<meta name="viewport" content="width=device-width, initial-scale=1.0">` in all HTML files.

5.  **Favicon:**
    *   `favicon.ico` is linked correctly (`<link rel="icon" ...>`) in all HTML files. 

6.  **Heading (`h1`):**
    *   My heading is a custom different font (from google fonts), and italicized. 
        *   font family (`Courier Prime`)
        *   `font-style: italic;` 

7.  **Nested List & Marker:**
    *   `projects.html` uses a nested list (`ol.projects-list > li.project-item > ul.project-details`). 
    *   I made all my markers into heart bullet points.

8.  **Light and dark mode (CSS variables):**
    *   I implemented using CSS variables (`:root` and `body.light-mode`) and a JavaScript toggle. Applies across all pages.

9.  **Advanced typography:**
    *   Not done yet

10. **Basic JavaScript functionality:**
    *   I implemented a theme toggle button. You can choose between a light and dark theme, and it defaults with dark.

11. **Standard size image:**
    *   I have responsive images.

12. **Advanced visual styling (2+ techniques):**
    *   I used `linear-gradient` for my backgrounds and `box-shadow` for depth on multiple elements (ex. nav, items, images)

13. **CSS Grid Layout:**
    *   "Relevant Coursework" section under `index.html` 

14. **CSS Flexbox Layout:**
    *   Flexbox is used for `.image-row`, `nav ul`, and `.header-controls` (in media query). This demonstrates multiple properties and adapts layout across different screen sizes.

15. **Element display property contradiction:**
    *  Navigation links (`nav ul li a`, which are inline by default) are set to `display: block;` within the `@media (max-width: 480px)` rule in `style.css` to improve their layout and clickable area in the stacked mobile view.

16. **Fancy selectors:**
    *   Used adjacent sibling selector (`+`) to style `h5` following `h4` within `.item` (`.item h4 + h5 { margin-top: 0.2rem; }`).
    *   Used attribute substring selector (`*=`) to add a border to images of Greycat (`img[alt*="Greycat"] { border: ...; }`).

17. **Form:**
    *  I have a contact form section in the bottom of `index.html`.
        *   3 types: name, email, message 
        *   Uses HTML5 `required` attribute for client-side validation 
        *   Uses `<fieldset>` and `<legend>` 

18. **Advanced inline text styling:**
    *   Meow

19. **Links:**
    *   Navigation includes 3 links. 
    *   I implemented style changes on `:hover` and `:visited` (using the CSS color variables)

20. **No CSS Conflicts:**
    *  Hi

21. **Validation:**
    *   Hi