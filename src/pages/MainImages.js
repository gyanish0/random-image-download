import { Container, Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dog from "../images/dog1.jpg";
const MainImages = () => {
  const navigate = useNavigate();
  const [stories, setStories] = React.useState([]);
  const getData = async (page) => {
    try {
      const res = await axios.get(
        "https://www.reddit.com/r/AccidentalWesAnderson/.json"
      );
      if (res.status === 200) {
        setStories(res.data.data.children);
        console.log(res.data.data.children);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const MAX_LENGTH = 25;
  return (
    <div>
      <Container>
        <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          Random Images
        </h1>
        <Grid container spacing={3}>
          {stories.map((story, i) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={story.data.id}>
              <div>
                <h2>{`${story.data.title.substring(0, MAX_LENGTH)}...`}</h2>
                <a
                  download
                  href={story.data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={story.data.url ? story.data.url : Dog}
                    alt="img"
                    style={{ width: "100%", maxHeight: "300px" }}
                  />
                </a>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MainImages;
