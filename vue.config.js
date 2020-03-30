module.exports = {
    devServer: {
        proxy: {
            '/user': {
                target: 'http://localhost:8081',
                pathRewrite: {
                    '/user': 'user.json'
                }
            },
            '/list': {
                target: 'http://localhost:8081',
                pathRewrite: {
                    '/list': 'list.json'
                }
            },
            '/price': {
                target: 'http://localhost:8081',
                pathRewrite: {
                    '/price': 'price.json'
                }
            }
        }
    }
}
