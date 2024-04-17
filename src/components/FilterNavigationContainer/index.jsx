import style from "./style.module.scss";
import SearchIcon from "../../utils/images/searchIcon.svg";
import AddProductIcon from "../../utils/images/addProductIcon.svg";
import FilterIcon from "../../utils/images/filterIcon.svg";
import ExportIcon from "../../utils/images/exportIcon.svg";

const FilterNavigationContainer = ({setShowFilter}) => {
  return (
    <div className={style["filter-nav"]}>
      <div className={style["left-box-cnt"]}>
        <span className={style["search-label"]}>Search</span>
        <div className={style["left-box"]}>
          <img src={SearchIcon} className={style["search-icon"]} />
          <input placeholder="Search" className={style["inpu-search"]} />
        </div>
      </div>

      <div className={style["right-box"]}>
        <div className={style["add-product-btn"]}>
          <img src={AddProductIcon} className={style["btn-icon"]} />
          Add Products
        </div>
        <div className={style["filter-btn"]} onClick={()=>{setShowFilter(true)}}>
          <img src={FilterIcon} className={style["btn-icon"]} />
          Filters
        </div>
        <div className={style["export-btn"]}>
          <img src={ExportIcon} className={style["btn-icon"]} />
          Export
        </div>
      </div>
    </div>
  );
};

export default FilterNavigationContainer;
