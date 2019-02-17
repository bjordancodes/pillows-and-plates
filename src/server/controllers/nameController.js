const admin = require("firebase-admin");
const db = admin.database();
const ref = db.ref("Organizations");

module.exports = {
    newOrg: function(req, res, next) {
        const {id, name, bedsAvailable, foodAvailable} = req.body;
        ref.child("OrgStats").push({
          id,
          name,
          bedsAvailable,
          foodAvailable
        });
        console.log("hit")
        res.status(200).send("post successful!")
      },
    //   getOne: function(req, res, next) {
    //     ref.

    //   },
      getOrg: function(req, res, next) {
        ref.once("value", function(snapshot) {
          console.log(snapshot.val());
        });
        res.sendStatus(200);
      },
      updateOrg: function(req, res, next) {
          const {id, name, bedsAvailable, foodAvailable} = req.body

          ref.child("OrgStats").update({
            id: id,
            name: name,
            bedsAvailable: bedsAvailable,
            foodAvailable: foodAvailable
          })
      }
      
}