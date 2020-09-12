const siteUrl = process.env.NODE_ENV === 'development' ? 'https://localhost:3000' : process.env.LIVE_SITE_URL

module.exports = {
    siteUrl
}