/**
 * DREAM DESTINATIONS & DREAM DELIVERY MAP (Sections F & G)
 * Interactive showcase for the 4 dream realms with micro-interactions,
 * and an interactive SVG fantasy map connecting the destinations.
 */

class JunoDestinations {
  constructor() {
    this.init();
  }

  init() {
    this.bindDestinationInteractions();
    this.bindMapInteractions();
  }

  bindDestinationInteractions() {
    // 1. Wishfall Kingdom
    const kingdomBtn = document.getElementById('kingdom-action-btn');
    if (kingdomBtn) {
      kingdomBtn.addEventListener('click', () => {
        alert("🏰 A shining crystal bridge appeared across the clouds!");
        if (window.junoAudio) window.junoAudio.playChime(659.25);
        if (window.heroJunoInstance) {
          window.heroJunoInstance.say("Look! The bridge opened for us! 🏰", 3500);
        }
      });
    }

    // 2. Moonlit Garden
    const gardenBtn = document.getElementById('garden-action-btn');
    if (gardenBtn) {
      gardenBtn.addEventListener('click', () => {
        alert("🌸 You touched the lotus! Its petals opened and blue fireflies flew out.");
        if (window.junoAudio) window.junoAudio.playChime(783.99);
        if (window.heroJunoInstance) {
          window.heroJunoInstance.say("Look at the fireflies! They love visitors! 🌸", 3500);
        }
      });
    }

    // 3. Infinite Dream Library
    const libraryBtn = document.getElementById('library-action-btn');
    if (libraryBtn) {
      libraryBtn.addEventListener('click', () => {
        alert("📖 You opened the floating book. It says: 'Every wish you make is kept safe by the stars.'");
        if (window.junoAudio) window.junoAudio.playChime(880);
        if (window.heroJunoInstance) {
          window.heroJunoInstance.say("I love reading these dream books! 📖", 3500);
        }
      });
    }

    // 4. Stardust Observatory
    const observatoryBtn = document.getElementById('observatory-action-btn');
    if (observatoryBtn) {
      observatoryBtn.addEventListener('click', () => {
        alert("🔭 You looked through the telescope! Four stars connected to draw Juno's lamp.");
        if (window.junoAudio) window.junoAudio.playChime(1046.5);
        if (window.heroJunoInstance) {
          window.heroJunoInstance.say("You found my constellation! It's so bright! 🔭", 3500);
        }
      });
    }
  }

  bindMapInteractions() {
    const pins = document.querySelectorAll('.map-node-pin');
    const travelerStar = document.getElementById('map-traveler-star');

    const waypoints = {
      'kingdom': { x: 180, y: 150 },
      'garden': { x: 380, y: 280 },
      'library': { x: 620, y: 140 },
      'observatory': { x: 820, y: 250 }
    };

    pins.forEach(pin => {
      pin.addEventListener('click', () => {
        const target = pin.getAttribute('data-target');
        const pos = waypoints[target];

        if (pos && travelerStar) {
          travelerStar.setAttribute('transform', `translate(${pos.x}, ${pos.y})`);
        }

        if (window.junoAudio) window.junoAudio.playChime(739.99);

        // Highlight matching destination card
        const card = document.getElementById(`dest-card-${target}`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.style.borderColor = 'var(--magical-gold)';
          card.style.boxShadow = '0 0 40px var(--magical-gold)';
          setTimeout(() => {
            card.style.boxShadow = '';
          }, 1500);
        }
      });
    });
  }
}

window.JunoDestinations = JunoDestinations;
