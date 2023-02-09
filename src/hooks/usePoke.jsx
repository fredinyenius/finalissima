import { useSelector } from "react-redux";

const usePoke = () => {
  return (useSelector(state => state.home));
};

export default usePoke;