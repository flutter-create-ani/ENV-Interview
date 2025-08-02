import React, { useState, useEffect } from 'react';
import {
  Stepper, Step, StepButton, Button,
  TextField, MenuItem, Typography,
  useMediaQuery
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

const steps = ['Basic Details', 'Select Target Role', 'Upload Resume', 'Set Password'];
const roles = ['SDE', 'Sales', 'Data Analyst', 'Product Manager', 'Marketing'];
const graduationYears = Array.from({ length: 10 }, (_, i) => 2025 - i);
const experienceOptions = Array.from({ length: 11 }, (_, i) => i);

export default function SignupLayer() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [numPages, setNumPages] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', college: '',
    graduationYear: '', isWorkingProfessional: '',
    experience: '', role: '', resume: null,
    password: '', confirmPassword: ''
  });
  const [passwordError, setPasswordError] = useState('');
  const isMobile = useMediaQuery('(max-width:768px)');
  const navigate = useNavigate();

  useEffect(() => {
    return () => fileURL && URL.revokeObjectURL(fileURL);
  }, [fileURL]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume' && files?.[0]) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      setFileURL(url);
      setFormData({ ...formData, resume: file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNext = () => {
    if (activeStep === 3 && formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    setPasswordError('');
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleStep = (step) => () => setActiveStep(step);

  const handleComplete = () => {
    setCompleted({ ...completed, [activeStep]: true });

    if (activeStep === steps.length - 1) {
      if (formData.password !== formData.confirmPassword) {
        setPasswordError('Passwords do not match');
        return;
      }

      console.log('Form Submitted:', formData);
      setTimeout(() => {
        navigate('/login', {
          state: { email: formData.email, password: formData.password }
        });
      }, 1000);
    } else {
      handleNext();
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col gap-4 mt-4">
            <TextField label="First Name" name="firstName" fullWidth onChange={handleChange} />
            <TextField label="Last Name" name="lastName" fullWidth onChange={handleChange} />
            <TextField label="Email" name="email" fullWidth onChange={handleChange} />
            <TextField label="College / University" name="college" fullWidth onChange={handleChange} />
            <TextField
              select label="Graduation Year" name="graduationYear"
              value={formData.graduationYear} onChange={handleChange} fullWidth
            >
              {graduationYears.map((year) => (
                <MenuItem key={year} value={year}>{year}</MenuItem>
              ))}
            </TextField>
            <TextField
              select label="Are you a Working Professional?" name="isWorkingProfessional"
              value={formData.isWorkingProfessional} onChange={handleChange} fullWidth
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </TextField>
            {formData.isWorkingProfessional === 'Yes' && (
              <TextField
                select label="Years of Experience" name="experience"
                value={formData.experience} onChange={handleChange} fullWidth
              >
                {experienceOptions.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year} {year === 1 ? 'year' : 'years'}
                  </MenuItem>
                ))}
              </TextField>
            )}
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col gap-4 mt-4">
            <TextField
              select label="Select Role" name="role"
              value={formData.role} onChange={handleChange} fullWidth
            >
              {roles.map((role) => (
                <MenuItem key={role} value={role}>{role}</MenuItem>
              ))}
            </TextField>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-4 mt-4">
            <Button variant="outlined" component="label">
              Upload Resume (PDF Only)
              <input hidden type="file" accept="application/pdf" name="resume" onChange={handleChange} />
            </Button>
            {formData.resume && (
              <>
                <Typography>{formData.resume.name}</Typography>
                {fileURL && (
                  <div className="border border-gray-200 rounded-md shadow-sm overflow-hidden">
                    <Document file={fileURL} onLoadSuccess={({ numPages }) => setNumPages(numPages)} loading="Loading PDF...">
                      {Array.from(new Array(numPages), (_, index) => (
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} width={isMobile ? 320 : 600} />
                      ))}
                    </Document>
                  </div>
                )}
              </>
            )}
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-4 mt-4">
            <TextField
              label="Enter Password" name="password" type="password"
              value={formData.password} onChange={handleChange} fullWidth
            />
            <TextField
              label="Re-enter Password" name="confirmPassword" type="password"
              value={formData.confirmPassword} onChange={handleChange}
              error={!!passwordError} helperText={passwordError} fullWidth
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-[100vh] bg-hero-gradient flex justify-center items-center px-4 py-8">
      <div className="glassmorphism p-6 rounded-2xl w-full max-w-[700px] max-h-[90vh] overflow-y-auto shadow-custom-green-lg">
        <h2 className="text-2xl font-bold text-center text-primary-gradient mb-6">Candidate Signup</h2>

        <Stepper nonLinear activeStep={activeStep} orientation={isMobile ? 'vertical' : 'horizontal'}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>{label}</StepButton>
            </Step>
          ))}
        </Stepper>

        <div>{renderStepContent(activeStep)}</div>

        <div className={`mt-6 flex ${isMobile ? 'flex-col gap-4' : 'justify-between items-center'}`}>
          <button
            disabled={activeStep === 0}
            onClick={handleBack}
            className="border border-custom-green-500 text-custom-green-600 px-4 py-2 rounded-lg w-full sm:w-auto disabled:opacity-50 hover:bg-custom-green-100 cursor-pointer"
          >
            Back
          </button>
          <div className={`flex ${isMobile ? 'flex-col gap-4 mt-4' : 'gap-4'}`}>
            <button
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
              className="border border-custom-green-500 text-custom-green-600 px-4 py-2 rounded-lg w-full sm:w-auto disabled:opacity-50 hover:bg-custom-green-100 cursor-pointer"
            >
              Next
            </button>
            <button
              onClick={handleComplete}
              className="bg-primary-gradient text-white px-4 py-2 rounded-lg w-full sm:w-auto hover:opacity-90 cursor-pointer"
            >
              {activeStep === steps.length - 1 ? 'Submit' : 'Complete Step'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
