export const removeCommas = (str) => { const t = `${str}`; return t.replace(/,/g, ''); };

export const removeNonNumeric = (str) => { const t = `${str}`; return t.replace(/[^0-9.]/g, ''); };
