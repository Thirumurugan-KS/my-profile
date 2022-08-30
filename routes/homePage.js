const Router = require('router');
const cluster = require('cluster');

const router = Router();

router.get('/' , (req,res)=>{
    res.send("Namaste");
    cluster.worker.kill();
})

module.exports = router;