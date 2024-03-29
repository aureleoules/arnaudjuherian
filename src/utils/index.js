export const getSize = int => {
    const sizes = [
        "small",
        "medium",
        "large"
    ];
    return sizes[int];
}

export const isHidden = htmlElement => {
    return (htmlElement.offsetParent === null);
}

export const getLanguage = () => {
    const navigatorLang = navigator.language.substr(0, 2);
    let lang = localStorage.getItem("language") || navigatorLang;
    if(lang !== "fr" && lang !== "en") {
        lang = "en";
    }
    return lang;
}

export const setLanguage = lang => {
    localStorage.setItem("language", lang);
    window.dispatchEvent(new CustomEvent("language"), {
        detail: {
            language: lang
        }
    });
}