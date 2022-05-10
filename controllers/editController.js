const poolCon = require("../lib/createConnect");

exports.edit_get = async(req, res) => {
    try {
        const pool = poolCon.createConnect();

        const id = req.params.id;
        const selId = "SELECT * FROM users WHERE id=?";

        const [data, meta] = await pool.execute(selId, [id]);

        res.render("edit.hbs", {
            user: data[0]
        });
    } catch (error) {
        console.log(error);
        res.render("error.hbs");
    };
};

exports.edit_post = async(req, res) => {
    try {
        const pool = poolCon.createConnect();

        const name = req.body.name;
        const age = req.body.age;
        const id = req.body.id;
        const updUser = "UPDATE users SET name=?, age=? WHERE id=?";

        const [data, meta] = await pool.execute(updUser, [name, age, id]);

        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.render("error.hbs");
    };
};