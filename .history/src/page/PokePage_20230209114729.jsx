import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useHome from "../hooks/useHome";
import { fetchReadBestSellersProducts, fetchReadHeroProducts } from "../redux/thunks/homeThunk";

const PokePage = () => {
  const dispatch = useDispatch();
  const { heroProducts } = useHome();

  useEffect(() => {
    dispatch(fetchReadHeroProducts());
    dispatch(fetchReadBestSellersProducts());
  }, []);

  return (
    <>
      <HomeHero heroProducts={heroProducts} />
      <HomeBestSellers />
    </>
  );
};

export default PokePage;