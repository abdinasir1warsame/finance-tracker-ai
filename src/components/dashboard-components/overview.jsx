import React, { useState } from 'react';
import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import {
  ArrowUpRight,
  BarChart3,
  Calendar,
  CreditCard,
  DollarSign,
  Download,
  HelpCircle,
  PieChart as PieChartIcon,
  Plus,
  RefreshCw,
  Send,
  Upload,
  Wallet,
} from 'lucide-react';

function DashboardOverview() {
  // Mock data
  const [lastSync, setLastSync] = useState('2023-06-15 14:30');
  const [viewMode, setViewMode] = useState('monthly');
  const [aiQuestion, setAiQuestion] = useState('');

  const accountData = {
    totalBalance: 12458.92,
    totalSpent: 2345.67,
    totalIncome: 5678.9,
  };

  const recentTransactions = [
    {
      id: 1,
      date: '2023-06-14',
      merchant: 'Whole Foods Market',
      amount: -89.47,
      category: 'Groceries',
    },
    {
      id: 2,
      date: '2023-06-13',
      merchant: 'Netflix',
      amount: -14.99,
      category: 'Entertainment',
    },
    {
      id: 3,
      date: '2023-06-12',
      merchant: 'Shell Gas Station',
      amount: -45.23,
      category: 'Transportation',
    },
    {
      id: 4,
      date: '2023-06-10',
      merchant: 'Amazon',
      amount: -67.89,
      category: 'Shopping',
    },
    {
      id: 5,
      date: '2023-06-09',
      merchant: 'Starbucks',
      amount: -5.43,
      category: 'Food & Drink',
    },
    {
      id: 6,
      date: '2023-06-08',
      merchant: 'Salary Deposit',
      amount: 3245.78,
      category: 'Income',
    },
    {
      id: 7,
      date: '2023-06-07',
      merchant: 'AT&T',
      amount: -89.99,
      category: 'Utilities',
    },
  ];

  const spendingData = [
    { name: 'Groceries', value: 450, lastMonth: 420, color: '#0088FE' },
    { name: 'Entertainment', value: 300, lastMonth: 180, color: '#00C49F' },
    { name: 'Transportation', value: 200, lastMonth: 220, color: '#FFBB28' },
    { name: 'Shopping', value: 150, lastMonth: 200, color: '#FF8042' },
    { name: 'Utilities', value: 180, lastMonth: 175, color: '#8884d8' },
    { name: 'Food & Drink', value: 120, lastMonth: 100, color: '#82ca9d' },
  ];

  const weeklySpendingData = [
    { name: 'Week 1', Groceries: 120, Entertainment: 85, Transportation: 45 },
    { name: 'Week 2', Groceries: 100, Entertainment: 75, Transportation: 55 },
    { name: 'Week 3', Groceries: 140, Entertainment: 90, Transportation: 50 },
    { name: 'Week 4', Groceries: 90, Entertainment: 50, Transportation: 50 },
  ];

  const monthlySpendingData = [
    { name: 'Jan', Groceries: 400, Entertainment: 240, Transportation: 180 },
    { name: 'Feb', Groceries: 380, Entertainment: 260, Transportation: 190 },
    { name: 'Mar', Groceries: 420, Entertainment: 280, Transportation: 200 },
    { name: 'Apr', Groceries: 450, Entertainment: 300, Transportation: 210 },
    { name: 'May', Groceries: 430, Entertainment: 320, Transportation: 220 },
    { name: 'Jun', Groceries: 450, Entertainment: 300, Transportation: 200 },
  ];

  const budgetData = [
    { category: 'Groceries', spent: 280, budget: 400, percentage: 70 },
    { category: 'Entertainment', spent: 150, budget: 200, percentage: 75 },
    { category: 'Transportation', spent: 180, budget: 200, percentage: 90 },
  ];

  const savingsGoals = [
    { name: 'Japan Trip', saved: 2000, goal: 5000, percentage: 40 },
    { name: 'New Laptop', saved: 800, goal: 1500, percentage: 53 },
    { name: 'Emergency Fund', saved: 5000, goal: 10000, percentage: 50 },
  ];

  const aiInsights = [
    "You've spent 35% on food — 10% above your monthly average",
    'Entertainment spending is up $120 from last month',
    'You could save $85 by reducing coffee shop visits',
    'Your utility bills are 15% higher than this time last year',
  ];

  const notifications = [
    { type: 'warning', message: "You've used 80% of your food budget" },
    { type: 'info', message: 'No sync in 5 days' },
    {
      type: 'success',
      message: "You're on track to meet your Japan Trip savings goal",
    },
  ];

  // Handlers
  const handleSync = () => {
    const now = new Date();
    setLastSync(
      now.toISOString().slice(0, 10) + ' ' + now.toTimeString().slice(0, 5)
    );
  };

  const handleAskAI = (e) => {
    e.preventDefault();
    console.log('AI question:', aiQuestion);
    setAiQuestion('');
  };

  // Helper function to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // Custom components
  const ProgressBar = ({ percentage, color }) => (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="h-2.5 rounded-full"
        style={{ width: `${percentage}%`, backgroundColor: color }}
      ></div>
    </div>
  );

  const Card = ({ children, className = '' }) => (
    <div className={`bg-white p-4 rounded-lg shadow-sm ${className}`}>
      {children}
    </div>
  );

  const Button = ({
    children,
    onClick,
    variant = 'primary',
    className = '',
  }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium flex items-center gap-2 ${
        variant === 'primary'
          ? 'bg-[#007BFF] text-white hover:bg-blue-600'
          : 'bg-transparent border border-[#007BFF] text-[#007BFF] hover:bg-blue-50'
      } ${className}`}
    >
      {children}
    </button>
  );

  const IconBox = ({ icon }) => (
    <div className="w-10 h-10 rounded-full bg-[#B3D8FF] flex items-center justify-center text-[#007BFF]">
      {icon}
    </div>
  );

  const Alert = ({ type, message }) => {
    const bgColor =
      type === 'warning'
        ? 'bg-yellow-50 border-yellow-200'
        : type === 'info'
        ? 'bg-blue-50 border-blue-200'
        : 'bg-green-50 border-green-200';

    const textColor =
      type === 'warning'
        ? 'text-yellow-700'
        : type === 'info'
        ? 'text-blue-700'
        : 'text-green-700';

    return (
      <div className={`p-3 rounded-md border ${bgColor} ${textColor} mb-3`}>
        {message}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-600 font-sans">
      <div className="">
        {/* Notifications */}
        <div className="mb-6">
          {notifications.map((notification, index) => (
            <Alert
              key={index}
              type={notification.type}
              message={notification.message}
            />
          ))}
        </div>

        {/* Account Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Account Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="col-span-1 md:col-span-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-gray-500 mb-1">Total Balance</div>
                  <div className="text-3xl font-bold">
                    {formatCurrency(accountData.totalBalance)}
                  </div>
                  <div className="text-sm mt-2">
                    Last synced: {lastSync}
                    <Button
                      onClick={handleSync}
                      variant="secondary"
                      className="ml-2 py-1 px-2 text-xs"
                    >
                      <RefreshCw size={14} />
                      Sync Now
                    </Button>
                  </div>
                </div>
                <IconBox icon={<Wallet size={20} />} />
              </div>
            </Card>

            <Card>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-gray-500 mb-1">Total Spent</div>
                  <div className="text-2xl font-bold text-red-500">
                    {formatCurrency(accountData.totalSpent)}
                  </div>
                  <div className="text-sm">This Month</div>
                </div>
                <IconBox icon={<CreditCard size={20} />} />
              </div>
            </Card>

            <Card>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-gray-500 mb-1">Total Income</div>
                  <div className="text-2xl font-bold text-green-500">
                    {formatCurrency(accountData.totalIncome)}
                  </div>
                  <div className="text-sm">This Month</div>
                </div>
                <IconBox icon={<DollarSign size={20} />} />
              </div>
            </Card>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <Button variant="primary">
              <CreditCard size={16} />
              Connect Bank
            </Button>
            <Button variant="secondary">
              <Upload size={16} />
              Upload PDF
            </Button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Transactions */}
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Recent Transactions</h3>
                <Button variant="secondary" className="text-sm py-1">
                  View All
                  <ArrowUpRight size={16} />
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-medium">Date</th>
                      <th className="text-left py-2 font-medium">Merchant</th>
                      <th className="text-left py-2 font-medium">Category</th>
                      <th className="text-right py-2 font-medium">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTransactions.map((transaction) => (
                      <tr
                        key={transaction.id}
                        className="border-b border-gray-100"
                      >
                        <td className="py-3">{transaction.date}</td>
                        <td className="py-3">{transaction.merchant}</td>
                        <td className="py-3">
                          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                            {transaction.category}
                          </span>
                        </td>
                        <td
                          className={`py-3 text-right ${
                            transaction.amount < 0
                              ? 'text-red-500'
                              : 'text-green-500'
                          }`}
                        >
                          {formatCurrency(transaction.amount)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Spending Breakdown */}
            <Card>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">Spending Breakdown</h3>
                  <div className="flex border border-gray-200 rounded-md overflow-hidden">
                    <button
                      className={`px-3 py-1 text-sm ${
                        viewMode === 'monthly'
                          ? 'bg-[#007BFF] text-white'
                          : 'bg-white'
                      }`}
                      onClick={() => setViewMode('monthly')}
                    >
                      Monthly
                    </button>
                    <button
                      className={`px-3 py-1 text-sm ${
                        viewMode === 'weekly'
                          ? 'bg-[#007BFF] text-white'
                          : 'bg-white'
                      }`}
                      onClick={() => setViewMode('weekly')}
                    >
                      Weekly
                    </button>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-1 rounded-md hover:bg-gray-100">
                    <PieChartIcon size={20} className="text-gray-500" />
                  </button>
                  <button className="p-1 rounded-md hover:bg-gray-100">
                    <BarChart3 size={20} className="text-gray-500" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2 text-center">
                    By Category
                  </h4>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={spendingData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) =>
                            `${name} ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          {spendingData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) => formatCurrency(Number(value))}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2 text-center">
                    {viewMode === 'monthly'
                      ? 'Monthly Trend'
                      : 'Weekly Breakdown'}
                  </h4>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={
                          viewMode === 'monthly'
                            ? monthlySpendingData
                            : weeklySpendingData
                        }
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip
                          formatter={(value) => formatCurrency(Number(value))}
                        />
                        <Legend />
                        <Bar dataKey="Groceries" fill="#0088FE" />
                        <Bar dataKey="Entertainment" fill="#00C49F" />
                        <Bar dataKey="Transportation" fill="#FFBB28" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">
                  This Month vs. Last Month
                </h4>
                <div className="space-y-2">
                  {spendingData.map((category, index) => {
                    const diff = category.value - category.lastMonth;
                    const percentDiff = (
                      (diff / category.lastMonth) *
                      100
                    ).toFixed(1);

                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <div
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: category.color }}
                          ></div>
                          <span>{category.name}</span>
                        </div>
                        <div
                          className={
                            diff > 0 ? 'text-red-500' : 'text-green-500'
                          }
                        >
                          {diff > 0 ? '+' : ''}
                          {formatCurrency(diff)} ({diff > 0 ? '+' : ''}
                          {percentDiff}%)
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>

            {/* Budget Snapshot */}
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Budget Snapshot</h3>
                <Button variant="secondary" className="text-sm py-1">
                  Manage Budgets
                </Button>
              </div>

              <div className="space-y-4">
                {budgetData.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <div>
                        <span className="font-medium">{item.category}</span>
                        {item.percentage >= 80 && (
                          <span className="ml-2 text-xs px-2 py-0.5 bg-red-100 text-red-700 rounded-full">
                            Warning
                          </span>
                        )}
                      </div>
                      <div>
                        {formatCurrency(item.spent)} /{' '}
                        {formatCurrency(item.budget)}
                      </div>
                    </div>
                    <ProgressBar
                      percentage={item.percentage}
                      color={item.percentage >= 80 ? '#EF4444' : '#007BFF'}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* AI Insights Panel */}
            <Card>
              <h3 className="text-xl font-bold mb-4">AI Insights</h3>

              <form onSubmit={handleAskAI} className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    value={aiQuestion}
                    onChange={(e) => setAiQuestion(e.target.value)}
                    placeholder="Ask about your finances..."
                    className="w-full p-3 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#007BFF]"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </form>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-md">
                  <div className="mt-1">
                    <HelpCircle size={16} className="text-[#007BFF]" />
                  </div>
                  <div>
                    <div className="font-medium text-[#007BFF]">
                      Try asking:
                    </div>
                    <div className="text-sm mt-1">
                      "Where did I overspend this month?"
                      <br />
                      "How can I save $100 next month?"
                      <br />
                      "What are my biggest expenses?"
                    </div>
                  </div>
                </div>

                {aiInsights.map((insight, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-md">
                    {insight}
                  </div>
                ))}
              </div>
            </Card>

            {/* Savings Goals */}
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Savings Goals</h3>
                <Button variant="secondary" className="text-sm py-1">
                  <Plus size={16} />
                  Add Goal
                </Button>
              </div>

              <div className="space-y-4">
                {savingsGoals.map((goal, index) => (
                  <div
                    key={index}
                    className="p-3 border border-gray-100 rounded-md"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{goal.name}</span>
                      <span>
                        {formatCurrency(goal.saved)} /{' '}
                        {formatCurrency(goal.goal)}
                      </span>
                    </div>
                    <ProgressBar percentage={goal.percentage} color="#34D399" />
                    <div className="mt-2 text-sm text-gray-500">
                      {goal.percentage}% complete
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card>
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="secondary" className="justify-center">
                  <Download size={16} />
                  Export Data
                </Button>
                <Button variant="secondary" className="justify-center">
                  <Calendar size={16} />
                  Schedule Payment
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;
