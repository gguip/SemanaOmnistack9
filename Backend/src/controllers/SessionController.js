const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user){
            user = await User.create({ email });
        }
        console.log('passou pela sessions');
        return res.json(user);
    }
};


//index, show, store, update, destroy
