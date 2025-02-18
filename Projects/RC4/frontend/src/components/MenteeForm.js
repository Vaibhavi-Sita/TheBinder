import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const MenteeForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    gender: '',
    age: '',
    program: '',
    maritalStatus: [],
    major: '',
    nationality: '',
    permissionForGroupChat: '',
    languagesSpoken: '',
    hobbiesInterests: '',
    weChat: '',
    instagram: '',
    facebook: '',
    street: '',
    street2: '',
    city: '',
    state: '',
    zipCode: '',
    cellPhone: '',
    homePhone: '',
    email: '',
    psuEmail: '',
    receiveGLMNotifications: '',
    hopeToGain: '',
    biggestConcern: '',
    mentorPreferenceAge: [],
    mentorPreferenceGender: [],
    commentsQuestions: '',
    initialHere: '',
    agreeToTerms: '',
  })
  const [errors, setErrors] = useState({})

  const RequiredAsterisk = () => <span style={{ color: 'red' }}>*</span>

  const validateForm = () => {
    const newErrors = {}
    // Updated mandatory fields
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.studentId.trim())
      newErrors.studentId = 'Student ID is required'
    if (!formData.program.trim()) newErrors.program = 'Program is required'
    if (!formData.major.trim()) newErrors.major = 'Major is required'
    if (!formData.nationality.trim())
      newErrors.nationality = 'Nationality is required'
    if (!formData.permissionForGroupChat)
      newErrors.permissionForGroupChat = 'This field is required'
    if (!formData.languagesSpoken.trim())
      newErrors.languagesSpoken = 'Languages spoken is required'
    if (!formData.hobbiesInterests.trim())
      newErrors.hobbiesInterests = 'Hobbies/Interests are required'
    if (!formData.cellPhone.trim())
      newErrors.cellPhone = 'Cell phone is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.psuEmail.trim()) newErrors.psuEmail = 'PSU email is required'
    if (!formData.receiveGLMNotifications)
      newErrors.receiveGLMNotifications = 'This field is required'
    if (!formData.hopeToGain.trim())
      newErrors.hopeToGain = 'This field is required'
    if (!formData.biggestConcern.trim())
      newErrors.biggestConcern = 'This field is required'
    if (!formData.initialHere.trim())
      newErrors.initialHere = 'Initial is required'
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = 'You must agree to the terms'

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setErrors((prev) => ({ ...prev, [name]: '' }))

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }))
    } else if (type === 'radio') {
      setFormData({ ...formData, [name]: value })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    try {
      await axios.post('http://localhost:8080/api/mentees', formData)
      alert('Mentee application submitted successfully!')
      navigate('/')
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h1 style={styles.heading}>Mentee Application</h1>

      {/* Name */}
      <label style={styles.label}>
        Name: <RequiredAsterisk />
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.name && <div style={styles.error}>{errors.name}</div>}
      </label>

      {/* Student ID */}
      <label style={styles.label}>
        Student ID: <RequiredAsterisk />
        <input
          type='text'
          name='studentId'
          value={formData.studentId}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.studentId && <div style={styles.error}>{errors.studentId}</div>}
      </label>

      {/* Gender */}
      <label style={styles.label}>
        Gender:
        <select
          name='gender'
          value={formData.gender}
          onChange={handleChange}
          style={styles.select}
        >
          <option value=''>- None -</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
      </label>

      {/* Age */}
      <label style={styles.label}>
        Age:
        <select
          name='age'
          value={formData.age}
          onChange={handleChange}
          style={styles.select}
        >
          <option value=''>- None -</option>
          <option value='17-23'>17-23</option>
          <option value='24-up'>24-up</option>
        </select>
      </label>

      {/* Program */}
      <label style={styles.label}>
        Program:
        <select
          name='program'
          value={formData.program}
          onChange={handleChange}
          style={styles.select}
        >
          <option value=''>- None -</option>
          <option value='Undergraduate'>Undergraduate</option>
          <option value='Masters'>Masters</option>
          <option value='Doctoral'>Doctoral</option>
        </select>
      </label>

      {/* Marital Status */}
      <fieldset style={styles.fieldset}>
        <legend>Marital Status:</legend>
        {['Single', 'Married', 'Have Kids'].map((status) => (
          <label key={status} style={styles.checkboxLabel}>
            <input
              type='checkbox'
              name='maritalStatus'
              value={status}
              checked={formData.maritalStatus.includes(status)}
              onChange={handleChange}
            />
            {status}
          </label>
        ))}
      </fieldset>

      {/* Major */}
      <label style={styles.label}>
        Major: <RequiredAsterisk />
        <input
          type='text'
          name='major'
          value={formData.major}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.major && <div style={styles.error}>{errors.major}</div>}
      </label>

      {/* Nationality */}
      <label style={styles.label}>
        Nationality: <RequiredAsterisk />
        <input
          type='text'
          name='nationality'
          value={formData.nationality}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.nationality && (
          <div style={styles.error}>{errors.nationality}</div>
        )}
      </label>

      {/* Group Chat Permission */}
      <fieldset style={styles.fieldset}>
        <legend>
          Do we have your permission to include your phone number in a group
          chat? <RequiredAsterisk />
        </legend>
        {['Yes', 'No'].map((option) => (
          <label key={option} style={styles.radioLabel}>
            <input
              type='radio'
              name='permissionForGroupChat'
              value={option}
              checked={formData.permissionForGroupChat === option}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
        {errors.permissionForGroupChat && (
          <div style={styles.error}>{errors.permissionForGroupChat}</div>
        )}
      </fieldset>

      {/* Languages Spoken */}
      <label style={styles.label}>
        Languages Spoken: <RequiredAsterisk />
        <input
          type='text'
          name='languagesSpoken'
          value={formData.languagesSpoken}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.languagesSpoken && (
          <div style={styles.error}>{errors.languagesSpoken}</div>
        )}
      </label>

      {/* Hobbies/Interests */}
      <label style={styles.label}>
        Hobbies/Interests:
        <input
          type='text'
          name='hobbiesInterests'
          value={formData.hobbiesInterests}
          onChange={handleChange}
          style={styles.input}
        />
      </label>

      {/* Social Media */}
      <label style={styles.label}>
        WeChat:
        <input
          type='text'
          name='weChat'
          value={formData.weChat}
          onChange={handleChange}
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Instagram:
        <input
          type='text'
          name='instagram'
          value={formData.instagram}
          onChange={handleChange}
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Facebook:
        <input
          type='text'
          name='facebook'
          value={formData.facebook}
          onChange={handleChange}
          style={styles.input}
        />
      </label>

      {/* Address */}
      <label style={styles.label}>
        Street:
        <input
          type='text'
          name='street'
          value={formData.street}
          onChange={handleChange}
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Street 2:
        <input
          type='text'
          name='street2'
          value={formData.street2}
          onChange={handleChange}
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        City:
        <input
          type='text'
          name='city'
          value={formData.city}
          onChange={handleChange}
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        State:
        <select
          name='state'
          value={formData.state}
          onChange={handleChange}
          style={styles.select}
        >
          <option value=''>- None -</option>
          <option value='AL'>Alabama</option>
          {/* Add all other states */}
        </select>
      </label>
      <label style={styles.label}>
        Zip Code:
        <input
          type='text'
          name='zipCode'
          value={formData.zipCode}
          onChange={handleChange}
          style={styles.input}
        />
      </label>

      {/* Contact Information */}
      <label style={styles.label}>
        Cell Phone: <RequiredAsterisk />
        <input
          type='text'
          name='cellPhone'
          value={formData.cellPhone}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.cellPhone && <div style={styles.error}>{errors.cellPhone}</div>}
      </label>
      <label style={styles.label}>
        Home Phone:
        <input
          type='text'
          name='homePhone'
          value={formData.homePhone}
          onChange={handleChange}
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Email: <RequiredAsterisk />
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.email && <div style={styles.error}>{errors.email}</div>}
      </label>
      <label style={styles.label}>
        PSU Email: <RequiredAsterisk />
        <input
          type='email'
          name='psuEmail'
          value={formData.psuEmail}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.psuEmail && <div style={styles.error}>{errors.psuEmail}</div>}
      </label>

      {/* GLM Notifications */}
      <fieldset style={styles.fieldset}>
        <legend>
          Do you agree to receive GLM notifications on your phone?{' '}
          <RequiredAsterisk />
        </legend>
        {['Yes', 'No'].map((option) => (
          <label key={option} style={styles.radioLabel}>
            <input
              type='radio'
              name='receiveGLMNotifications'
              value={option}
              checked={formData.receiveGLMNotifications === option}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
        {errors.receiveGLMNotifications && (
          <div style={styles.error}>{errors.receiveGLMNotifications}</div>
        )}
      </fieldset>

      {/* Hope to Gain */}
      <label style={styles.label}>
        What do you hope to gain participating in this program?{' '}
        <RequiredAsterisk />
        <textarea
          name='hopeToGain'
          value={formData.hopeToGain}
          onChange={handleChange}
          style={styles.textarea}
        />
        {errors.hopeToGain && (
          <div style={styles.error}>{errors.hopeToGain}</div>
        )}
      </label>

      {/* Biggest Concern */}
      <label style={styles.label}>
        What is your biggest concern about studying at PSH or in the U.S. in
        general? <RequiredAsterisk />
        <textarea
          name='biggestConcern'
          value={formData.biggestConcern}
          onChange={handleChange}
          style={styles.textarea}
        />
        {errors.biggestConcern && (
          <div style={styles.error}>{errors.biggestConcern}</div>
        )}
      </label>

      {/* Mentor Preference */}
      <fieldset style={styles.fieldset}>
        <legend>Would you prefer to be matched with a mentor of:</legend>
        <div>
          <h4>Age:</h4>
          {['18-23', '24-up'].map((age) => (
            <label key={age} style={styles.checkboxLabel}>
              <input
                type='checkbox'
                name='mentorPreferenceAge'
                value={age}
                checked={formData.mentorPreferenceAge.includes(age)}
                onChange={handleChange}
              />
              {age}
            </label>
          ))}
        </div>
        <div>
          <h4>Gender:</h4>
          {['Male', 'Female'].map((gender) => (
            <label key={gender} style={styles.checkboxLabel}>
              <input
                type='checkbox'
                name='mentorPreferenceGender'
                value={gender}
                checked={formData.mentorPreferenceGender.includes(gender)}
                onChange={handleChange}
              />
              {gender}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Comments/Questions */}
      <label style={styles.label}>
        Comments or Questions:
        <textarea
          name='commentsQuestions'
          value={formData.commentsQuestions}
          onChange={handleChange}
          style={styles.textarea}
        />
      </label>

      {/* Initial Here */}
      <label style={styles.label}>
        Initial Here: <RequiredAsterisk />
        <input
          type='text'
          name='initialHere'
          value={formData.initialHere}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.initialHere && (
          <div style={styles.error}>{errors.initialHere}</div>
        )}
      </label>

      {/* Agreement */}
      <fieldset style={styles.fieldset}>
        <legend>
          Agreement <RequiredAsterisk />
        </legend>
        <label style={styles.radioLabel}>
          <input
            type='radio'
            name='agreeToTerms'
            value='Yes'
            checked={formData.agreeToTerms === 'Yes'}
            onChange={handleChange}
          />
          I agree to the terms and conditions stated above
        </label>
        {errors.agreeToTerms && (
          <div style={styles.error}>{errors.agreeToTerms}</div>
        )}
      </fieldset>

      <button type='submit' style={styles.button}>
        Submit
      </button>
    </form>
  )
}

const styles = {
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  select: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '100px',
  },
  fieldset: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    marginBottom: '15px',
  },
  checkboxLabel: {
    display: 'block',
    margin: '8px 0',
  },
  radioLabel: {
    display: 'block',
    margin: '8px 0',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  },
  error: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: '4px',
  },
}

export default MenteeForm
