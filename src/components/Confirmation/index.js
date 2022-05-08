import { MdOutlineError } from "react-icons/md";
import { Button } from "rsuite";
import { Img, Wrapper, Important } from "./Styles";
import ButtonCustom from "../ButtonCustom";

const Error = ({ setConfirm, action, type, setOpen }) => {
  return (
    <>
      <Wrapper onClick={() => setOpen(false)}>
        <div className="modal">
          <div className="header">
            <h6>Please Confirm </h6>
          </div>
          <div className="body">
            <p>
              Are you sure you want to <Important>{action}</Important>{" "}
              {`the
              ${type ? type : " record"}`}
            </p>

            {/* {
              <p>
                Are you sure you want to <Important>update</Important> the{" "}
                {type ? type : "record"} and overwrite your current data
              </p>
            } */}
          </div>
          <div className="footer">
            <ButtonCustom onClick={() => setConfirm(true)}>yes</ButtonCustom>
            <ButtonCustom onClick={() => setConfirm(false)}>no</ButtonCustom>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Error;
