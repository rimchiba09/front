import Diabetes from "../public/assist/Diabetes-Mellitus.jpg";
import Liver from "../public/assist/Liver-Diseases.jpg";
import Cardiovascular from "../public/assist/Cardiovascular-Diseases.jpg";
import Infectious from "../public/assist/Infectious-Diseases.jpg";
import Respiratory from "../public/assist/Respiratory-Diseases.jpg";
import Renal from "../public/assist/Renal-Diseases.jpg";
import { FormData } from "../components/Analysis-Form/analysis-Form"

type PersonalInfoField = {
  name: keyof FormData; 
  label: string;
  type: string;
  options?: string[];
  className?: string;
};

// Home section
export const words = [
  { text: "Guiding" },
  { text: "Hands" },
  { text: "Informed" },
  { text: "by" },
  { text: "Insight." },
];

export const welcome_section_words = [
  "Brilliance",
  "Optimism",
  "Reliability",
  "Health",
  "Accuracy",
  "Nurturing",
];

type InputField = {
  name: keyof FormData;
  label: string;
  type: string;
  required?: boolean;
  className?: string;
  options?: string[];
  unit?: string;
};

export const inputFields_PersonalInfo = [
  { label: "First Name", name: "firstName", type: "text", required: true, className: "" },
  { label: "Last Name", name: "lastName", type: "text", required: true, className: "" },
  { label: "Date of Birth", name: "dateBirth", type: "date", required: true, className: "pr-0 text-nautral-600" },
  { label: "Gender", name: "gender", type: "select", options: ["Male", "Female"], required: true, className: "h-9" },
  { label: "National ID", name: "nationalId", type: "text", required: true, className: "col-span-2" },
];

export const inputFields_MedicalInfo = [
  { label: "Blood Pressure", name: "thestbps", type: "number", required: true, unit: "mmHg" },
  { label: "Cholesterol", name: "chol", type: "number", required: true, unit: "mg/dL" },
  { label: "Heart Rate", name: "thalach", type: "number", required: true, unit: "bpm" },
  { label: "ST Depression", name: "oldpeak", type: "number", required: true, unit: "mm" },
  { label: "Number of Major Vessels", name: "ca", type: "text", required: true, unit: "" },
  { label: "Fasting Blood Sugar", name: "fbs", type: "select", options:['True', 'False'],  required: true, unit: "mg/dL" },
  { label: "Exercise Induced Angina", name: "exang", type: "select", options:  ['True', 'False'],  required: true, unit: "0/1" },
  { label: "Chest Pain Type", name: "cp", type: "select", options:  ['typical angina', 'asymptomatic', 'non-anginal', 'atypical angina'],  required: true, unit: "0-3" },
  { label: "Thalassemia", name: "thal", type: "text", required: true, unit: "N/A" },
  { label: "Slope of the Peak Exercise ST Segment", name: "slope", type: "text", required: true, unit: "0-2" },
  { label: "Resting Electrocardiographic Results", name: "restecg", type: "select",  options:['lv hypertrophy', 'normal', 'st-t abnormality'], required: true, unit: "N/A" },
];


export const projects = [
  {
    id: "1",
    title: "Cardiovascular Diseases",
    description:
      "A group of disorders affecting the heart and blood vessels, including coronary artery disease, heart attack, and stroke.",
    link: "/analysis-form",
    image: Cardiovascular,
  },
  {
    id: "2",
    title: "Diabetes Mellitus",
    description:
      "A metabolic disorder characterized by high blood glucose levels due to insufficient insulin production or the body's inability to use insulin effectively.",
    link: "",
    image: Diabetes,
  },
  {
    id: "3",
    title: "Liver Diseases",
    description:
      "A range of conditions that damage the liver, such as hepatitis, cirrhosis, and fatty liver disease, affecting its ability to perform essential functions.",
    link: "",
    image: Liver,
  },
  {
    id: "4",
    title: "Renal Diseases",
    description:
      "Conditions affecting kidney function, such as chronic kidney disease and acute kidney injury, which can lead to a buildup of waste in the body.",
    link: "",
    image: Renal,
  },
  {
    id: "5",
    title: "Infectious Diseases",
    description:
      "Illnesses caused by pathogens like bacteria, viruses, fungi, or parasites, which can spread from person to person or through environmental contact.",
    link: "",
    image: Infectious,
  },
  {
    id: "6",
    title: "Respiratory Diseases",
    description:
      "Disorders affecting the respiratory system, including asthma, chronic obstructive pulmonary disease (COPD), and pneumonia, leading to breathing difficulties.",
    link: "",
    image: Respiratory,
  },
];
