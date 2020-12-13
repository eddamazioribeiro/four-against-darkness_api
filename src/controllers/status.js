const Status = require('../models/status');

exports.create = (req, res) => {
    const status = new Status(req.body);

    status.save((err, data) => {
        if (err) {
            res.status(400).json({
                error: err
            });
        } else {
            res.status(200).json(data);
        }
    });
}

exports.findById = (req, res) => {
    let {statusId}  = req.params;

    Status.findById(statusId).exec((err, status) => {
        if (err || !status) {
            res.status(400).json({
                error: `Status with ID ${statusId} not found`
            });
        } else {
            res.status(200).json(status);
        }
    });
}

exports.update = (req, res) => {
    let {statusId} = req.params;
    let {
        name,
        description,
        type,
        modifierValue,
        duration} = req.body;

    Status.findByIdAndUpdate(
            statusId,
            {name, description, type, modifierValue, duration},
            {new: true}
        ).exec((err, data) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(data);
            }
        });
}

exports.remove = (req, res) => {
    let {statusId} = req.params;

    Status.findByIdAndDelete(statusId).exec((err, data) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(data);
        }      
    });
}

exports.list = (req, res) => {
    Status.find({})
        .limit(10)
        .sort({createdAt: -1})
        .exec((err, data) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(data);
            }
        });
}