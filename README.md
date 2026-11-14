# Tower Plaza: Blood Red and White Resort Booking Site

A static, blood red and white resort booking website for Sri Lanka (concept design).
Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Files
- `index.html` page structure
- `style.css` red theme and animations
- `app.js` loader, slider, booking flow, simulated payment, bookings, concierge

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server 8000` and visit http://localhost:8000

## Deploy
Push to GitHub, then Settings > Pages > Deploy from branch > `main` > `/ (root)`.

## Notes
- Payment is simulated (test card 4242 4242 4242 4242). No money moves.
- Bookings are stored in the visitor's browser (localStorage).
- For real payments add a backend and a provider such as PayHere or Stripe.
- Sample rates, sample reviews and placeholder contact details. Replace before going live.
