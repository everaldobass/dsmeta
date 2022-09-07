//importa o Icon
import icon from '../../img/notification-icon.svg'

//Importa o Stylo CSS
import './style.css'

function NotificationButton() {
 
  return (
    <div className="dsmeta-red-btn">
        <img src={icon} alt="Notificar" />
    </div>
  )
}

export default NotificationButton;
