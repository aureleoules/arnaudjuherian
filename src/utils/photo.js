export const optimizePhoto = (url) => {
    return url.replace('/upload/', '/upload/w_1920,q_auto/');
}