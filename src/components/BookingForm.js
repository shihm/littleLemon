import React , { useState } from 'react';

function BookingForm(props) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [submitDisabled, setDisabled] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitForm({ date,time, guests, occasion });
  };
  function dateChanged(event) {
    setDate(event.target.value);
    props.updateTimes(event.target.value);
    formCheck();
  }
  function timeChanged(event) {
    setTime(event.target.value);
    formCheck();
  }
  function guestsChanged(event) {
    setGuests(event.target.value);
    formCheck();
  }
  function occasionChanged(event) {
    setOccasion(event.target.value);
    formCheck();
  }
  function formCheck() {
    if (time && occasion && guests > 0) {
      setDisabled(false);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      aria-label="Booking Form"
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        onChange={(event) => dateChanged(event)}
        aria-label="Choose date"
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(event) => timeChanged(event)}
        aria-label="Choose time"
      >
        {props.availableTimes.map((timeOption) => (
          <option key={timeOption}>{timeOption}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(event) => guestsChanged(event)}
        aria-label="Number of guests"
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(event) => occasionChanged(event)}
        aria-label="Select occasion"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        type="submit"
        value="Book Now"
        disabled={submitDisabled}
        aria-label="Submit booking form"
      />
    </form>
  );
}

export default BookingForm;
