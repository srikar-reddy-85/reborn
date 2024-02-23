import React, { useState } from 'react';
import './userForm.css';
import supabase from '../config/superbaseClient';

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        gender: 'male', // You can set a default value
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // You can do something with the form data, e.g., send it to a server or perform some actions.
    //     console.log(formData);
    // };
    const [confirmation, setConfirmation] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data, error } = await supabase
                .from('users')
                .insert([formData])
                .select();

            if (error) {
                console.error('Error inserting data:', error);
            } else {
                console.log('Data inserted successfully:', data);
                setConfirmation('Thanks for enrolling!');
                setFormData({
                    name: '',
                    email: '',
                    address: '',
                    gender: 'male',
                });
            }
        } catch (error) {
            console.error('Error inserting data:', error);
        }
    };


    const closeConfirmation = () => {
        setConfirmation(null);
    };


    return (
        <div className='form-container'>
            <div>
                <h2>ENROLL NOW</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Gender:</label>
                        <select name="gender" value={formData.gender} onChange={handleInputChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button className='button' type="submit">Submit</button>
                </form>
                {/* {confirmation && <p>{confirmation}</p>} */}
            </div>
            <div className='form-content'>
                <p> ENROLL NOW TO BEGIN YOUR JOURNEY WITH US</p>
                <p>At Healing Network, we are dedicated to providing you with the support you need to overcome psychological challenges and improve your mental well-being. Our team of experienced professionals is ready to guide you through your healing journey. By enrolling with us, you gain access to a range of services tailored to meet your unique needs
                    At Healing Network, we are dedicated to providing you with the support you need to overcome psychological challenges and improve your mental well-being. Our team of experienced professionals is ready to guide you through your healing journey. By enrolling with us, you gain access to a range of services tailored to meet your unique needs
                </p>
            </div>
            {confirmation && (
                <div className="confirmation-dialog">
                    <div className="confirmation-box">
                        <p className="confirmation-message">THANK YOU FOR ENROLLING</p>
                        <p className="confirmation-message">HOPE YOU ENJOY YOUR JOURNEY WITH US </p>
                        <button style={{ position: "relative", left: "35%" }} className='button' onClick={closeConfirmation}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserForm;
