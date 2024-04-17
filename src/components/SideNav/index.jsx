import style from "./style.module.scss";
import LiveNewsIcon from "../../utils/images/liveNewsIcon.svg";
import TableIcon from "../../utils/images/tablesIcon.svg";
import CorpNewsIcon from "../../utils/images/corpNewsIcon.svg";
import StockIcon from "../../utils/images/stockIcon.svg";
import NavExpandIcon from "../../utils/images/navExpandIcon.svg";

const SideNav = () => {
  return (
    <div className={style["side-nav"]}>
      <div className={style["logo-cnt"]}>logo</div>
      <div className={style["nav-btn-cnt"]}>
        <img src={LiveNewsIcon} className={style["nav-btn-ico"]} />
        <img src={TableIcon} className={style["nav-btn-ico"]} />
        <img src={CorpNewsIcon} className={style["nav-btn-ico"]} />
        <img src={StockIcon} className={style["nav-btn-ico"]} />
      </div>
      <div className={style["expand-icon-cnt"]}>
        <img src={NavExpandIcon} className={style["nav-btn-ico"]} />
      </div>
    </div>
  );
};

export default SideNav;
