import style from "./style.module.scss";
import HeaderSortIcon from "../../utils/images/headerSortIcon.svg";

const ItemTable = () => {
  return (
    <div className={style["table-container"]}>
      <div className={[style["table-row"], style["header-row"]].join(" ")}>
        <div className={[style["table-cell"], style["checkbox"]].join(" ")}>
          <input type="checkbox" />
        </div>
        <div className={style["table-cell"]}>
          Sr. No <img src={HeaderSortIcon} className={style["sort-icon"]} />
        </div>
        <div className={style["table-cell"]}>
          Heading 1 <img src={HeaderSortIcon} className={style["sort-icon"]} />
        </div>
        <div className={style["table-cell"]}>
          Heading 2 <img src={HeaderSortIcon} className={style["sort-icon"]} />
        </div>
        <div className={style["table-cell"]}>
          Heading 3 <img src={HeaderSortIcon} className={style["sort-icon"]} />
        </div>
        <div className={style["table-cell"]}>
          Heading 4 <img src={HeaderSortIcon} className={style["sort-icon"]} />
        </div>
        <div className={style["table-cell"]}>
          Heading 5 <img src={HeaderSortIcon} className={style["sort-icon"]} />
        </div>
        <div className={[style["table-cell"], style["checkbox"]].join(" ")}>
          Heading 6
          <img src={HeaderSortIcon} className={style["sort-icon"]} />
        </div>
        <div className={[style["table-cell"], style["reserved"]].join(" ")}>
          ...
        </div>
      </div>
      {[...Array(12)].map((_, index) => (
        <div className={style["table-row"]} key={index}>
          <div className={[style["table-cell"], style["checkbox"]].join(" ")}>
            <input type="checkbox" />
          </div>
          <div
            className={[style["table-cell"], style["table-cell--item"]].join(
              " "
            )}
          >
            {index + 1}
          </div>
          {[...Array(6)].map((_, i) => (
            <div
              className={[style["table-cell"], style["table-cell--item"]].join(
                " "
              )}
              key={i}
            >
              Item
            </div>
          ))}
          <div
            className={[
              style["table-cell"],
              style["table-cell--item"],
              style["reserved"],
            ].join(" ")}
          >
            ...
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemTable;
