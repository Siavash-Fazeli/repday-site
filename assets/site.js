(() => {
  const supportedLanguages = new Set(['en', 'tr', 'es']);
  const queryLanguage = new URLSearchParams(window.location.search).get('lang');
  const browserLanguage = navigator.language?.split('-')[0].toLowerCase();
  const initialLanguage = supportedLanguages.has(queryLanguage)
    ? queryLanguage
    : supportedLanguages.has(browserLanguage)
      ? browserLanguage
      : 'en';

  function selectLanguage(language) {
    const selected = supportedLanguages.has(language) ? language : 'en';
    document.documentElement.lang = selected;

    document.querySelectorAll('[data-language-panel]').forEach((panel) => {
      panel.hidden = panel.dataset.languagePanel !== selected;
    });

    document.querySelectorAll('[data-language-button]').forEach((button) => {
      button.setAttribute(
        'aria-pressed',
        String(button.dataset.languageButton === selected),
      );
    });
  }

  document.querySelectorAll('[data-language-button]').forEach((button) => {
    button.addEventListener('click', () => {
      const language = button.dataset.languageButton;
      if (!language) return;
      selectLanguage(language);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', language);
      window.history.replaceState({}, '', url);
    });
  });

  selectLanguage(initialLanguage);
})();
