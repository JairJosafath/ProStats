import { useEffect, useState } from "react";
import { Wrapper, PlaceholderImage, UploadArea } from "./Styles";
import banner from "../../img/banner.jpg";
import { Input, Uploader } from "rsuite";
import ButtonCustom from "../ButtonCustom";
import { apiSettings } from "../../API/API";

function previewFile(file, callback) {
  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}

const NewsCard = ({ setOpen, setCreatePost, league, tournament }) => {
  const [image, setImage] = useState();
  const [file, setFile] = useState();
  const [fileInfo, setFileInfo] = useState();
  const [title, setTitle] = useState();
  const [subtitle, setSubTitle] = useState();
  const [content, setContent] = useState();

  useEffect(() => {
    console.log(file, "filee");
  }, [file]);
  return (
    <>
      <Wrapper>
        <Input placeholder="Title" maxLength={15} onChange={setTitle} />
        <Input placeholder="subtitle" maxLength={35} onChange={setSubTitle} />

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
          {fileInfo ? (
            <img src={fileInfo} alt="uploaded" />
          ) : (
            <UploadArea>Upload Image</UploadArea>
          )}
        </Uploader>
        <Input
          as="textarea"
          placeholder="content"
          maxLength={100}
          style={{ height: "100px" }}
          onChange={setContent}
        />
        <div>
          <ButtonCustom
            onClick={() => {
              file &&
                apiSettings.putImagePost(
                  league?.name,
                  league?.id,
                  tournament?.name,
                  file
                );
              setCreatePost({
                tournamentNewsId: tournament?.id,
                title: title,
                subTitle: subtitle,
                content: content,
                headerImage: file
                  ? `leagues/${league?.name}/${league?.id}/${tournament?.name}/news/headerImage/${file.name}`
                  : "",
              });
              setOpen(false);
            }}
          >
            OK
          </ButtonCustom>
          <ButtonCustom onClick={() => setOpen(false)}>Cancel</ButtonCustom>
        </div>
      </Wrapper>
    </>
  );
};
export default NewsCard;
