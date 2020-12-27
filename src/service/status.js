const {
  dataInsert,
  dataFindById,
  dataUpdate,
  dataRemove,
  dataRemoveAll,
  dataListAll
} = require('../data/status');

const serviceInsert = async (status) => {
  let createdStatus = await dataInsert(status);

  return createdStatus;
}

const serviceFindById = async (statusId) => {
  let status = await dataFindById(statusId);

  return status;
}

const serviceListAll = async () => {
  let statusList = await dataListAll();

  return statusList;
}

const serviceUpdate = async (statusId, status) => {
  let updatedStatus = await dataUpdate(statusId, status);
  console.log('updatedStatus', updatedStatus);

  return updatedStatus;
}

const serviceRemove = async (statusId) => {
  let removedStatus =  await dataRemove(statusId);
  return removedStatus;
}

const serviceRemoveAll = async () => {
  return await dataRemoveAll();
}

module.exports = {
  serviceInsert,
  serviceFindById,
  serviceUpdate,
  serviceListAll,
  serviceRemove,
  serviceRemoveAll
};