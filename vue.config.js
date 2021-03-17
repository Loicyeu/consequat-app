module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/' //Le chemin en absolu avec un '/' a la fin
        : '/'
}