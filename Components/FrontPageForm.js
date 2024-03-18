import React, { useState } from 'react';
import Modal from './model';


const FrontPageForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, sex, password };
    sessionStorage.setItem('quizFormData', JSON.stringify(formData));
    onSubmit(formData);
    setShowPopup(false);
  };

  const closeForm = () => {
    setShowPopup(false);
  };

  return (
    <Modal   show={showPopup} >
      <h1 className="text-5xl mb-6 text-center" >Register Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white">
        <div className="mb-8">
          <label className="block text-2xl mb-2" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-6 py-3 rounded-lg border focus:outline-none focus:border-blue-500 text-xl"
            required
          />
        </div>
        <div className='mb-8'>
          <label className="block text-2xl mb-2" htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-6 py-3 rounded-lg border focus:outline-none focus:border-blue-500 text-xl"
            required
          />
        </div>

        <div className='mb-8'>
          <label className="block text-2xl mb-2" htmlFor="gender">Gender:</label>
          <select
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            className="w-full px-6 py-3 rounded-lg border focus:outline-none focus:border-blue-500 text-xl"
          >
            <option value="">Not specific</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <button type="submit" className="bg-green-600 w-full text-white px-6 py-3 rounded-lg text-xl">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default FrontPageForm;
