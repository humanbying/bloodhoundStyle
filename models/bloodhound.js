const squel = require('squel').useFlavour('mysql');
const uuid = require('uuid');
const moment = require('moment');

const connection = require('../config/db');

connection.query(`create table if not exists bloodhounds (

    id varchar(50),
    fname varchar(50),
    lname varchar(50),
    bloodtype varchar(5),
    age int(10),
    address varchar(100),
    state varchar(20),
    country varchar(20),
    phonenumber varchar(15)
  )`, err => {
    if(err) {
      console.log('table create err:', err);
    }
  })


exports.getAll = function() {
  return new Promise((resolve, reject) => {
    let sql = squel.select().from('bloodhounds').toString();

    connection.query(sql, (err, bloodhounds) => {
      if(err) {
        reject(err);
      } else {
        resolve(bloodhounds);
      }
    });
  });
};

exports.getOne = function(bloodtype) {
  return new Promise((resolve, reject) => {
    let sql = squel.select()
                   .from('bloodhounds')
                   .where('bloodtype = ?', bloodtype)
                   .toString();

    connection.query(sql, (err, assignment) => {
      
      if(err) {
        reject(err);
      } else if(!assignment) {
        reject({error: 'entry found.'})
      } else {
        resolve(assignment);
      }
    });
  });
};


exports.create = function(newBloodhound) {
  return new Promise((resolve, reject) => {
    

    let sql = squel.insert()
                   .into('bloodhounds')
                   .setFields(newBloodhound)
                   .set('id', uuid())
                   .toString();

    connection.query(sql, err => {
      if(err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

exports.delete = function(id) {
  return new Promise((resolve, reject) => {
    let sql = squel.delete()
                   .from('bloodhounds')
                   .where('id = ?', id)
                   .toString();

    connection.query(sql, (err, result) => {
      if(result.affectedRows === 0) {
        reject({error: 'contact not found.'})
      } else if(err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

exports.update = function(id, updateObj) {
  return new Promise((resolve, reject) => {
    delete updateObj.id;

    let sql = squel.update()
                   .table('bloodhounds')
                   .setFields(updateObj)
                   .where('id = ?', id)
                   .toString();

    connection.query(sql, (err, okUpdate) => {
      if(err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};