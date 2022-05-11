import { Uploader, toaster, Message, Loader, Avatar, Button } from "rsuite";
import { useState, useEffect } from "react";
import { apiSettings } from "../../API/API";
function previewFile(file, callback) {
  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}

const styles = {
  width: 150,
  height: 150,
  margin: 20,
};

const LUploadPhotoCustom = ({ team, teamTemp, setTeamTemp, file, setFile }) => {
  const [uploading, setUploading] = useState(false);
  const [teamImage, setTeamImage] = useState(null);
  const [uploadImage, setUploadImage] = useState(false);

  const handleUpload = () => {};

  useEffect(() => {
    const img = async () => {
      const data = await apiSettings.getImage(team.logo);
      setTeamImage(data);
      // console.log(data);
    };
    img();
  }, [team]);

  return (
    <>
      <Uploader
        fileListVisible={false}
        autoUpload={false}
        listType="picture"
        action="//jsonplaceholder.typicode.com/posts/"
        onChange={(file) => {
          // console.log("file event", file[0]);
          // console.log(file);

          setFile(file[file.length - 1]);
          previewFile(file[file.length - 1].blobFile, (value) => {
            setTeamImage(value);
          });
        }}
        onSuccess={(response) => {
          setUploading(false);
          toaster.push(<Message type="success">Uploaded successfully</Message>);
          // console.log(response);
        }}
        onError={() => {
          setTeamImage(null);
          setUploading(false);
          toaster.push(<Message type="error">Upload failed</Message>);
        }}
      >
        <button style={styles}>
          {/* {uploading && <Loader backdrop center />} */}
          {/* {uploadImage && <img src={TeamImage} width="100%" alt="uploader" />} */}
          {teamImage ? (
            <img src={teamImage} width="100%" alt="uploader" />
          ) : (
            <img src={"fallback.png"} width="100%" alt="uploader" style={{}} />
          )}
        </button>
      </Uploader>
      {/* <Button onClick={handleUpload()}>SAVE</Button> */}
    </>
  );
};

export default LUploadPhotoCustom;
