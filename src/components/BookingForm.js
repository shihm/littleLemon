import React , { useState } from 'react';

function BookingForm(props) {
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Reservation submitted:', { time, guests, occasion });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" onChange={(event)=>props.setDate(event.target.value)} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(event) => setTime(event.target.value)}>
        {props.availableTimes.map((timeOption) => (
          <option key={timeOption}>{timeOption}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(event) => setGuests(parseInt(event.target.value, 10))} />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(event) => setOccasion(event.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Book Now" />
    </form>
  );
}

export default BookingForm;
