
                const router = require("express").Router();
                const passport = require("../auth");
                const {db} = require("../../../utils");

                //----------------------------------------------------------------------------------------------------------
                //Endpoints
                //----------------------------------------------------------------------------------------------------------
    
                

               /**
                * @swagger
                * /following/follow:
                *   post:
                *     tags:
                *       - name: follow
                *     description: follow
                *     produces:
                *       - application/json
                *     parameters:
                *     responses:
                *       200:
                *         description: 
                */
               router.post('/follow',
                   passport.authenticate("jwt", {session:false}), 
                   (req, res) => {
   
                       res.status(200).send({})
               })
               
               
               

               /**
                * @swagger
                * /following/follow:
                *   post:
                *     tags:
                *       - name: follow
                *     description: follow
                *     produces:
                *       - application/json
                *     parameters:
                *     responses:
                *       200:
                *         description: 
                */
               router.post('/follow',
                   passport.authenticate("jwt", {session:false}), 
                   (req, res) => {
   
                       res.status(200).send({})
               })
               
               
               
                