const fs = require("fs")

const getFiles = (path, ending) => {
    return fs.readdirSync(path).filter(f => f.endsWith(ending))
}

module.exports = (bot, reload) => {
    const { client } = bot 

    let button = getFiles("./button/", ".js")

    if (button.length === 0)
        console.log("No button loaded")

    button.forEach(f => {
        if (reload) delete require.cache[require.resolve(`../button/${f}`)]
        const button = require(`../button/${f}`)
        client.button.set(button.name, button)
    })
}