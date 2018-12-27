module.exports = {
  getByNotificationType: `
    SELECT dt.name,dt.service,d.id,d.notificationtype
    FROM notificationuser d
    JOIN notificationtype dt on (dt.id=d.notificationtype)
    WHERE d.id = ?;
  `
};