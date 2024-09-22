import React, { useEffect, useState } from 'react';
import './BankIconsTicker.css';

function BankIconsTicker() {
  const [icons, setIcons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadIcons = async () => {
      try {
        const iconModules = import.meta.glob('../assets/banklogo/*.{png,jpg,jpeg,svg}', { eager: true });
        
        const loadedIcons = Object.entries(iconModules).map(([path, module]) => ({
          path,
          src: module.default
        }));
        
        if (loadedIcons.length === 0) {
          setError('No icons found in the specified directory');
        } else {
          setIcons(loadedIcons);
        }
      } catch (err) {
        console.error('Error loading icons:', err);
        setError('Failed to load icons');
      }
    };

    loadIcons();
  }, []);

  const formatBankName = (filename) => {
    const nameWithoutExtension = filename.split('/').pop().split('.')[0];
    const parts = nameWithoutExtension.split('_');
    if (parts.length > 1) {
      return parts.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    return nameWithoutExtension;
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (icons.length === 0) {
    return <div>Loading icons...</div>;
  }

  return (
    <div className="ticker-container">
      <div className="ticker">
        {icons.concat(icons).map(({ path, src }, index) => {
          const bankName = formatBankName(path);
          return (
            <div key={`${path}-${index}`} className="ticker-item">
              <img 
                src={src} 
                alt={bankName} 
                className="w-20 h-20 object-contain"
                onError={(e) => {
                  console.error('Image failed to load:', path);
                  e.target.src = 'path/to/placeholder-image.png'; // Replace with actual placeholder
                }}
              />
              <p className="text-xs mt-1">{bankName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BankIconsTicker;