const poolCon = require("../lib/createConnect");

exports.create_get = async(req, res) => {
    try {
        res.render("create.hbs");
    } catch (error) {
        console.log(error);
        res.render("error.hbs");
    };
};

exports.create_post = async(req, res) => {
    try {
        const pool = poolCon.createConnect();

        const name = req.body.name;
        const age = req.body.age;
        const insUser = "INSERT INTO users (name, age) VALUES (?, ?)";

        const [data, meta] = await pool.execute(insUser, [name, age]);

        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.render("error.hbs");
    };
};