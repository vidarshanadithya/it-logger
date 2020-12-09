import React, { useState } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';

const AddTechModal = ({ addTech }) => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');

  const onSubmit = () => {
    if (firstname === '' || lastname === '') {
      M.toast({ html: 'Please enter the first and last name' });
    } else {
      addTech({
        firstname,
        lastname,
      });

      M.toast({ html: `${firstname} ${lastname} was added as a technician` });

      setfirstname('');
      setlastname('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstname'
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
            <label htmlFor='firstname' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastname'
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
            <label htmlFor='lastname' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'>
          Enter
        </a>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
