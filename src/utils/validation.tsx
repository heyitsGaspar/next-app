export const validateName = (name: string): boolean => {
    const nameRegex = /^[a-zA-Z0-9\s]+$/;
    return nameRegex.test(name);
};

export const validatePrice = (price: number): boolean => {
    return price > 0;
};

export const validateAuthor = (author: string): boolean => {
    const authorRegex = /^[a-zA-Z\s]+$/;
    return authorRegex.test(author);
};