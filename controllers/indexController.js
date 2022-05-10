const poolCon = require("../lib/createConnect");

exports.index = async(req, res) => {
    try {
        const pool = poolCon.createConnect();

        const selAll = "SELECT * FROM users";

        const [data, meta] = await pool.execute(selAll);

        res.render("index.hbs", {
            users: data
        });
    } catch (error) {
        console.log(error);
        res.render("error.hbs");
    };
};