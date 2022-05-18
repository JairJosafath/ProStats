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
const NewsCard = ({
  news,
  setDeletePost,
  setUpdatePost,
  league,
  tournament,
}) => {
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
        {!editMode && (
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
            {visible && (
              <div className={"options"}>
                <IconButton
                  className="edit"
                  icon={<MdEdit />}
                  size={"sm"}
                  style={{ marginRight: "30px" }}
                  onClick={() => {
                    console.log("edit");
                    setEditMode(true);
                  }}
                />
                <IconButton
                  className="delete"
                  icon={<MdDelete />}
                  size={"sm"}
                  onClick={() => {
                    console.log("delete");
                    setDeletePost({ id: news?.id });
                  }}
                />
              </div>
            )}
          </div>
        )}
        {editMode && (
          <div>
            <Input
              // placeholder={news?.title}
              onChange={setTitle}
              value={title}
            />
            <Input
              // placeholder={news?.subTitle}
              onChange={setSubTitle}
              value={subTitle}
            />
            <Uploader
              fileListVisible={false}
              draggable
              onChange={(e) => {
                setFile(e[e.length - 1]);
                previewFile(e[e.length - 1].blobFile, (value) => {
                  setFileInfo(value);
                });
              }}
            >
              {image && !fileInfo ? (
                <img src={image} alt="uploaded" />
              ) : fileInfo ? (
                <img src={fileInfo} alt="uploaded" />
              ) : (
                <UploadArea>Upload Image</UploadArea>
              )}
            </Uploader>
            {/* {image && (
              <img
                onError={() => {
                  setImage(false);
                }}
                src={image}
                alt="news post "
              />
            )} */}
            <Input
              // placeholder={news?.content}
              onChange={setContent}
              value={content}
            />
            {visible && (
              <div className={"optionsEdit"}>
                <ButtonCustom
                  size={"sm"}
                  style={{ marginRight: "30px" }}
                  onClick={() => {
                    console.log("save");
                    if (file) {
                      apiSettings.putImagePost(
                        league?.name,
                        league?.id,
                        tournament?.name,
                        file
                      );
                      setUpdatePost({
                        id: news?.id,
                        title,
                        subTitle,
                        content,
                        headerImage: file
                          ? `leagues/${league?.name}/${league?.id}/${tournament?.name}/news/headerImage/${file.name}`
                          : "",
                      });
                    } else {
                      setUpdatePost({
                        id: news?.id,
                        title,
                        subTitle,
                        content,
                      });
                    }

                    setEditMode(false);
                  }}
                >
                  Save
                </ButtonCustom>
                <ButtonCustom
                  size={"sm"}
                  onClick={() => {
                    console.log("cancel");
                    setEditMode(false);
                  }}
                >
                  Cancel
                </ButtonCustom>
              </div>
            )}
          </div>
        )}
      </Wrapper>
    </>
  );
};
export default NewsCard;
