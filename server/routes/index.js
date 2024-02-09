const Router = require('express');
const router = new Router();
const brandRouter = require('./brandRoute');
const deviceRouter = require('./deviceRoute');
const userRouter = require('./userRoute');
const typedRouter = require('./typeRoute');

router.use('/user', userRouter);
router.use('/brand', brandRouter);
router.use('/type', typedRouter);
router.use('/device', deviceRouter);

module.exports = router;
