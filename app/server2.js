import Device from './server';

const Device = {
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} reflections array
   */
  
  getAll(req, res) {
    const devices = Device.findAll();
    return res.status(200).send(devices).json('KURWA JA PIERDOLE JEBANY SUKCES!!');
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} reflection object
   */
  getOne(req, res) {
    const device = ReflectionModel.findOne(req.params.id);
    if (!device) {
      return res.status(404).send({'message': 'device not found'});
    }
    return res.status(200).send(device);
  },
}

export default Device;