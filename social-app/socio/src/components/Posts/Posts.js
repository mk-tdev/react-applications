import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  console.log("posts: ", posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      container
      alignItems="stretch"
      spacing={3}
      className={classes.mainContainer}
    >
      {posts.map((post, i) => (
        <Grid key={i} item xs={12} sm={6}>
          <Post key={post.id} post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
