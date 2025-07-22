(function () {
  const chatbotURL =
    "https://02b387d14d75.ngrok-free.app/genie/genie/weblink/f5168cb5-99c3-495e-8af4-6bcfd5241ecc";

  const iframeWrapper = document.createElement("div");
  iframeWrapper.id = "chatbot-wrapper";
  iframeWrapper.style.display = "none";
  iframeWrapper.style.position = "fixed";
  iframeWrapper.style.zIndex = "9998";

  const iframe = document.createElement("iframe");
  iframe.id = "chatbot-widget";
  iframe.src = chatbotURL;
  iframe.style.border = "none";

  const closeBtn = document.createElement("button");
  closeBtn.id = "chatbot-close";
  closeBtn.innerHTML = "&#10005;";
  closeBtn.style.position = "absolute";
  closeBtn.style.top = "15px";
  closeBtn.style.left = "15px";
  closeBtn.style.backgroundColor = "transparent";
  closeBtn.style.color = "#6A58A4";
  closeBtn.style.border = "none";
  closeBtn.style.borderRadius = "50%";
  closeBtn.style.width = "45px";
  closeBtn.style.height = "45px";
  closeBtn.style.cursor = "pointer";
  closeBtn.style.zIndex = "9999";

  iframeWrapper.appendChild(iframe);
  iframeWrapper.appendChild(closeBtn);

  const button = document.createElement("button");
  button.id = "chatbot-button";
  button.innerHTML = `<img src="https://divyam-v.github.io/chatbot-widget/logo.png" alt="chatbot" style=" height: 100%;">`;

  Object.assign(button.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    fontSize: "24px",
    cursor: "pointer",
    zIndex: 9999,
  });

  const setStyles = () => {
    const isMobile = window.innerWidth <= 768;

    Object.assign(iframeWrapper.style, {
      bottom: isMobile ? "0" : "10px",
      right: isMobile ? "0" : "20px",
      left: isMobile ? "0" : "auto",
      top: isMobile ? "0" : "auto",
      width: isMobile ? "100%" : "480px",
      height: isMobile ? "100%" : "680px",
      borderRadius: isMobile ? "0" : "10px",
      boxShadow: isMobile ? "none" : "0 8px 16px rgba(0,0,0,0.3)",
      backgroundColor: "#fff",
    });

    Object.assign(iframe.style, {
      width: "100%",
      height: "100%",
      borderRadius: isMobile ? "0" : "10px",
    });
  };

  setStyles();

  button.addEventListener("click", () => {
    setStyles();
    iframeWrapper.style.display = "block";
    button.style.display = "none";
  });

  closeBtn.addEventListener("click", () => {
    iframeWrapper.style.display = "none";
    button.style.display = "block";
  });

  window.addEventListener("resize", () => {
    if (iframeWrapper.style.display === "block") {
      setStyles();
    }
  });

  document.body.appendChild(iframeWrapper);
  document.body.appendChild(button);
})();
