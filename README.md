# Movie Seat Booking

A simple, responsive web application that allows users to select movie seats, calculate the total cost, toggle between light and dark themes, and confirm their booking. User selections and preferences persist across sessions via `localStorage`.

## 🚀 Features

- **Interactive Seat Map**: Click on seats to select or deselect; occupied seats are disabled.
- **Dynamic Pricing**: Choose from multiple movies, each with its own ticket price; total cost updates in real time.
- **Theme Toggle**: Switch between light and dark modes; preference is saved between visits.
- **Persistent State**: Movie selection, seat choices, and theme preference are stored in the browser so they remain after page reloads.
- **Booking Confirmation**: “Process to Book” button redirects to a thank-you page with a booking summary and option to start over.

## 📁 File Structure

```
/ (project root)
├── index.html         # Main booking page
├── thankyou.html      # Confirmation page
├── style.css          # Shared styles (themes, layout, animations)
└── script.js          # JavaScript logic (UI interaction, storage)
```

## 🛠 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/movie-seat-booking.git
   cd movie-seat-booking
   ```

2. **Open in Browser**
   - Simply open `index.html` in your preferred browser.
   - No build tools or servers are required.

3. **Interact**
   - Select a movie and click on seats to choose your spots.
   - Watch the seat count and total price update instantly.
   - Toggle the theme using the button in the header.
   - Click **Process to Book** to see the confirmation page.

## 🔧 How It Works

- **Theme Management**: On load, the app reads `localStorage` for a saved theme and applies it. Toggling the button updates the class on the `<body>` and saves the new theme.
- **Seat & Movie Persistence**: Selected seat indices and movie choice (index and price) are stored in `localStorage` whenever the user interacts. On page load, these values are read back to restore the UI state.
- **Real-Time Calculations**: Each time seats or movie selection change, the script recalculates the number of selected seats and multiplies by the current ticket price, updating the displayed total.
- **Booking Flow**: The booking button triggers a simple client-side redirect to `thankyou.html`, where a thank-you message and a “Book Again” button are displayed.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for bug fixes, new features, or improvements.

1. Fork the repo
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m "Add some feature"`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

