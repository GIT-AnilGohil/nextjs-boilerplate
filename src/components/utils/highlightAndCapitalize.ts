export const highlightAndCapitalize = (fullString: string, search: string) => {
    const capitalizedString = fullString && fullString.split(', ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(', ');
    const sanitizedSearch = search && search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(sanitizedSearch, 'gi');
    const stringWithHighlight = capitalizedString && capitalizedString.replace(regex, (match) => `<strong style="text-transform: unset;">${match}</strong>`);
    return stringWithHighlight;
};