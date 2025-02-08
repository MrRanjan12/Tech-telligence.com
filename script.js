function navigateTo(sectionId) {
     const section = document.querySelector(sectionId);
     if (section) {
         section.scrollIntoView({ behavior: 'smooth' });
     }
     document.getElementById('nav-links').classList.remove('active');
 }
 
 function toggleMenu() {
     const navLinks = document.getElementById('nav-links');
     navLinks.classList.toggle('active');  // Toggle the 'active' class to show/hide menu
 }

 

function toggleChat() {
     const chatContainer = document.getElementById("chatContainer");
     chatContainer.style.display = chatContainer.style.display === "block" ? "none" : "block";
 }
 
 function sendMessage(option) {
     const chatMessages = document.getElementById("chatMessages");
 
     // Create User Message
     const userMessage = document.createElement("div");
     userMessage.textContent = "🔹 " + getOptionText(option);
     userMessage.classList.add("user-message");
     chatMessages.appendChild(userMessage);
 
     // Chatbot Response (Delayed for Effect)
     setTimeout(() => {
         const botMessage = document.createElement("div");
         botMessage.textContent = "🤖 " + getBotResponse(option);
         botMessage.classList.add("bot-message");
         chatMessages.appendChild(botMessage);
 
         chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to bottom
     }, 500);
 }
 
 function getOptionText(option) {
     const options = {
         services: "Our Services",
         pricing: "Pricing & Plans",
         contact: "Contact Info",
         career: "Career Opportunities",
         exit: "Exit Chat"
     };
     return options[option] || "Unknown Option";
 }
 
 function getBotResponse(option) {
     const responses = {
         services: "We offer web development, cloud solutions, IT consulting, and cybersecurity services.",
         pricing: "Our plans start from $499 for basic web development, $999 for business solutions.",
         contact: "You can reach us at contact@tech&telligence.com or call us at +1234567890.",
         career: "We are hiring! Send your resume to career@tech&telligence.com.",
         exit: "Thank you for visiting! Have a great day. 😊"
     };
     return responses[option] || "I didn't understand that.";
 }
 