// --- FLOW EMOTIVE AI SIMULATION ---
const aiResponses = {
    sad: "Oh, my dear... I can feel a heavy cloud over you. 💜 Please remember it's okay not to be okay. For today, try out some **Creativity & Expression** tools below! Doodling for just 10 minutes or writing a small poem can help move that heavy energy out of your chest. I am right here holding your hand.",
    anxious: "Breathe in... and breathe out. 🌊 Your thoughts are racing, but you are completely safe here. Let's practice a grounding technique: look down at our **Daily Wellness Toolbox** and try a *Breathing exercise (4-7-8 technique)* or go on a *15-minute nature walk* without your phone. Let's slow reality down together. 💛",
    depressed: "I hear you, and I see your pain. It takes so much courage to wake up when everything feels dark. You matter so much. 🌿 If you have a tiny bit of energy, try an easy *Herbal tea ritual* or simply clear one tiny space, like a desk drawer. Tiny victories matter. I am wrapped in warmth around you.",
    routine: "Looking to switch up your habits? ✨ Try setting a *Digital detox* one hour before bed, or use our *Aromatherapy pairing* to light a calming candle like Lavender Calm during your nighttime tasks! Routine changes heal the spirit.",
    hello: "Hello gentle soul! ✨ I'm Flow, your emotional companion. I am here to listen, comfort, and guide your routine. How is your heart feeling right now?",
    default: "Thank you for sharing your heart with me. 🌸 Every word you say matters. Try looking through our **Daily Wellness Toolbox** below to find an activity that matches your energy level right now. I am listening with all my love."
};

function sendMessage() {
    const userInputField = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const userText = userInputField.value.trim().toLowerCase();

    if (userText === "") return;

    // Append User Message
    chatBox.innerHTML += `<div class="message user-message">${userInputField.value}</div>`;
    userInputField.value = ""; // Clear input
    
    // Auto Scroll
    chatBox.scrollTop = chatBox.scrollHeight;

    // Emotive AI Thinking Logic
    setTimeout(() => {
        let reply = aiResponses.default;

        if (userText.includes('sad') || userText.includes('cry') || userText.includes('hurt')) {
            reply = aiResponses.sad;
        } else if (userText.includes('anxious') || userText.includes('anxiety') || userText.includes('scared') || userText.includes('panic')) {
            reply = aiResponses.anxious;
        } else if (userText.includes('depressed') || userText.includes('depression') || userText.includes('lonely') || userText.includes('empty')) {
            reply = aiResponses.depressed;
        } else if (userText.includes('routine') || userText.includes('habit') || userText.includes('activity') || userText.includes('suggestion')) {
            reply = aiResponses.routine;
        } else if (userText.includes('hi') || userText.includes('hello') || userText.includes('hey')) {
            reply = aiResponses.hello;
        }

        chatBox.innerHTML += `<div class="message ai-message">🌸 ${reply}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

// Allow "Enter" key trigger
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});


// --- WICK SHOPPING CART SYSTEM ---
let cart = [];
let totalCost = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    totalCost += price;
    updateCartUI();
}

function updateCartUI() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "Your cart is empty.";
    } else {
        cartItemsDiv.innerHTML = cart.map(item => `• ${item.name} ($${item.price})`).join('<br>');
    }

    cartTotalSpan.innerText = totalCost.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty! Choose a therapeutic candle to bring light to your room.");
        return;
    }
    
    alert(`✨ Purchase Successful! ✨\n\nThank you for supporting "Flow & Wick". We are preparing your order of ${cart.length} item(s) to send warmth and light straight to your home.\n\nTotal Paid: $${totalCost.toFixed(2)}`);
    
    // Reset
    cart = [];
    totalCost = 0;
    updateCartUI();
}