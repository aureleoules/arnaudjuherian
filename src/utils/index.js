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