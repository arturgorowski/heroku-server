import moment from 'moment';
import uuid from 'uuid';

class Device {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.devices = [];
  }
  /**
   * 
   * @returns {object} reflection object
   */

  create(data) {
    const newDevice = {
      id: uuid.v4(),
      success: data.success || '',
      lowPoint: data.lowPoint || '',
      takeAway: data.takeAway || '',
      createdDate: moment.now(),
      modifiedDate: moment.now()
    };
    this.devices.push(newDevice);
    return newDevice
  }
  
  /**
   * 
   * @param {uuid} id
   * @returns {object} reflection object
   */

  findOne(id) {
    return this.device.find(dev => dev.id === id);
  }

  /**
   * @returns {object} returns all reflections
   */
  findAll() {
    return this.devices;
  }

  
}
export default new Device();