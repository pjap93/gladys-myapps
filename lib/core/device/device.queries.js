module.exports = {
  getLastValue: `
    SELECT lastValue
    FROM devicetype
    WHERE id = ?;
  `,
  getDeviceType: `
    SELECT dt.id, dt.type, dt.unit, dt.min, dt.max, d.identifier, dt.device, d.service, d.protocol, d.machine, dt.identifier as deviceTypeIdentifier, room.name as roomName,
    dt.lastValueDatetime as lastChanged, dt.lastValue AS lastValue
    FROM device d
    JOIN devicetype dt ON (d.id = dt.device)
    LEFT JOIN room ON d.room = room.id 
    WHERE dt.id = ?;
  `,


};