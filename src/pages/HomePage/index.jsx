import FilterNavigationContainer from "../../components/FilterNavigationContainer";
import FilterSection from "../../components/FilterSection";
import Header from "../../components/Header";
import HeaderChips from "../../components/HeaderChips";
import ItemTable from "../../components/ItemTable";
import style from "./style.module.scss";

const HEADER_CHIPS = [
  "Paris Olympic 2024 - 300",
  "T20 World Cup 2024 - 200",
  "Manchester United - 200",
  "Mumbai City FC - 220",
  "Motorsports - 10",
];

const HomePage = () => {
  return (
    <div className={style["home-cnt"]}>
      <Header />
      <div className={style["main-cnt"]}>
        <div className={style["table-cnt"]}>
          <div className={style["header-chip-cnt"]}>
            {HEADER_CHIPS.map((i, index) => (
              <HeaderChips key={index} title={i} />
            ))}
          </div>
          <div className={style["filter-nav-cnt"]}>
            <FilterNavigationContainer />
          </div>
          <ItemTable />
        </div>
        <FilterSection />
      </div>
    </div>
  );
};

export default HomePage;
