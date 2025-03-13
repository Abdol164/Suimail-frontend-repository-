import React from 'react';
import { Mail, Send, FileText, Trash2, Archive, AlertCircle, CreditCard, Gift, Settings, HelpCircle } from 'lucide-react';

const Sidebar = ({ activeItem = 'inbox' }) => {
  // Navigation items data
  const mainNavItems = [
    { id: 'inbox', icon: <Mail size={20} />, label: 'Inbox' },
    { id: 'sent', icon: <Send size={20} />, label: 'Sent' },
    { id: 'draft', icon: <FileText size={20} />, label: 'Draft' },
    { id: 'spam', icon: <AlertCircle size={20} />, label: 'Spam' },
    { id: 'archive', icon: <Archive size={20} />, label: 'Archive' },
    { id: 'trash', icon: <Trash2 size={20} />, label: 'Trash' }
  ];
  
  const secondaryNavItems = [
    { id: 'payment', icon: <CreditCard size={20} />, label: 'Payment' },
    { id: 'subscription', icon: <Gift size={20} />, label: 'Subscription' },
    { id: 'help', icon: <HelpCircle size={20} />, label: 'Help Center' },
    { id: 'settings', icon: <Settings size={20} />, label: 'Settings' }
  ];

  // Function to render nav items
  const renderNavItems = (items) => {
    return items.map(item => (
      <button
        key={item.id}
        className={`flex items-center px-4 py-2 rounded-lg w-full text-left hover:bg-blue-50 ${
          activeItem === item.id ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
        }`}
      >
        <span className="mr-3 text-gray-500">{item.icon}</span>
        <span className="text-sm font-medium">{item.label}</span>
      </button>
    ));
  };

  return (
    <div className="w-56 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Logo */}
      <div className="px-4 py-4">
        {/* <div className="flex items-center">
          <div className="mr-2 text-blue-500">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8L24 16L16 24L8 16L16 8Z" fill="#2196F3" />
              <path d="M16 2L22 8H10L16 2Z" fill="#2196F3" />
            </svg>
          </div>
          <span className="text-blue-500 font-bold text-2xl">SUIMAIL</span>
        </div> */}
        <img 
          src="/png/suimail.sig.png" 
          alt="SuiMail logo-illustration" 
          className="mb-4 max-w-[150px]"
        />
      </div>

      {/* Compose button */}
      <div className="px-4 pt-2 pb-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full flex items-center justify-center">
          <span className="mr-1">+</span>
          <span className="text-sm font-medium">Compose</span>
        </button>
      </div>

      {/* Navigation sections */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 space-y-1">
          {renderNavItems(mainNavItems)}
        </nav>
        
        <div className="border-t border-gray-200 my-2"></div>
        
        <nav className="flex-1 px-2 space-y-1 mb-4">
          {renderNavItems(secondaryNavItems)}
        </nav>
      </div>

      {/* User profile */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8 rounded-full"
              src="/api/placeholder/32/32"
              alt="User avatar"
            />
          </div>
          <div className="ml-3">
            <div className="text-sm font-medium text-gray-700">Lacasa</div>
            <div className="text-xs text-gray-500 truncate">lacasa@suimail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;