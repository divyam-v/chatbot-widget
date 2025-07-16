(function() {
  const currentScript = document.currentScript;
  const chatbotURL = currentScript.getAttribute('data-chatbot-url') || 'https://default-bot.com';
 
  // Create iframe
  const iframe = document.createElement('iframe');
  iframe.id = 'chatbot-widget';
  iframe.src = chatbotURL;
 
  // Style the iframe
  Object.assign(iframe.style, {
    position: 'fixed',
    bottom: '90px',
    right: '20px',
    width: '350px',
    height: '500px',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
    display: 'none',
    zIndex: 9998
  });
 
  // Create the floating button
  const button = document.createElement('button');
  button.id = 'chatbot-button';
  button.innerHTML = '💬';
  Object.assign(button.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    fontSize: '24px',
    cursor: 'pointer',
    zIndex: 9999
  });
 
  // Toggle iframe on button click
  button.addEventListener('click', function() {
    iframe.style.display = iframe.style.display === 'block' ? 'none' : 'block';
  });
 
  // Inject into DOM
  document.body.appendChild(iframe);
  document.body.appendChild(button);
})();
 