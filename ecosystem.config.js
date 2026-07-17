module.exports = {
    apps: [
        {
            name: 'front.tru',
            script: 'npm',
            args: 'start',
            env: {
                PORT: 4035,
                NODE_ENV: 'production',
                // УДАЛЕНО: NODE_TLS_REJECT_UNAUTHORIZED: '0' - это отключало проверку SSL сертификатов!
            },
        }
    ]
}