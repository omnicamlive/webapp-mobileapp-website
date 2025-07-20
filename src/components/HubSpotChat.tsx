import { useEffect } from 'react';

const HubSpotChat = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'hs-script-loader'; // The same ID HubSpot uses
    script.defer = true;
    script.async = true;
    
    // Set the source to your HubSpot tracking code URL
    // Make sure to replace 'YOUR_ID' with your actual HubSpot ID from the tracking code
    script.src = '//js-na2.hs-scripts.com/243363754.js';

    // Append the script to the body of the document
    document.body.appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      const scriptToRemove = document.getElementById('hs-script-loader');
      if (scriptToRemove) {
        document.body.removeChild(scriptToRemove);
      }
    };
  }, []); // The empty dependency array ensures this effect runs only once after the component mounts

  return null; // This component doesn't render anything itself
};

export default HubSpotChat;