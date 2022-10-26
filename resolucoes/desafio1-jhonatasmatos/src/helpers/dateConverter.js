
export function toLocaleDate (date) {
    const options = { month: 'long', day: 'numeric' };
    const d = new Date(date).toLocaleDateString("pt-BR", options);
    return d
}