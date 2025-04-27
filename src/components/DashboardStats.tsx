import React, { useState, useEffect } from 'react';
import { Incident } from '../types/incident';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { AlertCircle, AlertTriangle, AlertOctagon, Activity } from 'lucide-react';

interface DashboardStatsProps {
  incidents: Incident[];
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ incidents }) => {
  const lowCount = incidents.filter(i => i.severity === "Low").length;
  const mediumCount = incidents.filter(i => i.severity === "Medium").length;
  const highCount = incidents.filter(i => i.severity === "High").length;
  const totalCount = incidents.length;
  
  const [animatedCounts, setAnimatedCounts] = useState({
    low: 0,
    medium: 0,
    high: 0,
    total: 0
  });

  useEffect(() => {
    const duration = 1500;
    const interval = 50;
    const steps = duration / interval;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedCounts({
        low: Math.ceil(lowCount * progress),
        medium: Math.ceil(mediumCount * progress),
        high: Math.ceil(highCount * progress),
        total: Math.ceil(totalCount * progress)
      });
      
      if (currentStep === steps) {
        clearInterval(timer);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [lowCount, mediumCount, highCount, totalCount]);

  const pieData = [
    { name: "Low", value: lowCount },
    { name: "Medium", value: mediumCount },
    { name: "High", value: highCount },
  ];

  const COLORS = ["var(--success-color)", "var(--warning-color)", "var(--danger-color)"];

  return (
    <div className="dashboard-stats">
      <div className="stats-grid">
        <div className="stat-card total">
          <div className="stat-icon">
            <Activity size={24} />
          </div>
          <div className="stat-info">
            <h3>Total Incidents</h3>
            <p className="stat-value">{animatedCounts.total}</p>
          </div>
        </div>
        
        <div className="stat-card low">
          <div className="stat-icon">
            <AlertCircle size={24} />
          </div>
          <div className="stat-info">
            <h3>Low Severity</h3>
            <p className="stat-value">{animatedCounts.low}</p>
          </div>
        </div>
        
        <div className="stat-card medium">
          <div className="stat-icon">
            <AlertTriangle size={24} />
          </div>
          <div className="stat-info">
            <h3>Medium Severity</h3>
            <p className="stat-value">{animatedCounts.medium}</p>
          </div>
        </div>
        
        <div className="stat-card high">
          <div className="stat-icon">
            <AlertOctagon size={24} />
          </div>
          <div className="stat-info">
            <h3>High Severity</h3>
            <p className="stat-value">{animatedCounts.high}</p>
          </div>
        </div>
      </div>
      
      <div className="pie-chart-wrapper">
        <h2>Incident Severity Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie 
              dataKey="value" 
              isAnimationActive 
              data={pieData} 
              cx="50%" 
              cy="50%" 
              outerRadius={100} 
              label
              animationDuration={1500}
            >
              {pieData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value} incidents`, 'Count']}
              labelFormatter={(name) => `${name} Severity`}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardStats;
