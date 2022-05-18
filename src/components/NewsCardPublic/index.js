import { useEffect, useState } from "react";
import { Wrapper, PlaceholderImage } from "./Styles";
import banner from "../../img/banner.jpg";
import fallback from "../../img/StatMeLogo.svg";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { apiSettings } from "../../API/API";
import { Icon } from "@rsuite/icons";
import { MdDelete, MdEdit } from "react-icons/md";
import { Button, IconButton, Input, Uploader } from "rsuite";
import ButtonCustom from "../ButtonCustom";
import { UploadArea } from "../NewsCardNew/Styles";

function previewFile(file, callback) {
  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}
const NewsCardPublic = ({ news }) => {
  const [image, setImage] = useState();
  const [visible, setVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(news?.title);
  const [subTitle, setSubTitle] = useState(news?.subTitle);
  const [content, setContent] = useState(news?.content);
  const [file, setFile] = useState();
  const [fileInfo, setFileInfo] = useState();
  useEffect(() => {
    // console.log(fixture.homeTeam, "logo");

    const setLogo = async () => {
      const header = await apiSettings.getImage(news.headerImage);
      setImage(header);
      console.log(image);
    };
    setLogo();
  }, [news]);
  return (
    <>
      <Wrapper
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <div>
          <h4>{news?.title}</h4>

          <h6>{news?.subTitle}</h6>
          {image && (
            <img
              onError={() => {
                setImage(false);
              }}
              src={image}
              alt="news post "
            />
          )}
          <p>{news?.content}</p>
        </div>
      </Wrapper>
    </>
  );
};
export default NewsCardPublic;
