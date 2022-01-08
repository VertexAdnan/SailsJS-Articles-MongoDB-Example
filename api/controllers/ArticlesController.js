module.exports = {
    list: function(req, res) {
        if (!req.session.username)
            res.redirect('/login');

        Articles.find({}).exec(function(err, articles) {
            if (err) {
                res.send(500, 'Database error');
            }
            res.view('list', { articles: articles });
        });
    },
    add: function(req, res) {
        if (!req.session.username)
            res.redirect('/login');

        res.view('add');
    },
    create: function(req, res) {
        if (!req.session.username)
            res.redirect('/login');

        var title = req.body.title;
        var body = req.body.body;

        Articles.create({ title: title, body: body }).exec(function(err) {
            if (err) {
                res.send(500, 'database err')
            }
            res.redirect('/articles/list');
        })
    },
    delete: function(req, res) {
        if (!req.session.username)
            res.redirect('/login');

        Articles.destroy({ id: req.params.id }).exec(function(err) {
            if (err) {
                res.send(500, 'DB ERROR');
            }
            res.redirect('/articles/list');
        });
        return false;
    },
    edit: function(req, res) {
        if (!req.session.username)
            res.redirect('/login');

        //res.send(req.params.id);
        Articles.findOne({ id: req.params.id }).exec(function(err, article) {
            if (err) {
                res.send(500, { error: 'we cant find' });
            }

            res.view('edit', { article: article })
        });
    },
    update: function(req, res) {
        if (!req.session.username)
            res.redirect('/login');

        var title = req.body.title;
        var body = req.body.body;

        Articles.update({ id: req.params.id }, { title: title, body: body }).exec(function(err) {
            if (err) {
                req.send(500, { error: 'Something bad happened' });
            }

            res.redirect('/articles/edit/' + req.params.id);
        });

        return false;
    },
};