/* ==========================================================================
   URGENT.NG — APPLICATION JAVASCRIPT
   Interactive Behaviors, Calculations, Offer Simulations & Modal Management
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  updateEarnings();
  initScrollAnimations();
});

// ============================================================
// 1. NAVBAR SCROLL EFFECT & MOBILE MENU
// ============================================================
function initNavbarScroll() {
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 16px rgba(10, 14, 20, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
}

function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');
  if (btn && navLinks) {
    btn.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '72px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#ffffff';
        navLinks.style.padding = '20px';
        navLinks.style.borderBottom = '1px solid #e1e6ec';
        navLinks.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
      }
    });
  }
}

// ============================================================
// 2. DUAL ROLE TAB SWITCHER (HOW IT WORKS)
// ============================================================
function switchRoleTab(role) {
  const reqBtn = document.getElementById('tabRequesterBtn');
  const runBtn = document.getElementById('tabRunnerBtn');
  const reqSteps = document.getElementById('requesterSteps');
  const runSteps = document.getElementById('runnerSteps');

  if (role === 'requester') {
    reqBtn.classList.add('active');
    runBtn.classList.remove('active');
    reqSteps.style.display = 'grid';
    runSteps.style.display = 'none';
    reqSteps.classList.remove('tab-fade-slide');
    void reqSteps.offsetWidth;
    reqSteps.classList.add('tab-fade-slide');
  } else {
    runBtn.classList.add('active');
    reqBtn.classList.remove('active');
    runSteps.style.display = 'grid';
    reqSteps.style.display = 'none';
    runSteps.classList.remove('tab-fade-slide');
    void runSteps.offsetWidth;
    runSteps.classList.add('tab-fade-slide');
  }
}

// ============================================================
// 3. MARKETPLACE CATEGORY FILTER
// ============================================================
function filterErrands(category, buttonEl) {
  // Update button active states
  const chips = document.querySelectorAll('.filter-chip');
  chips.forEach(chip => chip.classList.remove('active'));
  if (buttonEl) buttonEl.classList.add('active');

  // Filter cards with smooth entrance transition
  const cards = document.querySelectorAll('.errand-listing-card');
  let visibleIndex = 0;
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
      card.style.animation = `heroFadeUp 0.35s var(--ease-out-expo) ${visibleIndex * 0.05}s backwards`;
      visibleIndex++;
    } else {
      card.style.display = 'none';
    }
  });
}

// ============================================================
// 4. RUNNER EARNINGS CALCULATOR
// ============================================================
function updateEarnings() {
  const errandsSlider = document.getElementById('errandsSlider');
  const priceSlider = document.getElementById('priceSlider');
  const daysSlider = document.getElementById('daysSlider');

  if (!errandsSlider || !priceSlider || !daysSlider) return;

  const errandsPerDay = parseInt(errandsSlider.value, 10);
  const avgFee = parseInt(priceSlider.value, 10);
  const daysPerWeek = parseInt(daysSlider.value, 10);

  // Displays
  document.getElementById('errandsCountDisplay').textContent = `${errandsPerDay} errand${errandsPerDay > 1 ? 's' : ''} / day`;
  document.getElementById('priceCountDisplay').textContent = `₦${avgFee.toLocaleString()}`;
  document.getElementById('daysCountDisplay').textContent = `${daysPerWeek} day${daysPerWeek > 1 ? 's' : ''} / week`;

  // Calculation: (errands * fee * days * 4 weeks)
  const monthlyTotal = errandsPerDay * avgFee * daysPerWeek * 4;
  const totalDisplay = document.getElementById('monthlyTotalDisplay');
  if (typeof animateNumberValue === 'function') {
    animateNumberValue(totalDisplay, prevMonthlyTotal, monthlyTotal, 350);
    prevMonthlyTotal = monthlyTotal;
  } else {
    totalDisplay.textContent = `₦${monthlyTotal.toLocaleString()}`;
  }
}

// ============================================================
// 5. FAQ ACCORDION
// ============================================================
function toggleFaq(buttonEl) {
  const item = buttonEl.closest('.faq-item');
  const isOpen = item.classList.contains('open');

  // Close all other items
  document.querySelectorAll('.faq-item').forEach(el => {
    el.classList.remove('open');
  });

  if (!isOpen) {
    item.classList.add('open');
  }
}

// ============================================================
// 6. MODAL SYSTEM
// ============================================================
function openPostErrandModal(prefillTitle = '', prefillPickup = '', prefillDest = '') {
  const modal = document.getElementById('postErrandModal');
  const formView = document.getElementById('postErrandFormView');
  const simView = document.getElementById('offersSimView');
  const title = document.getElementById('postModalTitle');
  const footer = document.getElementById('postModalFooter');

  // Reset to form view
  formView.style.display = 'flex';
  simView.classList.remove('active');
  footer.style.display = 'flex';
  title.textContent = 'Post a New Errand';

  if (prefillTitle) document.getElementById('errandTitleInput').value = prefillTitle;
  if (prefillPickup) document.getElementById('errandPickupInput').value = prefillPickup;
  if (prefillDest) document.getElementById('errandDestinationInput').value = prefillDest;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openRunnerModal() {
  const modal = document.getElementById('runnerModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openLoginModal() {
  window.location.href = "login.html";
}

function openOfferModal(title, budget) {
  showToast(`⚡ Submitting offer on: "${title}" at ${budget}. Registering runner credentials...`);
  setTimeout(() => {
    openRunnerModal();
  }, 700);
}

function closeModals() {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = 'auto';
}

// Handle Quick Launch Bar on Hero
function handleQuickLaunch() {
  const pickup = document.getElementById('quickPickup').value.trim();
  const dest = document.getElementById('quickDestination').value.trim();
  const category = document.getElementById('quickCategory').value;

  const defaultTitle = pickup && dest 
    ? `Deliver package from ${pickup} to ${dest}`
    : 'Urgent Delivery Errand';

  openPostErrandModal(defaultTitle, pickup, dest);
  if (category) {
    document.getElementById('errandCategorySelect').value = category;
  }
}

// ============================================================
// 7. ERRAND POSTING & LIVE OFFERS SIMULATION
// ============================================================
function submitErrand() {
  const title = document.getElementById('errandTitleInput').value.trim();
  const pickup = document.getElementById('errandPickupInput').value.trim();
  const dest = document.getElementById('errandDestinationInput').value.trim();

  if (!title) {
    showToast('⚠️ Please specify what needs to be done.');
    document.getElementById('errandTitleInput').focus();
    return;
  }
  if (!pickup) {
    showToast('⚠️ Please provide a pickup location.');
    document.getElementById('errandPickupInput').focus();
    return;
  }
  if (!dest) {
    showToast('⚠️ Please provide a destination address.');
    document.getElementById('errandDestinationInput').focus();
    return;
  }

  // Switch to Simulation View
  const formView = document.getElementById('postErrandFormView');
  const simView = document.getElementById('offersSimView');
  const modalTitle = document.getElementById('postModalTitle');
  const footer = document.getElementById('postModalFooter');
  const container = document.getElementById('simulatedOffersContainer');

  formView.style.display = 'none';
  simView.classList.add('active');
  modalTitle.textContent = `Broadcasting: "${title}"`;
  footer.style.display = 'none';
  container.innerHTML = '';

  showToast('📡 Errand request broadcasted to runners in your neighborhood!');

  // Simulate Runner 1 incoming offer in 1.4s
  setTimeout(() => {
    container.innerHTML += `
      <div class="sim-offer-card" style="animation: slideIn 0.3s ease;">
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="width:40px; height:40px; border-radius:50%; background:#e8f7cb; color:#3b5000; display:flex; align-items:center; justify-content:center; font-weight:700;">
            MI
          </div>
          <div>
            <div style="font-size:14px; font-weight:700; color:var(--cn-blue-700);">
              Musa Ibrahim <span style="color:#e28a2a;">★ 4.9</span>
            </div>
            <div style="font-size:12px; color:var(--cn-blue-400);">
              Motorcycle &bull; 176 completed &bull; Ready in 25 mins
            </div>
            <div style="font-size:12px; color:var(--cn-green-800); margin-top:2px;">
              "I am at ${pickup || 'the location'} right now. Ready to deliver promptly."
            </div>
          </div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:18px; font-weight:800; color:var(--cn-green-600); margin-bottom:4px;">₦2,500</div>
          <button class="btn btn-sm btn-primary" onclick="acceptSimulatedOffer('Musa Ibrahim', '₦2,500')">
            Accept & Secure
          </button>
        </div>
      </div>
    `;
    showToast('🔔 New offer received from Musa Ibrahim (₦2,500)!');
  }, 1400);

  // Simulate Runner 2 incoming offer in 2.8s
  setTimeout(() => {
    container.innerHTML += `
      <div class="sim-offer-card" style="animation: slideIn 0.3s ease;">
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="width:40px; height:40px; border-radius:50%; background:#eff1f4; color:#1b2330; display:flex; align-items:center; justify-content:center; font-weight:700;">
            AK
          </div>
          <div>
            <div style="font-size:14px; font-weight:700; color:var(--cn-blue-700);">
              Adaobi Kalu <span style="color:#e28a2a;">★ 5.0</span>
            </div>
            <div style="font-size:12px; color:var(--cn-blue-400);">
              Car Runner &bull; 94 completed &bull; Ready in 15 mins
            </div>
            <div style="font-size:12px; color:var(--cn-green-800); margin-top:2px;">
              "I have a safe temperature bag for your package."
            </div>
          </div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:18px; font-weight:800; color:var(--cn-green-600); margin-bottom:4px;">₦3,000</div>
          <button class="btn btn-sm btn-primary" onclick="acceptSimulatedOffer('Adaobi Kalu', '₦3,000')">
            Accept & Secure
          </button>
        </div>
      </div>
    `;
    showToast('🔔 New offer received from Adaobi Kalu (₦3,000)!');
  }, 2800);
}

function acceptSimulatedOffer(runnerName, amount) {
  closeModals();
  showToast(`🎉 Success! Errand assigned to ${runnerName}. ${amount} secured in Escrow.`);
}

function submitRunnerApplication() {
  const name = document.getElementById('runnerNameInput').value.trim();
  const phone = document.getElementById('runnerPhoneInput').value.trim();

  if (!name || !phone) {
    showToast('⚠️ Please enter your full name and phone number.');
    return;
  }

  closeModals();
  showToast(`🚀 Welcome to Urgent.ng, ${name}! Your runner profile is created. An OTP has been sent to ${phone}.`);
}

// ============================================================
// 8. CHAT WIDGET POPUP & MESSAGING
// ============================================================
function toggleChatPopup() {
  const popup = document.getElementById('chatBoxPopup');
  popup.classList.toggle('open');
  if (popup.classList.contains('open')) {
    document.getElementById('chatInputText').focus();
    const dot = document.querySelector('.fab-unread-dot');
    if (dot) dot.style.display = 'none';
  }
}

function sendChatMessage() {
  const input = document.getElementById('chatInputText');
  const text = input.value.trim();
  if (!text) return;

  const area = document.getElementById('chatMessagesArea');
  
  // Append outgoing
  const outBubble = document.createElement('div');
  outBubble.className = 'chat-bubble outgoing';
  outBubble.textContent = text;
  area.appendChild(outBubble);
  input.value = '';
  area.scrollTop = area.scrollHeight;

  // Auto response
  setTimeout(() => {
    const inBubble = document.createElement('div');
    inBubble.className = 'chat-bubble incoming';
    inBubble.textContent = "Thanks for reaching out! A representative will connect with you in a moment, or you can click 'Post an Errand' to get immediate runner bids.";
    area.appendChild(inBubble);
    area.scrollTop = area.scrollHeight;
  }, 800);
}

// ============================================================
// 9. TOAST NOTIFICATION UTILITY
// ============================================================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#93c700" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ============================================================
// INSTANT ERRAND REQUEST SECTION HANDLERS
// ============================================================
let currentInstantCategory = 'Delivery';

function selectInstantCategory(btn, category, icon, placeholder) {
  document.querySelectorAll('.instant-cat-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  currentInstantCategory = category;

  const titleInput = document.getElementById('instantTaskTitle');
  if (titleInput && placeholder) {
    titleInput.placeholder = placeholder;
  }
}

function applyInstantTag(title, pickup, dest, category, budget) {
  const titleInput = document.getElementById('instantTaskTitle');
  const pickupInput = document.getElementById('instantPickup');
  const destInput = document.getElementById('instantDest');
  const budgetInput = document.getElementById('instantBudgetInput');

  if (titleInput) titleInput.value = title;
  if (pickupInput) pickupInput.value = pickup;
  if (destInput) destInput.value = dest;
  if (budgetInput) budgetInput.value = budget;

  // Highlight corresponding category
  document.querySelectorAll('.instant-cat-btn').forEach(b => {
    if (b.getAttribute('data-cat') === category) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });
  currentInstantCategory = category;

  // Highlight budget pill if matches
  document.querySelectorAll('.budget-pill').forEach(p => {
    if (p.textContent.includes(budget.toLocaleString())) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });

  showToast('⚡ Errand preset applied: ' + title);
}

function selectInstantBudget(amount, pillBtn) {
  document.querySelectorAll('#instant-request .budget-pill').forEach(p => p.classList.remove('active'));
  if (pillBtn) pillBtn.classList.add('active');
  const budgetInput = document.getElementById('instantBudgetInput');
  if (budgetInput) budgetInput.value = amount;
}

function selectModalBudget(amount, pillBtn) {
  document.querySelectorAll('#postErrandModal .budget-pill').forEach(p => p.classList.remove('active'));
  if (pillBtn) pillBtn.classList.add('active');
  const budgetInput = document.getElementById('errandBudgetInput');
  if (budgetInput) budgetInput.value = amount;
}

function handleInstantRequestSubmit(event) {
  if (event) event.preventDefault();

  const title = document.getElementById('instantTaskTitle').value.trim();
  const pickup = document.getElementById('instantPickup').value.trim();
  const dest = document.getElementById('instantDest').value.trim();
  const budget = document.getElementById('instantBudgetInput') ? document.getElementById('instantBudgetInput').value : '3500';
  const urgency = document.getElementById('instantUrgency') ? document.getElementById('instantUrgency').value : 'immediate';
  const desc = document.getElementById('instantDescription') ? document.getElementById('instantDescription').value.trim() : '';

  if (!title || !pickup || !dest) {
    showToast('⚠️ Please enter errand title, pickup and delivery address.');
    return;
  }

  // Open the post errand modal prefilled and show the offers simulation
  openPostErrandModal(title, pickup, dest);
  const budgetField = document.getElementById('errandBudgetInput');
  if (budgetField) budgetField.value = budget;
  const descField = document.getElementById('errandDescInput');
  if (descField && desc) descField.value = desc;
  const catInput = document.getElementById('instantCategory');
  const selectedCat = catInput ? catInput.value : currentInstantCategory;
  const catField = document.getElementById('errandCategorySelect');
  if (catField && selectedCat) catField.value = selectedCat;

  showToast('🚀 Errand broadcasted! Connecting you with runners in ' + pickup + '...');
}

// ============================================================
// LOGIN MODAL & GOOGLE AUTH LOGIC
// ============================================================
let modalActiveRole = 'provider';

function openLoginModal(e) {
  if (e) e.preventDefault();
  const modal = document.getElementById('loginModal');
  if (modal) {
    const standardView = document.getElementById('modalStandardLoginView');
    if (standardView) standardView.style.display = 'block';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    window.location.href = 'login.html';
  }
}

function setModalLoginRole(role) {
  modalActiveRole = role;
  const btnP = document.getElementById('modalRoleProvider');
  const btnR = document.getElementById('modalRoleRunner');
  const submitBtn = document.getElementById('modalSubmitBtn');
  const googleBtnText = document.getElementById('modalGoogleBtnText');
  const label = document.getElementById('modalIdentLabel');
  const input = document.getElementById('modalLoginIdentifier');

  if (role === 'provider') {
    btnP.classList.add('active');
    btnR.classList.remove('active');
    submitBtn.textContent = 'Sign In as Service Provider';
    googleBtnText.textContent = 'Continue with Google as Service Provider';
    label.textContent = 'Business Email or Phone Number';
    input.placeholder = 'e.g. adeleke@business.ng or 0802 345 6789';
  } else {
    btnR.classList.add('active');
    btnP.classList.remove('active');
    submitBtn.textContent = 'Sign In as Errand Runner';
    googleBtnText.textContent = 'Continue with Google as Errand Runner';
    label.textContent = 'Registered Phone Number or Email';
    input.placeholder = 'e.g. 0808 123 4567 or tunde.runner@gmail.com';
  }
}

// When signing in with Google, users do not need to provide a phone number
function startModalGoogleAuth() {
  closeModals();
  const isProvider = modalActiveRole === 'provider';
  const userProfile = {
    role: modalActiveRole,
    name: isProvider ? 'Adeleke Boutique' : 'Tunde Okon',
    email: isProvider ? 'adeleke.business@gmail.com' : 'tunde.runner@gmail.com',
    authMethod: 'google',
    loginTime: new Date().toISOString()
  };
  localStorage.setItem('urgent_user', JSON.stringify(userProfile));
  showToast(`🎉 Signed in with Google as ${isProvider ? 'Service Provider' : 'Errand Runner'}! Routing to discovery...`);
  setTimeout(() => {
    window.location.href = 'discovery.html';
  }, 800);
}

function handleModalLoginSubmit(e) {
  e.preventDefault();
  closeModals();
  const userProfile = {
    role: modalActiveRole,
    name: modalActiveRole === 'provider' ? 'Emmanuella Adeleke' : 'Tunde Okon',
    phone: modalActiveRole === 'provider' ? '0802 345 6789' : '0808 555 9182',
    loginTime: new Date().toISOString()
  };
  localStorage.setItem('urgent_user', JSON.stringify(userProfile));
  showToast(`✅ Welcome back! Routing to discovery feed...`);
  setTimeout(() => {
    window.location.href = 'discovery.html';
  }, 800);
}

function quickFillModal(role) {
  setModalLoginRole(role);
  const input = document.getElementById('modalLoginIdentifier');
  const pwd = document.getElementById('modalLoginPassword');
  if (role === 'provider') {
    input.value = 'adeleke@boutique.ng';
    pwd.value = 'Password123!';
  } else {
    input.value = '0808 555 9182';
    pwd.value = 'Password123!';
  }
}

function handleInstantCategoryChange(cat) {
  currentInstantCategory = cat;
  const titleInput = document.getElementById('instantTaskTitle');
  if (!titleInput) return;
  const placeholders = {
    'Delivery': 'e.g. Deliver package / item from pickup address to destination',
    'Shopping': 'e.g. Buy fresh ingredients from Mile 12 or items from Balogun Market',
    'Document': 'e.g. Retrieve stamped passport / legal CTC from VFS Global or Court',
    'Food': 'e.g. Pick up gourmet platter, birthday cake, or restaurant order',
    'Queue': 'e.g. Stand in queue for bank token, ticket collection, or bill payment',
    'Physical': 'e.g. Inspect car condition or physical items at workshop / store',
    'Other': 'e.g. Describe the custom task you need completed'
  };
  if (placeholders[cat]) {
    titleInput.placeholder = placeholders[cat];
  }
}
