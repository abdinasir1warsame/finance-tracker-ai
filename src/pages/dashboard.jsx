import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardOverview from '../components/dashboard-components/overview';
import SavingGoals from '../components/dashboard-components/savingGoals';
import {
  Home,
  PiggyBank,
  Settings,
  HelpCircle,
  Bell,
  Menu,
  X,
} from 'lucide-react';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const tabs = [
    { name: 'Overview', icon: Home },
    { name: 'Account Savings', icon: PiggyBank },
    { name: 'Account Settings', icon: Settings },
    { name: 'Help & Support', icon: HelpCircle },
  ];

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://picsum.photos/id/1005/200/200',
  };

  function Sidebar() {
    return (
      <div className="hidden md:flex md:flex-shrink-0 md:w-64 md:flex-col">
        <div className="flex flex-col h-full">
          <Link
            to="/"
            className="flex items-center justify-center h-16 px-4 border-b border-gray-200"
          >
            <h1 className="text-xl font-bold text-[#007BFF]">FinanceAI</h1>
          </Link>

          <div className="flex-1 px-4 py-6 overflow-y-auto">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                      activeTab === tab.name
                        ? 'bg-[#B3D8FF] text-[#007BFF] font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div
                      className={`mr-3 ${
                        activeTab === tab.name
                          ? 'text-[#007BFF]'
                          : 'text-gray-500'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src={user.avatar}
                alt="User avatar"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function TopNav() {
    return (
      <div className="sticky top-0 z-20 flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200 md:px-12 lg:px-24">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800">{activeTab}</h2>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Bell className="w-6 h-6" />
          </button>
          <button className="p-2 text-gray-600 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }

  function MobileBottomNav() {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 md:hidden">
        <div className="flex justify-around">
          {tabs.slice(0, 4).map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.name}
                onClick={() => {
                  setActiveTab(tab.name);
                  setMobileNavOpen(false);
                }}
                className={`flex flex-col items-center justify-center w-full py-2 ${
                  activeTab === tab.name ? 'text-[#007BFF]' : 'text-gray-600'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="text-xs mt-1">{tab.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  function MainContent() {
    return (
      <div className="flex-1 p-6 pb-20 md:pb-6">
        {activeTab === 'Overview' && <DashboardOverview />}
        {activeTab === 'Account Savings' && <SavingGoals />}
        {activeTab === 'Account Settings' && (
          <p className="text-gray-600">
            Manage your account preferences and profile settings here.
          </p>
        )}
        {activeTab === 'Help & Support' && (
          <p className="text-gray-600">
            Find FAQs, contact support, or report issues here.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <div className="flex flex-col flex-1 overflow-hidden">
          <TopNav />
          <main className="flex-1 overflow-y-auto">
            <MainContent />
          </main>
          <MobileBottomNav />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
