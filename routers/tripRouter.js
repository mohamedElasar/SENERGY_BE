const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const data = require('../data.js');
const Trip = require('../models/tripModel.js');
const { isAdmin, isAuth } = require('../utils.js');

const tripRouter = express.Router();

tripRouter.get(
  '/mine',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const trips = await Trip.find({ user: req.user._id });
    res.send(trips);
  })
);


tripRouter.get(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    try {
      const trips = await Trip.find();
      res.send(trips);

    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  })
);

tripRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const newTrip = new Trip(req.body);
    newTrip.user = req.user;
    try {

      if ((req.body.driverName === '') || (req.body.phone === '') || (req.body.carNumber === '') || (req.body.passengers === '') || (req.body.from === '') || (req.body.to === '') || (req.body.to == '') || (req.body.startTime == '')
        || (req.body.eArrivalTime == '') || (req.body.startday == '') || (req.body.eArrivalday == '')

      ) {
        res.status(400).send({ message: 'Your should input all data' });
      }
      else if (req.body.vehicle === false) {
        res.status(400).send({ message: 'Car should have license' });
      }

      else {

        const createdtrip = await newTrip.save();
        res
          .status(201)
          .send({ message: 'New trip Created', trip: createdtrip });
      }
    } catch (error) {
      console.log(error)
    }
  })
);

tripRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const trip = await Trip.findById(req.params.id);
    if (trip) {
      res.send(trip);
    } else {
      res.status(404).send({ message: 'trip Not Found' });
    }
  })
);

tripRouter.put(
  '/:id/approve',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {

    try {

      const trip = await Trip.findById(req.params.id);
      if (trip) {
        trip.isApproved = true;
        trip.isApprovedAt = Date.now();

        const approvedTrip = await trip.save();
        res.send({ message: 'trip approved', trip: approvedTrip });
      } else {
        res.status(404).send({ message: 'trip Not Found' });
      }
    } catch (error) {
    }
  })
);
tripRouter.put(
  '/:id/close',
  isAuth,
  expressAsyncHandler(async (req, res) => {

    try {

      const trip = await Trip.findById(req.params.id);
      if (trip) {
        trip.isClosed = true;
        trip.isClosedAt = Date.now();

        const closedTrip = await trip.save();
        res.send({ message: 'trip closed', trip: closedTrip });
      } else {
        res.status(404).send({ message: 'trip Not Found' });
      }
    } catch (error) {
    }
  })
);


module.exports = tripRouter;