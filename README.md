# SvelteKit CB Example
Aims to provide a SvelteKit + CardBoard starter with cardboard.js

# What this repo already did (CB + SvelteKit Setup 🔥)
Step 1> Add cardboard.js

Step 2> Setup .env file like provided one 

Step 3> Setup auth file like in [auth.ts](./src/lib/server/auth.ts)

Step 4> Add Auth Routes like in [(auth)](./src/routes/(auth)/)

Step 5> Setup hooks to fetch user data [hooks](./src/hooks.server.ts)

Step 6 (optional)> If using typescript, configure app.d.ts to handle user data [types](./src/app.d.ts)

Step 7> Make the data available to frontend from backend in the [layout file](./src/routes/+layout.server.ts)

Step 8> Use the data on pages like on [page files](./src/routes/+page.svelte)

Step 9> Default session expires in 30 days, you can add a logout button too like in [app header](./src/routes/+layout.svelte)

Step 10> Enjoy 🤗