const moods = {
  "happy,joyful": [
    { name: "Sunbeam Yellow", hex: "#FFD700", description: "A bright, cheerful yellow that evokes optimism, warmth, and childlike joy." },
    { name: "Coral Pop", hex: "#FF6F61", description: "A vibrant coral associated with playfulness, fun, and energetic social interaction." },
    { name: "Sky Blink", hex: "#87CEFA", description: "A light blue that communicates openness, freedom, and an easygoing attitude." },
    { name: "Lime Mist", hex: "#B2F2BB", description: "A soft greenish tone reflecting freshness, light-heartedness, and new beginnings." },
    { name: "Creamy Peach", hex: "#FAD6A5", description: "A warm pastel that conveys comfort, friendliness, and emotional warmth." }
  ],
  "sad,melancholy":[
    {name: "Rain Blue",hex:"#7A9E9F",description:"A muted blue-green tone symbolizing quiet introspection and emotional heaviness."},
    {name: "Dusty Lilac",hex:"#B2A4BF",description:"\tA subdued purple that reflects emotional depth, nostalgia, and tenderness."},
    {name: "Fog Gray",hex:"#A3A3A3",description:"A neutral gray that represents dullness, detachment, or low emotional energy."},
    {name: "Cold Teal",hex:"#5B7B7A",description:"A cool tone conveying emotional distance, reflection, and solitude."},
    {name: "Storm Cloud",hex:"#474B4F",description:"A deep, muted gray suggesting sadness, heaviness, or emotional fatigue."}
  ],
  "anxious,stressed":[
    {name: "Electric Ash",hex:"#C84630",description:"A sharp, intense red-orange representing urgency, restlessness, or stress."},
    {name: "Blurry Beige",hex:"#ECECEC",description:"A pale neutral that reflects emotional numbness, mental fog, or indecision."},
    {name: "Steel Blue",hex:"#4682A9",description:"A cool, restrained blue conveying emotional tension or internal pressure."},
    {name: "Inner Rust",hex:"#AA4A44",description:"A dark red that evokes discomfort, agitation, or emotional friction."},
    {name: "Hazy Mint",hex:"#DDEEDF",description:"A desaturated mint representing overstimulation, nervous energy, or mental exhaustion."}
  ],
  "calm,peaceful":[
    {name: "Misty Blue",hex:"#B8D8D8",description:"A soft blue that evokes serenity, mental clarity, and emotional balance."},
    {name: "Pale Sage",hex:"#CFE1B9",description:"A muted green associated with grounding, relaxation, and natural calm."},
    {name: "Whisper White",hex:"#F7F6F2",description:"A light neutral symbolizing simplicity, peace, and mindfulness."},
    {name: "Dove Gray",hex:"#DADADA",description:"A subtle gray conveying neutrality, quietness, and emotional stability."},
    {name: "Soft Lavender",hex:"#EADFF2",description:"A gentle purple tone used to reflect inner peace and gentle reassurance."}
  ],
  "angry,irritated":[
    {name: "Lava Red",hex:"#D72638",description:"A strong, intense red representing anger, urgency, or emotional intensity."},
    {name: "Burnt Orange",hex:"#F46036",description:"A bold orange linked to frustration, alertness, and reactive emotions."},
    {name: "Blood Plum",hex:"#7D1128",description:"A deep, dark red suggesting suppressed rage or intense emotional heat."},
    {name: "Scorched Clay",hex:"#B9471D",description:"A fiery reddish-brown evoking aggression, pressure, and disruption."},
    {name: "Sharp Black",hex:"#2A2A2A",description:"A dense black tone used to communicate tension, resistance, or confrontation."}
  ],
  "romantic,loving":[
    {name: "Blush Rose",hex:"#F4C2C2",description:"A soft pink that reflects affection, vulnerability, and emotional warmth."},
    {name: "Soft Mauve",hex:"#E7C6FF",description:"A light lavender that suggests tenderness, care, and emotional sensitivity."},
    {name: "Heartbeat Red",hex:"#F44336",description:"A bold red representing passion, desire, and emotional intensity."},
    {name: "Petal White",hex:"#FDF0F0",description:"A delicate off-white associated with purity, sincerity, and gentle emotion."},
    {name: "Dusty Pink",hex:"#D291BC",description:"A muted pink tone expressing sentimental love and emotional depth."}
  ],
  "focused,productive,neutral":[
    {name: "Cool Slate",hex:"#708090",description:"A balanced blue-gray representing structure, logic, and mental focus."},
    {name: "Pale Denim",hex:"#A9CCE3",description:"A light blue that promotes clarity, productivity, and calm attention."},
    {name: "Soft Olive",hex:"#C2C5AA",description:"A desaturated green indicating balanced concentration and stable energy."},
    {name: "Bone White",hex:"#F0F0F0",description:"A clean neutral supporting neutrality, focus, and a fresh mental state."},
    {name: "Mild Teal",hex:"#AED9E0",description:"A muted teal that reflects steady progress, calm effort, and sustained clarity."}
  ],
  "nostalgic,reflective":[
    {name: "Dusty Mustard",hex:"#D4A373",description:"A warm vintage yellow-brown evoking memories and emotional familiarity."},
    {name: "Retro Coral",hex:"#F2A6A0",description:"A faded pink-red associated with past joy, sentimentality, and reflection."},
    {name: "Film Fade",hex:"#C5C3C6",description:"A soft gray-lavender tone reflecting distance, time, and mental haze."},
    {name: "Sepia Tone",hex:"#A77948",description:"A rich brown used to signify aged memories, storytelling, and reflection."},
    {name: "Blue Memory",hex:"#B2C7DA",description:"A pale, cool blue representing bittersweet memories and emotional introspection."}
  ],
  "energetic,motivated":[
    {name: "Neon Mango",hex:"#FFA931",description:"A bold yellow-orange signaling creativity, enthusiasm, and forward motion."},
    {name: "Zesty Lime",hex:"#D1FA36",description:"A bright lime green representing liveliness, activation, and a fresh mindset."},
    {name: "Poppy Red",hex:"#F94144",description:"A strong red that energizes, motivates, and signals action."},
    {name: "Aqua Rush",hex:"#00B4D8",description:"A vibrant aqua blue evoking speed, movement, and high-performance energy."},
    {name: "Bold White",hex:"#FAF9F6",description:"A bright, clear white supporting mental clarity and clean beginnings."}
  ]
};

      const moodButtons = document.querySelectorAll("#moodButtons button");
  const palette = document.getElementById("palette");
  const descriptionBox = document.getElementById("color-description");
  const body = document.body;

  // Returns contrasting custom color (either light or dark)
  function getReadableColor(bgHex) {
    bgHex = bgHex.replace("#", "");
    const r = parseInt(bgHex.substr(0, 2), 16);
    const g = parseInt(bgHex.substr(2, 2), 16);
    const b = parseInt(bgHex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness >= 150 ? "#342e37" : "#d4bbbbfd";
  }

  moodButtons.forEach(button => {
    button.addEventListener("click", () => {
      moodButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const mood = button.dataset.mood;
      const colors = moods[mood];
      if (!colors) return;

      const firstColor = colors[0].hex;
      const lastColor = colors[colors.length - 1].hex;
      const gradient = `linear-gradient(to right, ${firstColor}, ${lastColor})`;

      body.style.background = gradient;

      const textColor = getReadableColor(firstColor);

      // Apply to body text color
      body.style.color = textColor;

      // Apply to headings
      document.querySelectorAll("h1, h2").forEach(el => {
        el.style.color = textColor;
      });

      // Apply to all mood buttons
      moodButtons.forEach(btn => {
        btn.style.backgroundColor = textColor;
        btn.style.color = textColor === "#342e37" ? "#d4bbbbfd" : "#342e37";
      });

      palette.innerHTML = "";
      descriptionBox.style.display = "none";

      colors.forEach(color => {
        const box = document.createElement("div");
        box.className = "color-box";
        box.style.backgroundColor = color.hex;

        box.addEventListener("click", () => {
          descriptionBox.innerHTML = `<strong>${color.name}</strong><br>${color.description}`;
          descriptionBox.style.display = "block";
          descriptionBox.style.backgroundColor = color.hex;
          descriptionBox.style.color = getReadableColor(color.hex);
        });

        palette.appendChild(box);
      });
    });
  });