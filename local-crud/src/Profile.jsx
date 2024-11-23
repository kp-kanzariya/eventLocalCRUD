import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [tickets, setTickets] = useState([]);
    const { em } = useParams()
    const [email, setEmail] = useState(em);
    // alert(email)
  // Fetch user and ticket data from localStorage
    const fetchUserData = () => {
      console.log(email)
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || {};
    const userTickets = storedTickets[email] || [];

    if (userTickets.length > 0) {
      // Fetch user details from the first ticket (assuming it's the same for all tickets)
      const { name, phone } = userTickets[0];
      setUserDetails({ name, email, phone });
    }
alert(userTickets)
    setTickets(userTickets);
  };

  // Fetch data when component loads or email changes
  useEffect(() => {
      if (email) {
        alert(email)
      fetchUserData();
    }
  }, [email]);

  return (
    <section className="profile-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            <div className="card">
              <div className="card-header bg-primary text-white text-center">
                <h3>User Profile</h3>
              </div>
              <div className="card-body">
                {userDetails ? (
                  <>
                    <h5 className="card-title">User Details</h5>
                    <p className="card-text">
                      <strong>Name:</strong> {userDetails.name}
                    </p>
                    <p className="card-text">
                      <strong>Email:</strong> {userDetails.email}
                    </p>
                    <p className="card-text">
                      <strong>Phone:</strong> {userDetails.phone}
                    </p>

                    {tickets.length > 0 ? (
                      <>
                        <h5 className="mt-4">Ticket Details</h5>
                        <ul className="list-group">
                          {tickets.map((ticket, index) => (
                            <li className="list-group-item" key={index}>
                              <p>
                                <strong>Ticket {index + 1}</strong>
                              </p>
                              <p>
                                <strong>Type:</strong> {ticket.ticketType}
                              </p>
                              <p>
                                <strong>Quantity:</strong>{" "}
                                {ticket.numberOfTickets}
                              </p>
                              <p>
                                <strong>Additional Request:</strong>{" "}
                                {ticket.message}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p className="mt-3 text-danger">
                        No tickets purchased yet.
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-danger">
                    No user details found. Please login to view profile.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
