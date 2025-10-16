const info = (req, res) => {
    return res.json({
        success: true,
        message: true,
        error: {},
        data: {}
    })
}

module.exports = {
    info
}
