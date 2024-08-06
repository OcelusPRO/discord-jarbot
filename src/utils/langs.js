import {FrenchFrance} from "../../langs/fr/fr_FR.js";
import {EnglishUK} from "../../langs/en/en_UK.js";
import {EnglishUS} from "../../langs/en/en_US.js";
import {French} from "../../langs/fr/fr.js";
import {English} from "../../langs/en/en.js";

export const langs = [
    FrenchFrance,
    EnglishUK,
    EnglishUS,

    French,
    English
]

export function getLangByCode(code) {
    let selectLang = langs.find( (lang) => {
        lang.config.code === code
    })

    if (!selectLang) {
        const semiCode = code.split('_')
        selectLang = langs.find( (lang) => {
            lang.config.code === semiCode
        })
    }

    if (!selectLang) selectLang = getDefaultLang()
    return selectLang
}

export function getDefaultLang(){
    return langs.find( (lang) => { lang.config.isDefault })
}