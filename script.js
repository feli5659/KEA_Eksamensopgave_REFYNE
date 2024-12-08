const contentTemplates = {
  fashion: {
    h3: "Performance marketing bureau med expertise i fashion",
    h1: "Skalér jeres B2C fashion brand med datadrevet marketing.",
    p: "Vi forstår de unikke udfordringer ved at markedsføre modebrands i et konkurrencepræget marked. Vores skræddersyede løsninger sikrer, at dit brand når de rette kunder, opbygger loyalitet og skaber målbare resultater.",
    cta: "Kontat os for hjælp til dit fashion brand",
  },
  tech: {
    h3: "Performance marketing bureau med expertise i SaaS",
    h1: "Skalér din B2B tech startup med datadrevet marketing.",
    p: "Som en del af en hurtigt udviklende tech-branche er det afgørende at være foran konkurrenterne. Vi hjælper din virksomhed med at skabe relevant og engagerende kommunikation, der konverterer leads til loyale kunder gennem præcist målrettet marketing.",
    cta: "Kontat os for hjælp til din tech startup",
  },
  b2b: {
    h3: "Performance marketing bureau for B2B-virksomheder",
    h1: "Skab vækst i din B2B-virksomhed med målrettede kampagner",
    p: "Vi hjælper B2B-virksomheder med at nå beslutningstagere, opbygge stærke relationer og generere flere leads gennem strategisk marketing.",
    cta: "Kontat os for hjælp til jeres B2B virksomhed",
  },
};

document.getElementById("searchSimulator").addEventListener("change", function () {
  const searchType = this.value;
  if (!searchType) return;

  const content = contentTemplates[searchType];

  // Update the content
  document.getElementById("dynamicH3").textContent = content.h3;
  document.getElementById("dynamicH1").textContent = content.h1;
  document.getElementById("dynamicP").textContent = content.p;
  document.getElementById("dynamicCTA").innerHTML = content.cta + ' <span class="arrow">→</span>';
});
