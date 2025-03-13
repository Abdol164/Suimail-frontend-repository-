import React from 'react';

const wallets = [
  { 
    id: 'sui-wallet', 
    name: 'Sui Wallet', 
    icon: '/png/Sui Symbol.png',  // the images needed
    category: 'main' 
  },
  { 
    id: 'suiet', 
    name: 'Suiet', 
    icon: '/png/suiet.png', 
    category: 'main' 
  },
  { 
    id: 'nightly', 
    name: 'Nightly', 
    icon: '/png/nightly.png', 
    category: 'main' 
  },
  { 
    id: 'ethos', 
    name: 'Ethos', 
    icon: '/png/ethos.png', 
    category: 'main' 
  },
  { 
    id: 'martian', 
    name: 'Martian', 
    icon: '/png/martian.png', 
    category: 'main' 
  },
  { 
    id: 'surf', 
    name: 'Surf Wallet', 
    icon: '/png/surf.png', 
    category: 'main' 
  }
];

const web2Logins = [
  { 
    id: 'google', 
    name: 'Google', 
    icon: '/path/to/google.png' 
  },
  { 
    id: 'discord', 
    name: 'Discord', 
    icon: '/png/discord-login.png' 
  }
];

const WalletConnect = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-blue-500 flex items-center justify-center gap-2">
            <img 
              src="/png/suimail-mark.png" 
              alt="SUIMAIL" 
              className="w-6 h-6"
            />
            SUIMAIL
          </h1>
          <h2 className="text-xl font-semibold mt-4 text-gray-700">Login</h2>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {wallets.map(wallet => (
            <button
              key={wallet.id}
              className="p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center gap-2"
            >
              <img 
                src={wallet.icon} 
                alt={wallet.name} 
                className="w-8 h-8 object-contain"
              />
              <span className="text-sm text-gray-600 font-medium">{wallet.name}</span>
            </button>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">Web2 Login</p>
          <div className="flex justify-center gap-4">
            {web2Logins.map(login => (
              <button
                key={login.id}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <img 
                  src={login.icon} 
                  alt={login.name} 
                  className="w-6 h-6 object-contain"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletConnect;