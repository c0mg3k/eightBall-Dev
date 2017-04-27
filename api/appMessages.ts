import * as express from 'express';
import AppMessage from '../models/appMessage';


let router = express.Router();

router.get('/', (req, res)=>{
  let total = AppMessage.count().then(()=>{
    let rnd = Math.floor(Math.random() * total);
    AppMessage.findOne().skip(rnd).then((appMessage)=>{
      console.log('shit worked....')
      res.json(appMessage);
    }).catch((err)=>{
      console.log('shit is fucked...');
      res.json(err);
    })
  }).catch((err)=>{
    res.json(err);
  });
});

router.post('/', (req, res)=>{
  let appMessageToAdd = new AppMessage();
  appMessageToAdd.message = req.body.message;
  appMessageToAdd.save().then((addedAppMessage)=>{
    res.json(addedAppMessage);
  }).catch((err)=>{
    res.json(err);
  });
});

export default router;
