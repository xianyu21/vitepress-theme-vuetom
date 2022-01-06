(() => {
  const { supportedLangs } = window
  const cacheKey = 'preferred_lang'
  const defaultLang = 'en-US'

  // docs supported languages
  const langAlias = {
    zh: 'zh-CN',
    en: 'en-US',
    tw: 'zh-TW'
  }
  let userPreferredLang = localStorage.getItem(cacheKey) || navigator.language
  const language = langAlias[userPreferredLang]
    || (supportedLangs.includes(userPreferredLang)
      ? userPreferredLang
      : defaultLang)
  localStorage.setItem(cacheKey, language)
  userPreferredLang = language
  if (!location.pathname.startsWith(`/${userPreferredLang}`)) {
    const toPath = [`/${userPreferredLang}`]
      .concat(location.pathname.split('/').slice(2))
      .join('/')
    location.pathname = toPath.endsWith('.html') || toPath.endsWith('/')
      ? toPath
      : toPath.concat('/')
  }
})()
