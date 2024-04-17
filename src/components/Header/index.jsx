import style from "./style.module.scss";
import ProfilePhoto from "../../utils/images/profilePhoto.svg";
import NotificationIcon from "../../utils/images/notificationsIcon.svg";
import DownArrowIcon from "../../utils/images/downArrowProfileIcon.svg";

const Header = () => {
    return ( <div className={style["header"]}>
    <div className={style["left-title"]}>
    Products
    </div>
    <div className={style["right-cnt"]}>
        <div className={style["icon-cnt"]}>
        <img src={NotificationIcon} alt="bell" className={style["bell-icon"]}/>

        </div>
        <div className={style["profile-label"]}>
            <img src={ProfilePhoto} alt="profile-photo" className={style["profile-photo"]}/>
            <span className={style["profile-name"]}>Udit Singh</span>
            <img src={DownArrowIcon} alt="down-arrow" className={style["down-arrow-icon"]}/>
        </div>
    </div>
    </div>  );
}
 
export default Header;