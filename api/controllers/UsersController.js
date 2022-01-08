module.exports = {
    login: function(req, res) {
        if (req.session.username) {
            res.view('home')
        } else {
            res.view('login');
        }
    },

    test: (req, res) => {
        req.session.test = "hehehehe";
        res.send(req.session);
    },
    loginProcess: function(req, res) {
        username = req.body.username;
        password = req.body.password;
        Users.findOne({ where: { username: username, password: password } }).exec(function(err, users) {
            if (err) {
                res.send(500, { body: req.body, error: err });
            }
            if (users) {
                req.session.username = users.username;
                res.redirect('/articles/list');
            } else {
                res.redirect('/login');
            }
        });

        return false;
    },

    logout: function(req, res) {
        // clear login sessions here
        req.session.destroy(function(err) {
            setTimeout(function() {
                req.session.message = "SUCCESS";
                return res.redirect('/login');
            }, 2500); // redirect wait time 2.5 seconds
        });
    },

    create: function(req, res) {
        var username = req.body.username;
        var password = req.body.password;
        Users.create({ username: username, password: password }).exec(function(err) {
            if (err) {
                res.send(500, 'DB Err');
            }
            res.send('User created with username: ' + username + " " + password);
        });
    }

};