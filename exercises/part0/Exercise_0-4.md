# Exercise 0.4

> "Create a similar diagram depicting the situation where the user creates a new note on page <https://studies.cs.helsinki.fi/exampleapp/notes> by writing something into the text field and clicking the submit button."

I created this sequence diagram using [mermaid.js](http://mermaid-js.github.io). You can render the diagram in their [online playground](https://mermaid-js.github.io/mermaid-live-editor).

```mermaid
sequenceDiagram
	participant browser
	participant server

	note over browser: user submits form

	browser ->> server: HTTP POST /new_note
	server -->> browser: 302 Redirect /notes

	browser ->> server: HTTP GET /notes
	server -->> browser: HTML Code

	browser ->> server: HTTP get /main.css
	server -->> browser: main.css

	browser ->> server: HTTP GET /main.js
	server -->> browser: main.js

	note over browser: browser starts executing js-code <br> that requests JSON data from server

	browser ->> server: HTTP GET /data.json
	server -->> browser: [{ content: "..." }]
	note over browser: browser executes the event handler <br> that renders notes to display
```
