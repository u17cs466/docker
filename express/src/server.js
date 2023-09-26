const app = require('./app');
require("dotenv").config();
try {
    console.log("connect sucessfully")
}
catch (err) {
    res.status(500).json({
        status: 'fail',
        data: err.message,
    });
}
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log('server is running on ', 'http://localhost:' + PORT);
});
