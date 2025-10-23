import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FormData {
  // Step 1 - Personal Information
  surname: string;
  otherNames: string;
  gender: string;
  religion: string;
  dateOfBirth: string;
  placeOfBirth: string;
  nationality: string;
  stateOfOrigin: string;
  lga: string;
  homeAddress: string;
  bloodGroup: string;
  genotype: string;
  hospitalName: string;
  doctorName: string;
  doctorContact: string;
  classApplying: string;
  academicSession: string;
  termCommencing: string;
  photo: string | null;

  // Step 2 - Parent/Guardian Details
  fatherName: string;
  fatherAddress: string;
  fatherMobile: string;
  fatherReligion: string;
  fatherState: string;
  fatherBirthday: string;
  fatherOccupation: string;
  fatherEmail: string;
  fatherOffice: string;
  
  motherName: string;
  motherAddress: string;
  motherMobile: string;
  motherReligion: string;
  motherState: string;
  motherBirthday: string;
  motherOccupation: string;
  motherEmail: string;
  motherOffice: string;

  guardianName: string;
  guardianAddress: string;
  guardianMobile: string;
  guardianReligion: string;
  guardianState: string;
  guardianBirthday: string;
  guardianOccupation: string;
  guardianEmail: string;
  guardianOffice: string;
  guardianRelationship: string;

  howDidYouHear: string[];
  otherSource: string;
}

export default function SchoolApplicationForm() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormData>({
    surname: '',
    otherNames: '',
    gender: '',
    religion: '',
    dateOfBirth: '',
    placeOfBirth: '',
    nationality: '',
    stateOfOrigin: '',
    lga: '',
    homeAddress: '',
    bloodGroup: '',
    genotype: '',
    hospitalName: '',
    doctorName: '',
    doctorContact: '',
    classApplying: '',
    academicSession: '',
    termCommencing: '',
    photo: null,
    fatherName: '',
    fatherAddress: '',
    fatherMobile: '',
    fatherReligion: '',
    fatherState: '',
    fatherBirthday: '',
    fatherOccupation: '',
    fatherEmail: '',
    fatherOffice: '',
    motherName: '',
    motherAddress: '',
    motherMobile: '',
    motherReligion: '',
    motherState: '',
    motherBirthday: '',
    motherOccupation: '',
    motherEmail: '',
    motherOffice: '',
    guardianName: '',
    guardianAddress: '',
    guardianMobile: '',
    guardianReligion: '',
    guardianState: '',
    guardianBirthday: '',
    guardianOccupation: '',
    guardianEmail: '',
    guardianOffice: '',
    guardianRelationship: '',
    howDidYouHear: [],
    otherSource: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      howDidYouHear: checked 
        ? [...prev.howDidYouHear, value]
        : prev.howDidYouHear.filter(item => item !== value)
    }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, photo: 'Photo size must be less than 2MB' }));
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, photo: reader.result as string }));
        setErrors(prev => ({ ...prev, photo: '' }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.surname.trim()) newErrors.surname = 'Surname is required';
    if (!formData.otherNames.trim()) newErrors.otherNames = 'Other names are required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.nationality.trim()) newErrors.nationality = 'Nationality is required';
    if (!formData.homeAddress.trim()) newErrors.homeAddress = 'Home address is required';
    if (!formData.classApplying) newErrors.classApplying = 'Class applying for is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fatherName.trim() && !formData.motherName.trim() && !formData.guardianName.trim()) {
      newErrors.fatherName = 'At least one parent/guardian information is required';
    }

    if (formData.fatherEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.fatherEmail)) {
      newErrors.fatherEmail = 'Invalid email format';
    }
    if (formData.motherEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.motherEmail)) {
      newErrors.motherEmail = 'Invalid email format';
    }
    if (formData.guardianEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.guardianEmail)) {
      newErrors.guardianEmail = 'Invalid email format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const navigate = useNavigate();

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      console.log('Form submitted:', formData);
      alert('Application submitted successfully!');
      
      // Redirect after 1.5 seconds so user can see the success message
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header */}
        <div className="bg-white p-6 border-b-4 border-red-600">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs text-gray-500"><img src='/images/school logo.jpeg' className='rounded-full'/></span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-blue-500">ZEE ALPHA</h1>
                <h2 className="text-xl font-semibold">INTERNATIONAL SCHOOL</h2>
              </div>
            </div>
            <div className="text-right text-sm">
              <p>FORM NO: _____________</p>
              <p>RECEIPT NO: _____________</p>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="bg-gray-100 p-4">
          <div className="flex items-center justify-center gap-4">
            <div className={`flex items-center gap-2 ${step === 1 ? 'text-blue-600 font-semibold' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>1</div>
              <span>Personal Information</span>
            </div>
            <div className="w-16 h-1 bg-gray-300"></div>
            <div className={`flex items-center gap-2 ${step === 2 ? 'text-blue-600 font-semibold' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>2</div>
              <span>Parent/Guardian Details</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* STEP 1 - Personal Information */}
          {step === 1 && (
            <div className="space-y-6">
              {/* Photo Upload */}
              <div className="flex justify-end">
                <div className="border-2 border-gray-300 p-2">
                  <label className="cursor-pointer">
                    {formData.photo ? (
                      <img src={formData.photo} alt="Student" className="w-32 h-40 object-cover" />
                    ) : (
                      <div className="w-32 h-40 bg-gray-100 flex flex-col items-center justify-center">
                        <Camera className="w-8 h-8 text-gray-400 mb-2" />
                        <span className="text-xs text-gray-500 text-center">PHOTOGRAPH<br/>Affix 4 Passport Size</span>
                      </div>
                    )}
                    <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                  </label>
                  {errors.photo && <p className="text-red-500 text-xs mt-1">{errors.photo}</p>}
                </div>
              </div>

              {/* Personal Information Section */}
              <div className="bg-red-600 text-white px-4 py-2 font-semibold">PERSONAL INFORMATION</div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">LEARNER'S NAME (SURNAME) *</label>
                    <input
                      type="text"
                      name="surname"
                      value={formData.surname}
                      onChange={handleInputChange}
                      className={`w-full border ${errors.surname ? 'border-red-500' : 'border-gray-300'} p-2 uppercase`}
                    />
                    {errors.surname && <p className="text-red-500 text-xs mt-1">{errors.surname}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">OTHER NAMES *</label>
                    <input
                      type="text"
                      name="otherNames"
                      value={formData.otherNames}
                      onChange={handleInputChange}
                      className={`w-full border ${errors.otherNames ? 'border-red-500' : 'border-gray-300'} p-2`}
                    />
                    {errors.otherNames && <p className="text-red-500 text-xs mt-1">{errors.otherNames}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">GENDER *</label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="MALE"
                          checked={formData.gender === 'MALE'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        MALE
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="FEMALE"
                          checked={formData.gender === 'FEMALE'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        FEMALE
                      </label>
                    </div>
                    {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">RELIGION</label>
                    <input
                      type="text"
                      name="religion"
                      value={formData.religion}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">DATE OF BIRTH *</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className={`w-full border ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'} p-2`}
                    />
                    {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">PLACE OF BIRTH</label>
                    <input
                      type="text"
                      name="placeOfBirth"
                      value={formData.placeOfBirth}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">NATIONALITY *</label>
                    <input
                      type="text"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleInputChange}
                      className={`w-full border ${errors.nationality ? 'border-red-500' : 'border-gray-300'} p-2`}
                    />
                    {errors.nationality && <p className="text-red-500 text-xs mt-1">{errors.nationality}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">STATE OF ORIGIN</label>
                    <input
                      type="text"
                      name="stateOfOrigin"
                      value={formData.stateOfOrigin}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">LGA</label>
                    <input
                      type="text"
                      name="lga"
                      value={formData.lga}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">HOME ADDRESS *</label>
                  <textarea
                    name="homeAddress"
                    value={formData.homeAddress}
                    onChange={handleInputChange}
                    rows={2}
                    className={`w-full border ${errors.homeAddress ? 'border-red-500' : 'border-gray-300'} p-2`}
                  />
                  {errors.homeAddress && <p className="text-red-500 text-xs mt-1">{errors.homeAddress}</p>}
                </div>
              </div>

              {/* Medical Information */}
              <div className="bg-red-600 text-white px-4 py-2 font-semibold">PERSONAL INFORMATION</div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">BLOOD GROUP</label>
                    <input
                      type="text"
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">GENOTYPE</label>
                    <input
                      type="text"
                      name="genotype"
                      value={formData.genotype}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                </div>

                <div className="text-blue-500 font-semibold text-sm">DETAILS OF FAMILY HOSPITAL / DOCTOR</div>

                <div>
                  <label className="block text-sm font-medium mb-1">HOSPITAL NAME</label>
                  <input
                    type="text"
                    name="hospitalName"
                    value={formData.hospitalName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">DOCTOR'S NAME</label>
                    <input
                      type="text"
                      name="doctorName"
                      value={formData.doctorName}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">CONTACT</label>
                    <input
                      type="text"
                      name="doctorContact"
                      value={formData.doctorContact}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                </div>
              </div>

              {/* Class Applying For */}
              <div className="bg-red-600 text-white px-4 py-2 font-semibold">CLASS APPLYING FOR:</div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">SELECT CLASS *</label>
                  <select
                    name="classApplying"
                    value={formData.classApplying}
                    onChange={handleInputChange}
                    className={`w-full border ${errors.classApplying ? 'border-red-500' : 'border-gray-300'} p-2`}
                  >
                    <option value="">Select Class</option>
                    <option value="JSS1">JSS 1</option>
                    <option value="JSS2">JSS 2</option>
                    <option value="JSS3">JSS 3</option>
                    <option value="SSS1">SSS 1</option>
                    <option value="SSS2">SSS 2</option>
                    <option value="SSS3">SSS 3</option>
                  </select>
                  {errors.classApplying && <p className="text-red-500 text-xs mt-1">{errors.classApplying}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">ACADEMIC SESSION</label>
                  <input
                    type="text"
                    name="academicSession"
                    value={formData.academicSession}
                    onChange={handleInputChange}
                    placeholder="e.g., 2025/2026"
                    className="w-full border border-gray-300 p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">TERM OF COMMENCEMENT</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="termCommencing"
                        value="1st TERM"
                        checked={formData.termCommencing === '1st TERM'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      1st TERM
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="termCommencing"
                        value="2nd TERM"
                        checked={formData.termCommencing === '2nd TERM'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      2nd TERM
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="termCommencing"
                        value="3rd TERM"
                        checked={formData.termCommencing === '3rd TERM'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      3rd TERM
                    </label>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-end pt-6">
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-blue-600 text-white px-8 py-2 font-semibold hover:bg-blue-700"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 - Parent/Guardian Details */}
          {step === 2 && (
            <div className="space-y-6">
              {/* Father's Details */}
              <div className="bg-red-600 text-white px-4 py-2 font-semibold">PARENT/GUARDIAN DETAILS:</div>

              <div className="space-y-4">
                <h3 className="font-semibold">1. FATHER'S/GUARDIAN'S NAME & HOME ADDRESS:</h3>
                
                <div>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full border border-gray-300 p-2"
                  />
                </div>

                <div>
                  <textarea
                    name="fatherAddress"
                    value={formData.fatherAddress}
                    onChange={handleInputChange}
                    placeholder="Home Address"
                    rows={2}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">MOBILE NO:</label>
                    <input
                      type="tel"
                      name="fatherMobile"
                      value={formData.fatherMobile}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">RELIGION:</label>
                    <input
                      type="text"
                      name="fatherReligion"
                      value={formData.fatherReligion}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">STATE OF ORIGIN:</label>
                    <input
                      type="text"
                      name="fatherState"
                      value={formData.fatherState}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">BIRTHDAY:</label>
                    <input
                      type="date"
                      name="fatherBirthday"
                      value={formData.fatherBirthday}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">FATHER'S OCCUPATION:</label>
                    <input
                      type="text"
                      name="fatherOccupation"
                      value={formData.fatherOccupation}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">E-MAIL:</label>
                    <input
                      type="email"
                      name="fatherEmail"
                      value={formData.fatherEmail}
                      onChange={handleInputChange}
                      className={`w-full border ${errors.fatherEmail ? 'border-red-500' : 'border-gray-300'} p-2`}
                    />
                    {errors.fatherEmail && <p className="text-red-500 text-xs mt-1">{errors.fatherEmail}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">FATHER'S OFFICE ADDRESS:</label>
                  <input
                    type="text"
                    name="fatherOffice"
                    value={formData.fatherOffice}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>
              </div>

              {/* Mother's Details */}
              <div className="space-y-4 pt-6">
                <h3 className="font-semibold">2. MOTHER'S NAME & HOME ADDRESS:</h3>
                
                <div>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full border border-gray-300 p-2"
                  />
                </div>

                <div>
                  <textarea
                    name="motherAddress"
                    value={formData.motherAddress}
                    onChange={handleInputChange}
                    placeholder="Home Address"
                    rows={2}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">MOBILE NO:</label>
                    <input
                      type="tel"
                      name="motherMobile"
                      value={formData.motherMobile}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">RELIGION:</label>
                    <input
                      type="text"
                      name="motherReligion"
                      value={formData.motherReligion}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">STATE OF ORIGIN:</label>
                    <input
                      type="text"
                      name="motherState"
                      value={formData.motherState}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">BIRTHDAY:</label>
                    <input
                      type="date"
                      name="motherBirthday"
                      value={formData.motherBirthday}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">MOTHER'S OCCUPATION:</label>
                    <input
                      type="text"
                      name="motherOccupation"
                      value={formData.motherOccupation}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">E-MAIL:</label>
                    <input
                      type="email"
                      name="motherEmail"
                      value={formData.motherEmail}
                      onChange={handleInputChange}
                      className={`w-full border ${errors.motherEmail ? 'border-red-500' : 'border-gray-300'} p-2`}
                    />
                    {errors.motherEmail && <p className="text-red-500 text-xs mt-1">{errors.motherEmail}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">MOTHER'S OFFICE ADDRESS:</label>
                  <input
                    type="text"
                    name="motherOffice"
                    value={formData.motherOffice}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>
              </div>

              {/* Guardian/Sponsor Details */}
              <div className="bg-red-600 text-white px-4 py-2 font-semibold">GUARDIAN'S / SPONSOR DETAILS</div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">NAME OF GUARDIAN'S SPONSOR IF DIFFERENT FROM 1&2 ABOVE:</label>
                  <input
                    type="text"
                    name="guardianName"
                    value={formData.guardianName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">ADDRESS:</label>
                  <textarea
                    name="guardianAddress"
                    value={formData.guardianAddress}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">MOBILE NO:</label>
                    <input
                      type="tel"
                      name="guardianMobile"
                      value={formData.guardianMobile}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">RELIGION:</label>
                    <input
                      type="text"
                      name="guardianReligion"
                      value={formData.guardianReligion}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">STATE OF ORIGIN:</label>
                    <input
                      type="text"
                      name="guardianState"
                      value={formData.guardianState}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">BIRTHDAY:</label>
                    <input
                      type="date"
                      name="guardianBirthday"
                      value={formData.guardianBirthday}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">OCCUPATION:</label>
                    <input
                      type="text"
                      name="guardianOccupation"
                      value={formData.guardianOccupation}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">E-MAIL:</label>
                    <input
                      type="email"
                      name="guardianEmail"
                      value={formData.guardianEmail}
                      onChange={handleInputChange}
                      className={`w-full border ${errors.guardianEmail ? 'border-red-500' : 'border-gray-300'} p-2`}
                    />
                    {errors.guardianEmail && <p className="text-red-500 text-xs mt-1">{errors.guardianEmail}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">OFFICE ADDRESS:</label>
                  <input
                    type="text"
                    name="guardianOffice"
                    value={formData.guardianOffice}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">RELATIONSHIP TO STUDENT:</label>
                  <input
                    type="text"
                    name="guardianRelationship"
                    value={formData.guardianRelationship}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>
              </div>

              {/* How did you hear about us */}
              <div className="bg-red-600 text-white px-4 py-2 font-semibold">HOW DID YOU GET TO KNOW ABOUT ZEE ALPHA INTERNATIONAL SCHOOL</div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="TV"
                      checked={formData.howDidYouHear.includes('TV')}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    TV
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="RADIO"
                      checked={formData.howDidYouHear.includes('RADIO')}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    RADIO
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="NEWSPAPER"
                      checked={formData.howDidYouHear.includes('NEWSPAPER')}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    NEWSPAPER
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="WEBSITE"
                      checked={formData.howDidYouHear.includes('WEBSITE')}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    WEBSITE
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="SOCIAL MEDIA"
                      checked={formData.howDidYouHear.includes('SOCIAL MEDIA')}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    SOCIAL MEDIA
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="INDIVIDUALS"
                      checked={formData.howDidYouHear.includes('INDIVIDUALS')}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    INDIVIDUALS
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">OTHERS (KINDLY SPECIFY):</label>
                  <input
                    type="text"
                    name="otherSource"
                    value={formData.otherSource}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2"
                  />
                </div>
              </div>

              {/* Required Documents */}
              <div className="bg-red-600 text-white px-4 py-2 font-semibold">KINDLY SUMMIT PHOTOCOPIES OF THE LISTED DOCUMENTS WITH THIS APPLICATION FORM</div>

              <div className="bg-gray-50 p-4 space-y-2 text-sm">
                <p>1. PRIMARY SCHOOL LEAVING CERTIFICATE</p>
                <p>2. TRANSFER CERTIFICATE (IF APPLICABLE)</p>
                <p>3. TESTIMONIAL</p>
                <p>4. BIRTH CERTIFICATE / INTERNATIONAL PASSPORT</p>
                <p>5. LAST TWO TERM REPORT OF PRESENT CLASS</p>
                
                <p className="font-semibold mt-4">NOTE: AGE REQUIREMENT FOR ADMISSION INTO JSS1 AND SS1 ARE 11 (ELEVEN) AND 14 (FOURTEEN) YEARS RESPECTIVELY AS AT SEPTEMBER OF THE NEW ACADEMIC SESSION.</p>
                
                <p className="mt-2">STUDENT WHO DO NOT MEET THE AGE REQUIREMENT ARE ALLOWED TO SIT FOR THE ENTRANCE EXAMINATION AND IF SUCCESSFUL, THEIR ADMISSION WILL BE <span className="text-red-600 font-semibold">DEFERRED</span> UNTIL THEY ATTAIN THE REQUIRED AGE.</p>
                
                <p className="font-semibold mt-4 text-red-600">NB: THE ITEMS ABOVE ARE MANDATORY FILES WITHOUT WHICH THE FORM MIGHT NOT BE PROCESSED. NO REFUND OF APPLICATION FEES AFTER PAYMENT.</p>
              </div>

              {/* Error message for parent validation */}
              {errors.fatherName && (
                <div className="bg-red-50 border border-red-300 text-red-700 p-3 text-sm">
                  {errors.fatherName}
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between pt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  className="bg-gray-500 text-white px-8 py-2 font-semibold hover:bg-gray-600"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-8 py-2 font-semibold hover:bg-green-700"
                >
                  Submit Application
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}