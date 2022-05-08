import { Icon } from "@rsuite/icons";
import { AiOutlineLoading } from "react-icons/ai";
import { Wrapper } from "./Styles";

const Loading = () => {
  return (
    <>
      <Wrapper>
        <AiOutlineLoading class="ico" id="outer" />
        <AiOutlineLoading class="ico" id="inner" />
      </Wrapper>
    </>
  );
};

export default Loading;
