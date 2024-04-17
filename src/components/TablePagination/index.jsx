import style from "./style.module.scss";
import NextDoubleIcon from "../../utils/images/nextDoubleIcon.svg";
import NextSingleIcon from "../../utils/images/nextSingleIcon.svg";
import PrevDoubleIcon from "../../utils/images/prevDoubleIcon.svg";
import PrevSingleIcon from "../../utils/images/prevSingleIcon.svg";

const TOTAL_PAGES = 10;
const CURRENT_PAGE = 1;

const TablePagination = () => {
  return (
    <div className={style["table-pagination"]}>
      <div className={style["page-btn-cnt"]}>
        <img src={PrevDoubleIcon} className={style["control-btns"]} />
        <img src={PrevSingleIcon} className={style["control-btns"]} />
        <div className={[style["page"], style["active"]].join(" ")}>
          {CURRENT_PAGE}
        </div>
        <div className={style["page"]}>2</div>
        <div className={style["page"]}>3</div>
        <div className={style["page"]}>...</div>
        <div className={style["page"]}>{TOTAL_PAGES}</div>
        <img src={NextSingleIcon} className={style["control-btns"]} />
        <img src={NextDoubleIcon} className={style["control-btns"]} />
      </div>
    </div>
  );
};

export default TablePagination;
