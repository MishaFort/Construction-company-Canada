const logoText = document.querySelector('.logo__text');

function updateLineHeight() {
  const lineHeight = window.getComputedStyle(logoText).lineHeight;

  const styleSheet = document.styleSheets[0];
  const ruleIndex = Array.from(styleSheet.cssRules).findIndex(
    rule => rule.selectorText === '.logo__text::after'
  );

  if (ruleIndex !== -1) {
    styleSheet.cssRules[ruleIndex].style.top = lineHeight;
  }
}

window.addEventListener('resize', updateLineHeight);
updateLineHeight();
