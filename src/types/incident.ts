export interface Incident {
  id: number;
  title: string;
  description: string;
  severity: "Low" | "Medium" | "High";
  reported_at: string;
}

export const initialIncidents: Incident[] = [
  {
    id: 1,
    title: "Unexpected output in text generation model",
    description: "The model produced harmful content despite safety measures. Investigation showed a gap in the content filtering system that needs to be addressed immediately.",
    severity: "High",
    reported_at: "2025-03-15T14:22:10Z"
  },
  {
    id: 2,
    title: "Minor bias detected in classification results",
    description: "Routine testing revealed slight gender bias in classification results for professional categories. Bias is within acceptable parameters but should be monitored.",
    severity: "Low",
    reported_at: "2025-03-10T09:15:00Z"
  },
  {
    id: 3,
    title: "Computational resource spike during inference",
    description: "Unexpected computational resource consumption occurred during high-volume inference. System remained stable but optimization is needed to prevent potential service degradation.",
    severity: "Medium",
    reported_at: "2025-03-05T11:30:45Z"
  }
];