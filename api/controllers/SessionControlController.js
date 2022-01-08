module.exports = {
    checker: function(req, res) {
        if (req.session.username) {
            res.redirect('/articles')
        } else {
            res.redirect('/login')
        }
    }

};