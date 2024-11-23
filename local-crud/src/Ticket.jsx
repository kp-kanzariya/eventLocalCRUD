import React, { useState, useEffect } from "react";

function Ticket() {
  const [tickets, setTickets] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [message, setMessage] = useState('');

  // Function to fetch tickets from localStorage for a user based on email
  const fetchTickets = () => {
    const storedTickets = JSON.parse(localStorage.getItem('tickets')) || {};
    const userTickets = storedTickets[email] || [];
    setTickets(userTickets);
  };

  // Function to save the ticket information to localStorage
  const saveTicket = () => {
    const storedTickets = JSON.parse(localStorage.getItem('tickets')) || {};

    // Create a new ticket object
    const newTicket = {
      name: username,
      phone,
      ticketType,
      numberOfTickets,
      message,
    };

    // If the email does not exist in localStorage, initialize the array
    if (!storedTickets[email]) {
      storedTickets[email] = [];
    }

    // Add the new ticket to the array for this email
    storedTickets[email].push(newTicket);

    // Save the updated ticket data back to localStorage
    localStorage.setItem('tickets', JSON.stringify(storedTickets));

    // Fetch the updated list of tickets
    fetchTickets();
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    saveTicket(); // Save the new ticket
    alert("Ticket booked successfully!");
  };

  // Fetch the user's tickets when their email changes
  useEffect(() => {
    if (email) {
      fetchTickets();
    }
  }, [email]);

  return (
    <>
      <section className="ticket-section section-padding">
        <div className="section-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-10 mx-auto">
              <form
                className="custom-form ticket-form mb-5 mb-lg-0"
                onSubmit={handleSubmit}
                role="form"
              >
                <h2 className="text-center mb-4">Get started here</h2>
                <div className="ticket-form-body">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <input
                        type="text"
                        name="ticket-form-name"
                        className="form-control"
                        placeholder="Full name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <input
                        type="email"
                        name="ticket-form-email"
                        className="form-control"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <input
                    type="tel"
                    className="form-control"
                    name="ticket-form-phone"
                    placeholder="Phone 7878787878"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    pattern="[0-9]{10}"
                    required
                  />
                  <h6>Choose Ticket Type</h6>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-check form-control">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="TicketType"
                          id="earlyBird"
                          value="Early bird $120"
                          onChange={(e) => setTicketType(e.target.value)}
                          required
                        />
                        <label className="form-check-label" htmlFor="earlyBird">
                          Early bird $120
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-check form-control">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="TicketType"
                          id="standard"
                          value="Standard $240"
                          onChange={(e) => setTicketType(e.target.value)}
                          required
                        />
                        <label className="form-check-label" htmlFor="standard">
                          Standard $240
                        </label>
                      </div>
                    </div>
                  </div>
                  <input
                    type="number"
                    name="ticket-form-number"
                    id="ticket-form-number"
                    className="form-control"
                    placeholder="Number of Tickets"
                    value={numberOfTickets}
                    onChange={(e) => setNumberOfTickets(e.target.value)}
                    min="1"
                    required
                  />
                  <textarea
                    name="ticket-form-message"
                    rows={3}
                    className="form-control"
                    placeholder="Additional Request"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <div className="col-lg-4 col-md-10 col-8 mx-auto">
                    <button type="submit" className="form-control">
                      Buy Ticket
                    </button>
                  </div>
                </div>
              </form>

              {/* Display the user's booked tickets */}
              {/* {tickets.length > 0 && (
                <div className="ticket-list">
                  <h3>{email}'s Booked Tickets:</h3>
                  <ul>
                    {tickets.map((ticket, index) => (
                      <li key={index}>
                        <strong>Name:</strong> {ticket.name} <br />
                        <strong>Ticket Type:</strong> {ticket.ticketType} <br />
                        <strong>Quantity:</strong> {ticket.numberOfTickets} <br />
                        <strong>Phone:</strong> {ticket.phone} <br />
                        <strong>Message:</strong> {ticket.message}
                      </li>
                    ))}
                  </ul>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ticket;
