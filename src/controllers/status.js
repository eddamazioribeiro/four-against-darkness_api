const {
  serviceInsert,
  serviceFindById,
  serviceListAll,
  serviceUpdate,
  serviceRemove,
  serviceRemoveAll
} = require('../service/status');
 
const createStatus = async (req, res) => {
  const status = req.body;
  let result = {};

  try {
    let newStatus = await serviceInsert(status);

    result = {
      success: true,
      data: newStatus
    }    

    return res.status(200).json(result);
  } catch (err) {
    result = {
      success: false,
      data: err
    }
    
    return res.status(400).json(result);    
  }  
}

const findStatusById = async (req, res) => {
  let {statusId} = req.params;
  let result = {};

  try {
    let status = await serviceFindById(statusId);

    result = {
      success: true,
      data: status
    }    

    return res.status(200).json(result);
  } catch (err) {
    result = {
      success: false,
      data: err
    }
    
    return res.status(400).json(result);    
  }  
}

const listAllStatus = async (req, res) => {
  let result = {};

  try {
    let statusList = await serviceListAll();

    result = {
      success: true,
      data: statusList
    }    

    return res.status(200).json(result);
  } catch (err) {
    result = {
      success: false,
      data: err
    }
    
    return res.status(400).json(result);    
  }  
}

const updateStatus = async (req, res) => {
  let result = {};
  let {statusId} = req.params;
  let status = req.body;
  
  try {
    let updatedStatus = await serviceUpdate(statusId, status);

    result = {
      success: true,
      data: updatedStatus
    }    

    return res.status(200).json(result);
  } catch (err) {
    result = {
      success: false,
      data: err
    }
    
    return res.status(400).json(result);    
  }  
}

const deleteStatus = async (req, res) => {
  let {statusId} = req.params;
  
  try {
    let result = await serviceRemove(statusId);

    result = {
      success: true,
      data: result
    }    

    return res.status(200).json(result);
  } catch (err) {
    result = {
      success: false,
      data: err
    }
    
    return res.status(400).json(result);    
  }  
}

const deleteAllStatus = async (req, res) => {
  try {
    let result = await serviceRemoveAll();

    result = {
      success: true,
      data: {
        deletedCount: result.deletedCount,
        info: result
      }
    }    

    return res.status(200).json(result);
  } catch (err) {
    result = {
      success: false,
      data: err
    }
    
    return res.status(400).json(result);    
  }  
}

module.exports = {
  createStatus,
  findStatusById,
  listAllStatus,
  updateStatus,
  deleteStatus,
  deleteAllStatus
};