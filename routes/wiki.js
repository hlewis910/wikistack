const wiki = {};

router.get('/', (req, res, next) => {
    res.send('got to GET /wiki/');
})

router.post('/', (req, res, next) => {
    res.send('got to POST /wiki/');
})

router.get('/', (req, res, next) => {
    res.send('got to GET /wiki/add');
})

module.exports = {
    wiki
};