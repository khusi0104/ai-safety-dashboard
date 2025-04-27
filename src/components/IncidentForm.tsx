import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { AlertCircle, AlertTriangle, AlertOctagon, Send } from 'lucide-react';
import { Incident } from '../types/incident';

interface IncidentFormProps {
  onSubmit: (incident: Omit<Incident, 'id'>) => void;
}

const IncidentForm: React.FC<IncidentFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<"Low" | "Medium" | "High">("Low");
  const [errors, setErrors] = useState({
    title: '',
    description: ''
  });

  const validateForm = () => {
    const newErrors = {
      title: '',
      description: ''
    };
    
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    } else if (title.trim().length < 5) {
      newErrors.title = 'Title must be at least 5 characters';
    }
    
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    } else if (description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return !newErrors.title && !newErrors.description;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please correct the errors in the form");
      return;
    }

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      severity,
      reported_at: new Date().toISOString(),
    });

    // Reset form
    setTitle('');
    setDescription('');
    setSeverity("Low");
    toast.success("Incident reported successfully!");
  };

  const getSeverityIcon = (level: string) => {
    switch(level) {
      case 'Low': return <AlertCircle size={18} />;
      case 'Medium': return <AlertTriangle size={18} />;
      case 'High': return <AlertOctagon size={18} />;
      default: return null;
    }
  };

  return (
    <motion.form 
      className="incident-form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      onSubmit={handleSubmit}
    >
      <h2>Report New Incident</h2>

      <div className="form-field">
        <label htmlFor="incident-title">Incident Title</label>
        <input
          id="incident-title"
          type="text"
          placeholder="Provide a clear title for the incident"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={errors.title ? 'error' : ''}
        />
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="incident-description">Incident Description</label>
        <textarea
          id="incident-description"
          placeholder="Describe what happened in detail..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={errors.description ? 'error' : ''}
        />
        {errors.description && <span className="error-message">{errors.description}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="incident-severity">Severity Level</label>
        <div className="severity-selector">
          {["Low", "Medium", "High"].map((level) => (
            <div 
              key={level}
              className={`severity-option ${severity === level ? 'selected' : ''} ${level.toLowerCase()}`}
              onClick={() => setSeverity(level as "Low" | "Medium" | "High")}
            >
              {getSeverityIcon(level)}
              <span>{level}</span>
            </div>
          ))}
        </div>
      </div>

      <motion.button 
        type="submit" 
        className="submit-button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Send className="w-4 h-4 mr-2" />
        Submit Incident
      </motion.button>
    </motion.form>
  );
};

export default IncidentForm;