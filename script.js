const contentTemplates = {
  fashion: {
    h3: "Performance marketing agency with expertise in fashion",
    h1: "Transform your B2C fashion brand with our innovative solution",
    p: "Discover how we can help you achieve your B2C fashion brand goals faster and more efficiently than ever before",
    cta: "Contact us to hear what we can do for your fashion brand",
  },
  tech: {
    h3: "Performance marketing agency with expertise in SaaS",
    h1: "Transform your B2B tech startup with our innovative solution",
    p: "Discover how we can help you achieve your SaaS startup goals faster and more efficiently than ever before",
    cta: "Contact us to hear what we can do for your tech startup",
  },
  health: {
    h3: "Performance marketing agency with expertise in healthcare",
    h1: "Transform your healthcare business with our innovative solution",
    p: "Discover how we can help you achieve your healthcare company goals faster and more efficiently than ever before",
    cta: "Contact us to hear what we can do for your healthcare company",
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
