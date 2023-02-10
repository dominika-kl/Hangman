/**
 * The Notification function returns a notification message for three seconds.
 * It takes as a prop the showNotification function defined in the HiddenWord component.
 * When the user enters a correct or wrong letter that has been already submitted, 
 * the notification pops up to inform them about it. The Notification component 
 * is displayed or not based on the result of the showNotification function.
 */
const Notification = ({showNotification}) => {
  return (
    <div className="notificationContainer">
        {showNotification && <p>You have already entered this letter! 🔔</p>}
    </div>
  )
}
//Export the Notification component.
export default Notification;