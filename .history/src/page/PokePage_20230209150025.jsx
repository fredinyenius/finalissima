import { useEffect } from "react";
import { useDispatch } from "react-redux";
//import usePoke from "../hooks/usePoke";
import { fetchReadPokeData } from "../redux/thunks/pokeThunk";

const PokePage = () => {
  const dispatch = useDispatch();
  //const { Poke } = usePoke();

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