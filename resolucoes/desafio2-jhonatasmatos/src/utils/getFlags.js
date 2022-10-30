import data from "./data.json"

export function getFlag (name) {
    const r = data.find(d => d.name === name)

    return r.flagUrl
}