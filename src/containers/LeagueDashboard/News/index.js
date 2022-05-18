import { IconButton, List } from "rsuite";
import ListItemCustom from "../../../components/ListCustom";
import ListCustom from "../../../components/ListCustom";
import NewsCard from "../../../components/NewsCard";
import NewsCardNew from "../../../components/NewsCardNew";
import { Wrapper } from "./Styles";
import { IoIosAddCircleOutline } from "react-icons/io";
import ButtonCustom from "../../../components/ButtonCustom";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const LNews = () => {
  const [openNewPost, setOpenNewPost] = useState(false);
  const { setCreatePost, league, tournament, setDeletePost, setUpdatePost } =
    useOutletContext();
  // console.log(league);
  return (
    <>
      <Wrapper>
        <div>
          <ButtonCustom onClick={() => setOpenNewPost(true)}>
            New Post
          </ButtonCustom>
          {openNewPost && (
            <NewsCardNew
              setOpen={setOpenNewPost}
              setCreatePost={setCreatePost}
              league={league}
              tournament={tournament}
            />
          )}
        </div>
        <div>
          <List>
            {tournament?.news?.items.map((news) => (
              <li>
                <NewsCard
                  news={news}
                  setDeletePost={setDeletePost}
                  setUpdatePost={setUpdatePost}
                  league={league}
                  tournament={tournament}
                />
              </li>
            ))}
          </List>
        </div>
      </Wrapper>
    </>
  );
};

export default LNews;
