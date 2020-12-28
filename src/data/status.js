const Status = require('../models/status');

const dataInsert = async (newStatus) => {
  const status = new Status(newStatus);

  return status.save();
};

const dataFindById = async (statusId) => {
  return Status.findById(statusId).exec();
};

const dataListAll = async () => {
  return Status.find({})
    .limit(30)
    .sort({createdAt: -1})
    .exec();
};

const dataUpdate = async (statusId, newStatus) => {
  let {
    name,
    description,
    type,
    modifierValue,
    duration} = newStatus;

  return Status.findByIdAndUpdate(
    statusId,
    {name, description, type, modifierValue, duration},
    {new: true}).exec();
};

const dataRemove = async (statusId) => {
  return Status.findByIdAndDelete(statusId).exec();
};


const dataRemoveAll = async () => {
  return Status.deleteMany({}).exec();
};

module.exports = {
  dataInsert,
  dataFindById,
  dataUpdate,
  dataRemove,
  dataRemoveAll,
  dataListAll
};