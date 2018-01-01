
import { Router } from 'express';

const stats: Router = Router();

/* GET home page. */
stats.get('/stats', function(req, res, next) {
  res.render('index', { title: 'Visual Studio Code!' });
});

export default stats;