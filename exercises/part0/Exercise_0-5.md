# Exercise 0.5

> Create a diagram depicting the situation where the user goes to the [single page app](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#single-page-app) version of the notes app at <https://studies.cs.helsinki.fi/exampleapp/spa>.

```mermaid
sequenceDiagram
	participant browser
	participant server

	browser ->> server: HTTP GET /spa
	server -->> browser: HTML Code

	browser ->> server: HTTP get /main.css
	server -->> browser: main.css

	browser ->> server: HTTP GET /spa.js
	server -->> browser: spa.js

	note over browser: browser starts executing js-code <br> that requests JSON data from server

	browser ->> server: HTTP GET /data.json
	server -->> browser: [{ content: "..." }]
	note over browser: browser executes the event handler <br> that renders notes to display
```
