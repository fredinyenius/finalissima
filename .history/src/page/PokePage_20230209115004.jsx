import { useEffect } from "react";
import { useDispatch } from "react-redux";
import usePoke from "../hooks/usePoke";
import { fetchReadPoke } from "../redux/thunks/pokeThunk";

const PokePage = () => {
  const dispatch = useDispatch();
  const { poke } = usePoke();

  useEffect(() => {
    dispatch(fetchReadPoke());
  }, []);

  return (
    <>
      <HomeHero heroProducts={heroProducts} />
      <HomeBestSellers />
    </>
  );
};

export default PokePage;