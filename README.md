# Project README

https://arttupirila.github.io/nettisivu/

## HTML (25%)

**Location: `index.html`**

- **Row 8:** Contains the title of the webpage.
- **Rows 12 & 27:** Use headers (`<h1>`, `<h2>`) for section titles.
- **Rows 17-18:** Utilizes `<blockquote>` for quotes and `<cite>` for authors, demonstrating semantic HTML.
- **Rows 22-26:** Implements a feedback form for user input.
- **Rows 28-38:** Includes a table to organize data.
- **Row 20:** Features media elements (images).
- **Row 21:** Links

## CSS (25%)

**Location: `style.css`**

- **General Styling:** CSS styles are used throughout the file.
- **Responsive Design:** Media queries included for adapting the layout on smaller screens (Rows 157-164).
- **IDs:** CSS styles target specific elements through IDs, found in rows 27, 47, 62, 67, 82, 109, 115, and 140.
- **Float Properties:** Used in layout adjustments (Rows 116, 141, and 155).
- **Flexbox:** Row 29 serves as a flex container for layout purposes.
- **Block Display:** Some elements utilize display properties to arrange items in a flexible manner.

## JavaScript Basics (25%)

**Location: `script.js`**

- **Row 168:** Alerts users when all main quotes have been exhausted.
- **Event Listeners:** Implemented with DOM manipulations starting from rows 70 and 185.
- **Arrays:** In rows 1, 14, 27, and 40.
- **Functions:** Defined starting from rows 52, 63, and 180.
- **Switch Loop:** Iterates through an array of quotes and authors, dynamically updating the HTML, starting from row 93.

## Asynchronous Operations (25%)

**Location: `script.js`**

- **Timers:** A clock is set up, beginning at row 52.
- **Fetch API:** Rows 187-199 utilize the Fetch API to retrieve additional quotes after the initial 10 hardcoded quotes.
- **Display of Asynchronous Data:** The retrieved quotes are displayed on the webpage (Row 39 in `index.html`).
- **Error Handling:** Implemented in row 197 to manage potential issues with the asynchronous calls.
