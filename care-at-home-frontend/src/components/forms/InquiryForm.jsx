import React, { useState } from 'react';
import { validatePhone, validateRequired, validateStaffSelection } from '../../utils/validation/formValidators';
import { FormStatusMessage, FieldError } from '../common/FormFeedback';

const InquiryForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'select', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 1. Validation Logic
    const newErrors = {
      name: validateRequired(formData.name, "Name"),
      phone: validatePhone(formData.phone),
      service: validateStaffSelection(formData.service)
    };

    if (Object.values(newErrors).some(err => err !== "")) {
      setErrors(newErrors);
      setStatus({ type: 'error', message: 'Please correct the highlighted errors.' });
      setIsSubmitting(false);
      return;
    }

    // 2. Reliable Submission Simulation (Lead Capture)
    try {
      // Basic Spam Prevention: check for bot speed (optional)
      console.log("Form Submitted Successfully:", formData);
      
      // Feedback to User
      setStatus({ 
        type: 'success', 
        message: 'Thank you. Our care coordinator will call you shortly on ' + formData.phone 
      });
      setFormData({ name: '', phone: '', service: 'select', message: '' });
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try calling us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="card stack-md" onSubmit={handleSubmit} noValidate>
      <FormStatusMessage type={status.type} message={status.message} />
      
      <div className="form-group">
        <label className="text-small" style={{fontWeight: 600}}>Patient/Guardian Name</label>
        <input 
          type="text" name="name" value={formData.name} onChange={handleChange}
          className="btn-outline" style={{width: '100%', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', color: 'var(--clr-text-main)'}}
          placeholder="Enter full name"
        />
        <FieldError error={errors.name} />
      </div>

      <div className="form-group">
        <label className="text-small" style={{fontWeight: 600}}>Phone Number (For Callback)</label>
        <input 
          type="tel" name="phone" value={formData.phone} onChange={handleChange}
          className="btn-outline" style={{width: '100%', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', color: 'var(--clr-text-main)'}}
          placeholder="10-digit mobile number"
        />
        <FieldError error={errors.phone} />
      </div>

      <div className="form-group">
        <label className="text-small" style={{fontWeight: 600}}>Service Required</label>
        <select 
          name="service" value={formData.service} onChange={handleChange}
          className="btn-outline" style={{width: '100%', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', color: 'var(--clr-text-main)'}}
        >
          <option value="select">Select a service</option>
          <option value="Home Nursing">Home Nursing</option>
          <option value="Elderly Care">Elderly Care</option>
          <option value="ICU at Home">ICU at Home</option>
          <option value="Equipment Rental">Medical Equipment Rental</option>
        </select>
        <FieldError error={errors.service} />
      </div>

      <button 
        type="submit" 
        className="btn btn-primary" 
        disabled={isSubmitting}
        style={{width: '100%', opacity: isSubmitting ? 0.7 : 1}}
      >
        {isSubmitting ? 'Processing...' : 'Request a Callback'}
      </button>
    </form>
  );
};

export default InquiryForm;
