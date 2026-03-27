const chatBox = document.getElementById("chatBox");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

// time fprmatting
function getTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

// msg render
function renderMessage(text, sender) {
  const div = document.createElement("div");
  div.classList.add("message", sender);

  div.innerHTML = `
    <p>${text}</p>
    <span>${getTime()}</span>
  `;

  chatBox.appendChild(div);

  // Auto scroll
  chatBox.scrollTop = chatBox.scrollHeight;

}

// Simulate reply by timeout
function simulateReply() {
  const replies = [
    "I will call u later",
    "kkkk",
    "come here asap",
    "ok fineeee",
    "Terrible",
    "Sounds good!"
  ];

  const randomReply = replies[Math.floor(Math.random() * replies.length)];

  // after 2s msg is simulated
  setTimeout(() => {
    renderMessage(randomReply, "bot");
  }, 2000);
}

// Send message
function sendMessage() {
  const text = input.value.trim();

  if (text === "") return;

  renderMessage(text, "user");
  input.value = "";

  simulateReply();
}

// send msg using button
sendBtn.addEventListener("click", sendMessage);

// sending msg using enter
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});