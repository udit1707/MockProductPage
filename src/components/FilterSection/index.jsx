import style from "./style.module.scss";
import ClearIcon from "../../utils/images/clearIcon.svg";
import FilterDownIcon from "../../utils/images/filterDownIcon.svg";

const FilterInputBox = ({ label, showDropIcon }) => {
  return (
    <div className={style["filter-input-box"]}>
      <span className={style["input-label"]}>{label}</span>
      <div className={style["filter-input-field"]}>
        <input className={style["filter-input"]} placeholder={label} />
        {showDropIcon && (
          <img src={FilterDownIcon} className={style["filter-dropdown-icon"]} />
        )}
      </div>
    </div>
  );
};

const FilterSection = ({setShowFilter}) => {
  return (
    <div className={style["filter-section"]}>
      <div className={style["filter-header"]}>
        <div className={style["left-title"]}>Filters</div>
        <div className={style["right-icon"]} onClick={()=>{setShowFilter(false)}}>
          <img src={ClearIcon} />
        </div>
      </div>
      <div className={style["filter-body"]}>
        <FilterInputBox label="Product Name" showDropIcon={false} />
        <FilterInputBox label="Category" showDropIcon={true} />
        <FilterInputBox label="Match Name" showDropIcon={false} />
        <FilterInputBox label="Team" showDropIcon={true} />
      </div>
      <div className={style["btn-cnt"]}>
        <div className={[style["btn"], style["apply"]].join(" ")}>Apply</div>
        <div className={[style["btn"], style["reset"]].join(" ")}>Reset</div>
      </div>
    </div>
  );
};

export default FilterSection;
