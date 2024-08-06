import {getDefaultLang, getLangByCode} from "./langs.js";

export function translate(key, lang, defaultValue) {

    const result = lang.getFromPath(key)
    if (result === undefined) return getFallbackKey(lang, key, defaultValue)
    else return result
}

function getFallbackKey(lang, key, defaultValue) {
    if (lang.config.fallback_language === 'default') return defaultValue
    return translate(key, lang.config.fallback_language, defaultValue)
}
