# Random Quote Generator

A minimal and responsive web application that fetches random inspirational quotes from an external API. This dashboard offers built-in text-to-speech functionality alongside quick-copy features to deliver a seamless user experience.

---

## 🚀 Live Demo

Interact with the live application directly in your browser:
*   **Link:** <a href="[https://quote-generator-zeta-dusky.vercel.app/]" target="_blank" rel="noopener noreferrer">Click here to open in a new tab</a>

---

## 🛠️ Tech Stack

*   **Structure:** HTML5 (utilizing Font Awesome vector glyphs for user interaction elements)
*   **Styling:** CSS3 (Featuring custom linear gradient backdrops, flexbox layout containers, and smooth hover state transitions)
*   **Typography:** Poppins (Google Fonts)
*   **Logic Engine:** Vanilla JavaScript using modern `async/await` syntax and the Web Speech API
*   **Data Feed API:** [DummyJSON Quotes API](https://dummyjson.com/quotes/random)

---

## ✨ Key Features

*   **Dynamic API Fetching:** Pulls randomized quotes and authors asynchronously from an external endpoint at the press of a button.
*   **Visual Loading States:** Disables interaction buttons and changes button text indicators to "Loading..." while the application waits for data payloads to settle.
*   **Text-to-Speech Engine:** Uses native browser `speechSynthesis` instances to read both the generated phrase and the corresponding author out loud.
*   **Clipboard Integration:** Copies text directly to the user's system clipboard using the `navigator.clipboard` interface, offering direct visual verification by temporarily altering icon styles.
*   **Network Error Isolation:** Features proactive error catchment loops that fall back onto clear on-screen warnings if API fetch streams fail.

---

## 📂 File Structure

```text
├── index_6.html   # Component canvas, text wrapper containers, and button structures
├── style_6.css    # Central styling rules, responsive geometry filters, and color palettes
└── script_6.js    # Fetch pipelines, background event listeners, and voice synthesis routines
