const poolCon = require("../lib/createConnect");

exports.delete_post = async(req, res) => {
    try {
        const pool = poolCon.createConnect();

        const id = req.params.id;
        const delUser = "DELETE FROM users WHERE id=?";

        const [data, meta] = await pool.execute(delUser, [id]);

        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.render("error.hbs");
    };
};