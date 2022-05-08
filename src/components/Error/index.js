import { MdOutlineError } from "react-icons/md";
import { Img, Wrapper } from "./Styles";

const Error = ({ error, setError }) => {
  return (
    <>
      <Wrapper onClick={() => setError(false)}>
        <h3>Something went wrong</h3>
        <p>error: {error}</p>
        <MdOutlineError className="ico" />
      </Wrapper>
    </>
  );
};

export default Error;
