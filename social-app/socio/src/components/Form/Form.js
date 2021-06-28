import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Paper, TextField, Typography, Button } from "@material-ui/core";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { createPost } from "../../actions/posts";

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a memory</Typography>
        <TextField
          className={classes.textInput}
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          name="creator"
          onChange={(e) => {
            setPostData({ ...postData, creator: e.target.value });
          }}
        />
        <TextField
          className={classes.textInput}
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          name="title"
          onChange={(e) => {
            setPostData({ ...postData, title: e.target.value });
          }}
        />
        <TextField
          className={classes.textInput}
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          name="message"
          onChange={(e) => {
            setPostData({ ...postData, message: e.target.value });
          }}
        />
        <TextField
          className={classes.textInput}
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          name="tags"
          onChange={(e) => {
            setPostData({ ...postData, tags: e.target.value });
          }}
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Save
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
