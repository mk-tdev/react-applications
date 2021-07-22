import React from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import useStyles from "./styles";
import { deletePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag, i) => {
            return <span key={tag + i}>{`#${tag.trim()} `}</span>;
          })}
        </Typography>
      </div>

      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>

      <CardContent>
        <Typography variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button color="primary" size="small" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="default" /> LIKE {post.likeCount}
        </Button>
        <Button
          color="primary"
          size="small"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="default" /> DELETE
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
