import style from "./style.module.scss";

const HeaderChips = ({ title }) => {
  return <div className={style["header-chips"]}>{title}</div>;
};

export default HeaderChips;
