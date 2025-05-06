import React, { useState, useEffect } from 'react';

// Suggested goal templates
const suggestedGoals = [
  {
    name: 'Emergency Fund',
    targetAmount: 5000,
    monthlyContribution: 200,
  },
  {
    name: 'Pay Off Debt',
    targetAmount: 3000,
    monthlyContribution: 300,
  },
  {
    name: 'Holiday Trip',
    targetAmount: 2000,
    monthlyContribution: 250,
  },
  {
    name: 'Home Upgrade',
    targetAmount: 10000,
    monthlyContribution: 400,
  },
];

function SavingGoals() {
  // State for goals
  const [goals, setGoals] = useState([
    {
      id: '1',
      name: 'Buy a Laptop',
      currentAmount: 600,
      targetAmount: 1200,
      targetDate: '2025-07-31',
      monthlyContribution: 100,
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      name: 'Emergency Fund',
      currentAmount: 2000,
      targetAmount: 5000,
      monthlyContribution: 200,
      createdAt: new Date().toISOString(),
    },
    {
      id: '3',
      name: 'Trip to Japan',
      currentAmount: 1500,
      targetAmount: 4000,
      targetDate: '2026-03-15',
      monthlyContribution: 150,
      createdAt: new Date().toISOString(),
    },
  ]);

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    targetAmount: '',
    currentAmount: '',
    targetDate: '',
    monthlyContribution: '',
  });

  // Reset form when modal closes
  useEffect(() => {
    if (!isModalOpen) {
      setFormData({
        name: '',
        targetAmount: '',
        currentAmount: '',
        targetDate: '',
        monthlyContribution: '',
      });
      setEditingGoal(null);
    }
  }, [isModalOpen]);

  // Set form data when editing
  useEffect(() => {
    if (editingGoal) {
      setFormData({
        name: editingGoal.name,
        targetAmount: editingGoal.targetAmount.toString(),
        currentAmount: editingGoal.currentAmount.toString(),
        targetDate: editingGoal.targetDate || '',
        monthlyContribution: editingGoal.monthlyContribution?.toString() || '',
      });
    }
  }, [editingGoal]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newGoal = {
      id: editingGoal ? editingGoal.id : Date.now().toString(),
      name: formData.name,
      currentAmount: parseFloat(formData.currentAmount) || 0,
      targetAmount: parseFloat(formData.targetAmount) || 0,
      targetDate: formData.targetDate || undefined,
      monthlyContribution: formData.monthlyContribution
        ? parseFloat(formData.monthlyContribution)
        : undefined,
      createdAt: editingGoal ? editingGoal.createdAt : new Date().toISOString(),
    };

    if (editingGoal) {
      // Update existing goal
      setGoals(
        goals.map((goal) => (goal.id === editingGoal.id ? newGoal : goal))
      );
    } else {
      // Add new goal
      setGoals([...goals, newGoal]);
    }

    setIsModalOpen(false);
  };

  // Delete a goal
  const handleDelete = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  // Edit a goal
  const handleEdit = (goal) => {
    setEditingGoal(goal);
    setIsModalOpen(true);
  };

  // Create a goal from template
  const createFromTemplate = (template) => {
    const newGoal = {
      id: Date.now().toString(),
      name: template.name,
      currentAmount: 0,
      targetAmount: template.targetAmount,
      monthlyContribution: template.monthlyContribution,
      createdAt: new Date().toISOString(),
    };

    setGoals([...goals, newGoal]);
  };

  // Calculate progress percentage
  const calculateProgress = (current, target) => {
    return Math.min(Math.round((current / target) * 100), 100);
  };

  // Generate AI insight based on goal progress
  const generateInsight = (goal) => {
    const progress = calculateProgress(goal.currentAmount, goal.targetAmount);

    if (progress >= 90) {
      return "Almost there! You're doing great!";
    } else if (progress >= 50) {
      return "You're on track! Keep it up!";
    } else if (progress >= 25) {
      return 'Good progress! Stay consistent.';
    } else {
      return `Consider saving ${
        goal.monthlyContribution ? `$${goal.monthlyContribution + 50}` : 'more'
      } each month to reach your goal faster.`;
    }
  };

  // Format date to readable format
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-6 md:px-12 lg:px-24">
          <h1 className="text-3xl font-bold text-gray-900">
            Your Saving Goals
          </h1>
          <p className="mt-2 text-gray-600">
            Track your progress and stay focused on what matters.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-6 md:px-12 lg:px-24">
        {/* Add New Goal Button */}
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Active Goals</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-[#007BFF] text-white rounded-md hover:bg-blue-600 transition-colors flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add New Goal
          </button>
        </div>

        {/* Goals List */}
        {goals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal) => {
              const progress = calculateProgress(
                goal.currentAmount,
                goal.targetAmount
              );

              return (
                <div
                  key={goal.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {goal.name}
                      </h3>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(goal)}
                          className="text-gray-500 hover:text-blue-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(goal.id)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">
                          ${goal.currentAmount.toLocaleString()} / $
                          {goal.targetAmount.toLocaleString()}
                        </span>
                        <span className="font-medium">{progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-[#34D399] h-2.5 rounded-full"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {goal.targetDate && (
                      <div className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">Target:</span>{' '}
                        {formatDate(goal.targetDate)}
                      </div>
                    )}

                    {goal.monthlyContribution && (
                      <div className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">Monthly:</span> $
                        {goal.monthlyContribution.toLocaleString()}
                      </div>
                    )}

                    <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-100">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-[#007BFF]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="ml-2 text-sm text-gray-700">
                          {generateInsight(goal)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Empty state
          <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#007BFF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No goals yet
            </h3>
            <p className="text-gray-600 mb-6">
              Start by creating your first savings goal!
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-[#007BFF] text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Create Goal
            </button>
          </div>
        )}

        {/* Suggested Goals Section */}
        {goals.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Not sure where to start?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {suggestedGoals.map((template, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-medium text-gray-800 mb-2">
                    {template.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Target: ${template.targetAmount.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Monthly: ${template.monthlyContribution.toLocaleString()}
                  </p>
                  <button
                    onClick={() => createFromTemplate(template)}
                    className="w-full px-3 py-1.5 border border-[#007BFF] text-[#007BFF] rounded hover:bg-blue-50 transition-colors text-sm"
                  >
                    Use This Template
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Modal for adding/editing goals */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {editingGoal ? 'Edit Goal' : 'Add New Goal'}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Goal Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Emergency Fund, Trip to Japan"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="targetAmount"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Target Amount*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <input
                      type="number"
                      id="targetAmount"
                      name="targetAmount"
                      value={formData.targetAmount}
                      onChange={handleInputChange}
                      className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="2000"
                      min="1"
                      step="1"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="currentAmount"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Current Amount
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <input
                      type="number"
                      id="currentAmount"
                      name="currentAmount"
                      value={formData.currentAmount}
                      onChange={handleInputChange}
                      className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0"
                      min="0"
                      step="1"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="targetDate"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Target Date (Optional)
                  </label>
                  <input
                    type="date"
                    id="targetDate"
                    name="targetDate"
                    value={formData.targetDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="monthlyContribution"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Monthly Contribution (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <input
                      type="number"
                      id="monthlyContribution"
                      name="monthlyContribution"
                      value={formData.monthlyContribution}
                      onChange={handleInputChange}
                      className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="100"
                      min="1"
                      step="1"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#007BFF] text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    {editingGoal ? 'Update Goal' : 'Create Goal'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SavingGoals;
