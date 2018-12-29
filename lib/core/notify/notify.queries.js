module.exports = {
	getByNotificationType: `
		SELECT dt.name,dt.service,d.id,d.notificationtype
		FROM notificationuser d
		JOIN notificationtype dt on (dt.id=d.notificationtype)
		WHERE d.id = ?;
  `,
  
	uninstallNotificationUser : `
		DELETE
		FROM notificationuser
		WHERE notificationtype =
		(
			SELECT id
			FROM notificationtype
			WHERE service = ?
		);`,
		
	uninstallNotificationType : `
		DELETE
		FROM notificationtype
		WHERE service = ?;`  
  

};