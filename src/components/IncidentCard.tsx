import React from 'react';
import { motion } from 'framer-motion';
import { Incident } from '../types/incident';
import { Copy, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { toast } from 'react-toastify';

interface IncidentCardProps {
  incident: Incident;
  isExpanded: boolean;
  toggleExpand: (id: number) => void;
}

const IncidentCard: React.FC<IncidentCardProps> = ({ incident, isExpanded, toggleExpand }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const copyIncident = () => {
    navigator.clipboard.writeText(`Title: ${incident.title}\nDescription: ${incident.description}`);
    toast.info("Incident copied to clipboard!");
  };

  const getSeverityIcon = (severity: string) => {
    switch(severity) {
      case 'Low': return '🔵';
      case 'Medium': return '🟠';
      case 'High': return '🔴';
      default: return '⚪';
    }
  };

  return (
    <motion.div
      className={`incident-card severity-${incident.severity.toLowerCase()}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <div className="incident-header">
        <div className="incident-title">
          <span className="severity-icon">{getSeverityIcon(incident.severity)}</span>
          <strong>{incident.title}</strong>
        </div>
        <div className="incident-date">
          <Clock className="w-4 h-4 mr-1" />
          <small>{formatDate(incident.reported_at)}</small>
        </div>
      </div>

      <div className={`badge ${incident.severity.toLowerCase()}`}>
        {incident.severity}
      </div>

      <div className="incident-actions">
        <motion.button 
          className="view-details"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => toggleExpand(incident.id)}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-1" />
              Collapse
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-1" />
              View Details
            </>
          )}
        </motion.button>
        <motion.button 
          className="copy-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={copyIncident}
        >
          <Copy className="w-4 h-4 mr-1" />
          Copy
        </motion.button>
      </div>

      {isExpanded && (
        <motion.div
          className="description"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p>{incident.description}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default IncidentCard;