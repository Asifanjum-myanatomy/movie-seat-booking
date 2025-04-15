// Elements
const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const bookBtn = document.getElementById('book-btn');

// --- Theme Initialization ---
const savedTheme = localStorage.getItem('theme') || 'dark';
body.classList.add(savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
  const newTheme = body.classList.contains('dark') ? 'light' : 'dark';
  body.classList.replace(
    body.classList.contains('dark') ? 'dark' : 'light',
    newTheme
  );
  themeToggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('theme', newTheme);
});

// Populate UI from localStorage
populateUI();

// Ticket price (from storage or default)
let ticketPrice = +localStorage.getItem('selectedMoviePrice') || +movieSelect.value;

// Save selected movie data
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // Save selected seats
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  // Update UI
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

  // Persist movie data
  setMovieData(movieSelect.selectedIndex, ticketPrice);
}

// Populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = +selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, ticketPrice);
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

// Book button event
bookBtn.addEventListener('click', () => {
  window.location.href = 'thankyou.html';
});

// Initial count and total setup
updateSelectedCount();
