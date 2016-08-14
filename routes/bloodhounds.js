const express = require('express');
const router = express.Router();
const Bloodhound = require('../models/bloodhound');


router.get('/test', (req, res) => {
res.send("hi");
});

router.get('/', (req, res) => {
  Bloodhound.getAll()
    .then(bloodhounds => {
      res.send(bloodhounds);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.get('/:id', (req, res) => {
  Bloodhound.getOne(req.params.id)
    .then(bloodhound => {
      res.send(bloodhound);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});


router.post('/', (req, res) => {
  Bloodhound.create(req.body)
    .then(() => {
      res.send();
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.delete('/:id', (req, res) => {
  Bloodhound.delete(req.params.id)
    .then(() => {
      res.send();
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.put('/:id', (req, res) => {
  Bloodhound.update(req.params.id, req.body)
    .then(() => {
      return Bloodhound.getOne(req.params.id);
    })
    .then(bloodhound => {
      res.send(bloodhound);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

module.exports = router;