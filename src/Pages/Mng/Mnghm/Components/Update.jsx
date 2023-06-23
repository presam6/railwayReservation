import React, { useState } from 'react';

const Update = () => {
    const [ticketId, setTicketId] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the ticketId to the backend server
        fetch('http://localhost/railway_reservation/cancelProc.php', {
            method: 'POST',
            body: JSON.stringify({ ticketId }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the backend
                setMessage(data.message);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleChange = (e) => {
        setTicketId(e.target.value);
    };

    return (
        <div className="update section">
            <div className="sectionContainer container">
                <h2>Enter Ticket ID</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inputDiv flex">
                        <input
                            type="text"
                            placeholder="Enter Ticket ID"
                            value={ticketId}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="btn">
                            Cancel Booking
                        </button>
                    </div>
                </form>

                <div className="messageDiv">
                    {message && <span>{message}</span>}
                </div>
            </div>
        </div>
    );
};

export default Update;