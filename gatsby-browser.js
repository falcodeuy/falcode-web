/**
 * Detect browser language and redirect to the appropriate language version
 */
exports.onClientEntry = () => {
  const supportedLanguages = ["en", "es"];
  const defaultLanguage = "es";

  // Only redirect if we're on the root path (without language prefix)
  const pathname = window.location.pathname;
  const isRootPath = pathname === "/" || pathname === "";

  if (!isRootPath) {
    return;
  }

  // Check if user has already been redirected (to avoid loops)
  const hasRedirected = sessionStorage.getItem("lang_redirected");
  if (hasRedirected) {
    return;
  }

  // Get browser language
  const browserLang = navigator.language || navigator.userLanguage || "";
  const primaryLang = browserLang.split("-")[0].toLowerCase();

  // Determine target language
  const targetLang = supportedLanguages.includes(primaryLang)
    ? primaryLang
    : defaultLanguage;

  // Mark as redirected to avoid loops
  sessionStorage.setItem("lang_redirected", "true");

  // Redirect to the appropriate language version
  if (targetLang !== defaultLanguage || pathname === "/") {
    window.location.replace(`/${targetLang}/`);
  }
};
