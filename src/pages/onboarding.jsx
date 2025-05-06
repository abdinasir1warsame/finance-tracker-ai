import React, { useState } from 'react';

import {
  Upload,
  Target,
  Check,
  Plus,
  ChevronRight,
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Calendar,
  DollarSign,
  Home,
  Lock,
  Mail,
  PieChart,
  Settings,
  Shield,
  Star,
  TrendingUp,
  User,
} from 'lucide-react';

// Custom styles to match the design requirements
const styles = {
  primaryButton:
    'w-full py-3 px-4 bg-[#007BFF] hover:bg-[#0056b3] text-white font-medium rounded-lg transition-colors',
  secondaryButton:
    'w-full py-3 px-4 border border-[#007BFF] text-[#007BFF] hover:bg-blue-50 font-medium rounded-lg transition-colors',
  input:
    'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent',
  card: 'bg-white rounded-lg shadow-sm p-6 md:p-8',
  label: 'block text-sm font-medium text-gray-700 mb-1',
  heading: 'text-2xl font-bold mb-6',
  subheading: 'text-xl font-semibold mb-4',
  text: 'text-gray-600',
  iconContainer:
    'bg-[#B3D8FF] p-2 rounded-full inline-flex items-center justify-center',
  icon: 'text-[#007BFF] w-5 h-5',
  progressBar: 'h-2 bg-[#007BFF] rounded-full',
  savingsBar: 'h-2 bg-[#34D399] rounded-full',
  container:
    'min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-12',
  formContainer: 'w-full max-w-md',
  divider: 'my-6 border-t border-gray-200',
  error: 'text-red-500 text-sm mt-1',
};

// Icons
const GoogleIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
  </svg>
);

// Main App Component
function OnBoarding() {
  // State for multi-step form
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    isLogin: true,
    connectMethod: '',
    goals: [{ name: '', amount: '', date: '', description: '' }],
    monthlyIncome: '',
    riskTolerance: 'Balanced',
    notifySpendingSpikes: true,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  // Handle goal input changes
  const handleGoalChange = (index, e) => {
    const { name, value } = e.target;
    const updatedGoals = [...formData.goals];
    updatedGoals[index] = {
      ...updatedGoals[index],
      [name]: value,
    };

    setFormData({
      ...formData,
      goals: updatedGoals,
    });
  };

  // Add a new goal
  const addGoal = () => {
    setFormData({
      ...formData,
      goals: [
        ...formData.goals,
        { name: '', amount: '', date: '', description: '' },
      ],
    });
  };

  // Remove a goal
  const removeGoal = (index) => {
    const updatedGoals = [...formData.goals];
    updatedGoals.splice(index, 1);
    setFormData({
      ...formData,
      goals: updatedGoals.length
        ? updatedGoals
        : [{ name: '', amount: '', date: '', description: '' }],
    });
  };

  // Toggle between login and signup
  const toggleAuthMode = () => {
    setFormData({
      ...formData,
      isLogin: !formData.isLogin,
    });
    setErrors({});
  };

  // Validate form based on current step
  const validateForm = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }

      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      }

      if (!formData.isLogin) {
        if (!formData.confirmPassword) {
          newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = 'Passwords do not match';
        }
      }
    } else if (step === 2) {
      if (!formData.connectMethod) {
        newErrors.connectMethod =
          'Please select a method to connect your financial data';
      }
    } else if (step === 3) {
      const goalErrors = [];
      let hasError = false;

      formData.goals.forEach((goal, index) => {
        const goalError = {};

        if (!goal.name) {
          goalError.name = 'Goal name is required';
          hasError = true;
        }

        if (!goal.amount) {
          goalError.amount = 'Target amount is required';
          hasError = true;
        } else if (isNaN(goal.amount)) {
          goalError.amount = 'Amount must be a number';
          hasError = true;
        }

        if (!goal.date) {
          goalError.date = 'Target date is required';
          hasError = true;
        }

        if (Object.keys(goalError).length > 0) {
          goalErrors[index] = goalError;
        }
      });

      if (hasError) {
        newErrors.goals = goalErrors;
      }
    } else if (step === 4) {
      if (formData.monthlyIncome && isNaN(formData.monthlyIncome)) {
        newErrors.monthlyIncome = 'Monthly income must be a number';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission for each step
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);

        if (step < 5) {
          setStep(step + 1);
        } else {
          // Final submission - would normally send data to server
          console.log('Form submitted:', formData);
          // Redirect to dashboard or show success
        }
      }, 1000);
    }
  };

  // Go back to previous step
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Progress indicator
  const Progress = () => {
    return (
      <div className="w-full mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4, 5].map((stepNumber) => (
            <div
              key={stepNumber}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                stepNumber === step
                  ? 'bg-[#007BFF] text-white'
                  : stepNumber < step
                  ? 'bg-[#B3D8FF] text-[#007BFF]'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {stepNumber < step ? <Check className="w-4 h-4" /> : stepNumber}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={styles.progressBar}
            style={{ width: `${(step - 1) * 25}%` }}
          ></div>
        </div>
      </div>
    );
  };

  // Render different form steps
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className={styles.card}>
            <h2 className={styles.heading}>
              {formData.isLogin ? 'Welcome Back' : 'Create Your Account'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={styles.input}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className={styles.error}>{errors.password}</p>
                )}
              </div>

              {!formData.isLogin && (
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className={styles.label}>
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className={styles.input}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <p className={styles.error}>{errors.confirmPassword}</p>
                  )}
                </div>
              )}

              <button
                type="submit"
                className={styles.primaryButton}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? 'Processing...'
                  : formData.isLogin
                  ? 'Sign In'
                  : 'Create Account'}
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <GoogleIcon />
                Google
              </button>

              <p className="mt-6 text-center text-sm text-gray-600">
                {formData.isLogin
                  ? "Don't have an account? "
                  : 'Already have an account? '}
                <button
                  type="button"
                  className="text-[#007BFF] hover:underline font-medium"
                  onClick={toggleAuthMode}
                >
                  {formData.isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>

              <p className="mt-4 text-center text-xs text-gray-500">
                By continuing, you agree to our{' '}
                <a href="#" className="text-[#007BFF] hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-[#007BFF] hover:underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        );

      case 2:
        return (
          <div className={styles.card}>
            <h2 className={styles.heading}>Connect Your Financial Data</h2>
            <p className="mb-6 text-gray-600">
              To provide personalized insights, we need to access your financial
              information. Choose one of the following methods:
            </p>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4 mb-6">
                <div
                  className={`border rounded-lg p-4 cursor-pointer ${
                    formData.connectMethod === 'bank'
                      ? 'border-[#007BFF] bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() =>
                    handleChange({
                      target: { name: 'connectMethod', value: 'bank' },
                    })
                  }
                >
                  <div className="flex items-center">
                    <div className={styles.iconContainer}>
                      <Check className={styles.icon} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Connect Bank Account</h3>
                      <p className="text-sm text-gray-600">
                        Securely connect your bank accounts via Plaid
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`border rounded-lg p-4 cursor-pointer ${
                    formData.connectMethod === 'upload'
                      ? 'border-[#007BFF] bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() =>
                    handleChange({
                      target: { name: 'connectMethod', value: 'upload' },
                    })
                  }
                >
                  <div className="flex items-center">
                    <div className={styles.iconContainer}>
                      <Upload className={styles.icon} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Upload Bank Statement</h3>
                      <p className="text-sm text-gray-600">
                        Upload PDF or CSV files from your bank
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {errors.connectMethod && (
                <p className={styles.error}>{errors.connectMethod}</p>
              )}

              <div className="flex space-x-4">
                <button
                  type="button"
                  className={styles.secondaryButton}
                  onClick={handleBack}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className={styles.primaryButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Continue'}
                </button>
              </div>

              <p className="mt-4 text-center text-xs text-gray-500">
                Your data is encrypted and secure. We use bank-level security to
                protect your information.
              </p>
            </form>
          </div>
        );

      case 3:
        return (
          <div className={styles.card}>
            <h2 className={styles.heading}>Set Your Savings Goals</h2>
            <p className="mb-6 text-gray-600">
              Define what you want to achieve with your finances. This helps our
              AI provide better insights.
            </p>

            <form onSubmit={handleSubmit}>
              {formData.goals.map((goal, index) => (
                <div
                  key={index}
                  className="mb-6 p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Goal #{index + 1}</h3>
                    {formData.goals.length > 1 && (
                      <button
                        type="button"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => removeGoal(index)}
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor={`goal-name-${index}`}
                      className={styles.label}
                    >
                      Goal Name
                    </label>
                    <input
                      type="text"
                      id={`goal-name-${index}`}
                      name="name"
                      className={styles.input}
                      placeholder="e.g., Emergency Fund"
                      value={goal.name}
                      onChange={(e) => handleGoalChange(index, e)}
                    />
                    {errors.goals &&
                      errors.goals[index] &&
                      errors.goals[index].name && (
                        <p className={styles.error}>
                          {errors.goals[index].name}
                        </p>
                      )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor={`goal-amount-${index}`}
                      className={styles.label}
                    >
                      Target Amount ($)
                    </label>
                    <input
                      type="text"
                      id={`goal-amount-${index}`}
                      name="amount"
                      className={styles.input}
                      placeholder="10000"
                      value={goal.amount}
                      onChange={(e) => handleGoalChange(index, e)}
                    />
                    {errors.goals &&
                      errors.goals[index] &&
                      errors.goals[index].amount && (
                        <p className={styles.error}>
                          {errors.goals[index].amount}
                        </p>
                      )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor={`goal-date-${index}`}
                      className={styles.label}
                    >
                      Target Date
                    </label>
                    <input
                      type="date"
                      id={`goal-date-${index}`}
                      name="date"
                      className={styles.input}
                      value={goal.date}
                      onChange={(e) => handleGoalChange(index, e)}
                    />
                    {errors.goals &&
                      errors.goals[index] &&
                      errors.goals[index].date && (
                        <p className={styles.error}>
                          {errors.goals[index].date}
                        </p>
                      )}
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor={`goal-description-${index}`}
                      className={styles.label}
                    >
                      Description (Optional)
                    </label>
                    <textarea
                      id={`goal-description-${index}`}
                      name="description"
                      className={styles.input}
                      placeholder="Why is this goal important to you?"
                      rows={2}
                      value={goal.description}
                      onChange={(e) => handleGoalChange(index, e)}
                    ></textarea>
                  </div>
                </div>
              ))}

              <button
                type="button"
                className="mb-6 w-full py-2 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
                onClick={addGoal}
              >
                <Plus className="w-5 h-5" />
                <span className="ml-2">Add Another Goal</span>
              </button>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-blue-800 mb-2">
                  AI Suggestions
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="text-sm bg-white border border-blue-300 rounded-full px-3 py-1 text-blue-700 hover:bg-blue-100"
                      onClick={() => {
                        const updatedGoals = [...formData.goals];
                        if (updatedGoals[0].name === '') {
                          updatedGoals[0] = {
                            name: 'Emergency Fund',
                            amount: '10000',
                            date: new Date(
                              new Date().setMonth(new Date().getMonth() + 6)
                            )
                              .toISOString()
                              .split('T')[0],
                            description:
                              '3-month safety net for unexpected expenses',
                          };
                          setFormData({
                            ...formData,
                            goals: updatedGoals,
                          });
                        } else {
                          setFormData({
                            ...formData,
                            goals: [
                              ...updatedGoals,
                              {
                                name: 'Emergency Fund',
                                amount: '10000',
                                date: new Date(
                                  new Date().setMonth(new Date().getMonth() + 6)
                                )
                                  .toISOString()
                                  .split('T')[0],
                                description:
                                  '3-month safety net for unexpected expenses',
                              },
                            ],
                          });
                        }
                      }}
                    >
                      3-month safety net
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="text-sm bg-white border border-blue-300 rounded-full px-3 py-1 text-blue-700 hover:bg-blue-100"
                      onClick={() => {
                        const updatedGoals = [...formData.goals];
                        if (updatedGoals[0].name === '') {
                          updatedGoals[0] = {
                            name: 'Vacation Fund',
                            amount: '3000',
                            date: new Date(
                              new Date().setMonth(new Date().getMonth() + 12)
                            )
                              .toISOString()
                              .split('T')[0],
                            description: 'Annual vacation savings',
                          };
                          setFormData({
                            ...formData,
                            goals: updatedGoals,
                          });
                        } else {
                          setFormData({
                            ...formData,
                            goals: [
                              ...updatedGoals,
                              {
                                name: 'Vacation Fund',
                                amount: '3000',
                                date: new Date(
                                  new Date().setMonth(
                                    new Date().getMonth() + 12
                                  )
                                )
                                  .toISOString()
                                  .split('T')[0],
                                description: 'Annual vacation savings',
                              },
                            ],
                          });
                        }
                      }}
                    >
                      Vacation Fund
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="text-sm bg-white border border-blue-300 rounded-full px-3 py-1 text-blue-700 hover:bg-blue-100"
                      onClick={() => {
                        const updatedGoals = [...formData.goals];
                        if (updatedGoals[0].name === '') {
                          updatedGoals[0] = {
                            name: 'Down Payment',
                            amount: '50000',
                            date: new Date(
                              new Date().setFullYear(
                                new Date().getFullYear() + 3
                              )
                            )
                              .toISOString()
                              .split('T')[0],
                            description: 'Home down payment fund',
                          };
                          setFormData({
                            ...formData,
                            goals: updatedGoals,
                          });
                        } else {
                          setFormData({
                            ...formData,
                            goals: [
                              ...updatedGoals,
                              {
                                name: 'Down Payment',
                                amount: '50000',
                                date: new Date(
                                  new Date().setFullYear(
                                    new Date().getFullYear() + 3
                                  )
                                )
                                  .toISOString()
                                  .split('T')[0],
                                description: 'Home down payment fund',
                              },
                            ],
                          });
                        }
                      }}
                    >
                      Home Down Payment
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  className={styles.secondaryButton}
                  onClick={handleBack}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className={styles.primaryButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Continue'}
                </button>
              </div>
            </form>
          </div>
        );

      case 4:
        return (
          <div className={styles.card}>
            <h2 className={styles.heading}>Personalize Your Experience</h2>
            <p className="mb-6 text-gray-600">
              These preferences help us tailor our AI insights to your financial
              situation. This step is optional but recommended.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="monthlyIncome" className={styles.label}>
                  Monthly Income (Optional)
                </label>
                <input
                  type="text"
                  id="monthlyIncome"
                  name="monthlyIncome"
                  className={styles.input}
                  placeholder="5000"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                />
                {errors.monthlyIncome && (
                  <p className={styles.error}>{errors.monthlyIncome}</p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  If not provided, we'll estimate based on your transaction
                  history
                </p>
              </div>

              <div className="mb-6">
                <label className={styles.label}>Risk Tolerance</label>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {['Conservative', 'Balanced', 'Aggressive'].map((option) => (
                    <div
                      key={option}
                      className={`border rounded-lg p-3 text-center cursor-pointer ${
                        formData.riskTolerance === option
                          ? 'border-[#007BFF] bg-blue-50 text-[#007BFF]'
                          : 'border-gray-300 hover:border-gray-400 text-gray-700'
                      }`}
                      onClick={() =>
                        handleChange({
                          target: { name: 'riskTolerance', value: option },
                        })
                      }
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  id="notifySpendingSpikes"
                  name="notifySpendingSpikes"
                  checked={formData.notifySpendingSpikes}
                  onChange={handleChange}
                  className="h-4 w-4 text-[#007BFF] focus:ring-[#007BFF] border-gray-300 rounded"
                />
                <label
                  htmlFor="notifySpendingSpikes"
                  className="ml-2 block text-gray-700"
                >
                  Notify me about unusual spending patterns
                </label>
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  className={styles.secondaryButton}
                  onClick={handleBack}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className={styles.primaryButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Continue'}
                </button>
              </div>
            </form>
          </div>
        );

      case 5:
        return (
          <div className={styles.card}>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <h2 className={styles.heading}>You're All Set!</h2>
              <p className="text-gray-600">
                Your account has been successfully created and your financial
                data is being processed.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">AI Insights</h3>
              <p className="text-sm text-gray-700">
                Our AI is analyzing your financial data to provide personalized
                insights. The more data you sync, the smarter our
                recommendations will become.
              </p>
            </div>

            <button
              className={styles.primaryButton}
              onClick={() => console.log('Redirecting to dashboard...')}
            >
              Go to My Dashboard
            </button>

            <p className="mt-6 text-center text-sm text-gray-600">
              Need help getting started? Check out our{' '}
              <a href="#" className="text-[#007BFF] hover:underline">
                quick tutorial
              </a>
              .
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        {step > 1 && step < 5 && <Progress />}
        {renderStep()}
      </div>
    </div>
  );
}

export default OnBoarding;
