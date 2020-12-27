const {
  dataInsert,
  dataFindById,
  dataUpdate,
  dataRemove,
  dataRemoveAll,
  dataListAll
} = require('../data/status');
const {BadRequest, ValidationFieldError} = require('../helpers/error');

const serviceInsert = async (status) => {
  if (!status.name) throw new ValidationFieldError('Required field', 'Name');
  if (!status.description) throw new ValidationFieldError('Required field', 'Description');
  if (!status.type) throw new ValidationFieldError('Required field', 'Type');
  if (!status.modifierValue) throw new ValidationFieldError('Required field', 'Modifier');
  if (!status.duration) throw new ValidationFieldError('Required field', 'Duration');

  try {
    let createdStatus = await dataInsert(status);
    return createdStatus;
  } catch (err) {
    throw new BadRequest(err);    
  }
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