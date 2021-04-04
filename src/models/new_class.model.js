'use strict';
let dbConn = require('./../../config/db.config');
//Employee object create
let newClass = function (new_class) {
    this.class_name = new_class.class_name;
    this.category = new_class.category;
    this.description = new_class.description;
    this.level = new_class.level;
    this.pricing = new_class.pricing;
};

newClass.create = function (createclass, result) {
    dbConn.query("INSERT INTO new_class set ?", createclass, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};


newClass.findBySearch = function (qsValue) {
    return new Promise((resolve, reject) => {
        dbConn.query("Select * from new_class where class_name like ? ORDER BY ? ?", qsValue, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};


newClass.sortlevel = function (qsValue) {
    return new Promise((resolve, reject) => {
        dbConn.query("Select * from new_class where level like ? ORDER BY ? ?", qsValue, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};
newClass.sortcategory = function (qsValue) {
    return new Promise((resolve, reject) => {
        dbConn.query("Select * from new_class where category like ? ORDER BY ? ?", qsValue, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};
newClass.sortpricing = function (qsValue) {
    return new Promise((resolve, reject) => {
        dbConn.query("Select * from new_class where pricing like ? ORDER BY ? ?", qsValue, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};



newClass.findByid = function (id, result) {
    dbConn.query("Select * from new_class where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

newClass.findBycategory = function (category, result) {
    dbConn.query("Select * from new_class where category = ? ", category, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

newClass.findBylevel = function (level, result) {
    dbConn.query("Select * from new_class where level = ? ", level, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {

            result(null, res);
        }
    });
};

newClass.findBypricing = function (pricing, result) {
    dbConn.query("Select * from new_class where pricing = ? ", pricing, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

newClass.findAll = function (result) {
    dbConn.query("Select * from new_class", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('class name : ', res);
            result(null, res);
        }
    });
};


newClass.update = function (id, new_class, result) {
    dbConn.query("UPDATE new_class SET class_name=?,category=?,description=?,level=?,pricing=? WHERE id = ?",
        [new_class.class_name, new_class.category, new_class.description, new_class.level, new_class.pricing, id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
};
newClass.delete = function (id, result) {
    dbConn.query("DELETE FROM new_class WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = newClass;