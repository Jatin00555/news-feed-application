import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
  IconButton,
  Skeleton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface NewsArticleProps {
  loading?: boolean;
  avatarUrl?: string;
  title?: string;
  subheader?: string;
  imageUrl?: string;
  description?: string;
}

const NewsArticle: React.FC<NewsArticleProps> = ({
  loading = true,
  avatarUrl,
  title,
  subheader,
  imageUrl,
  description,
}) => {
  return (
    <Card
      sx={{
        width: "100%",
        backgroundColor: "primary.main",
        boxShadow: 1,
        borderRadius: 2,
      }}
    >
      <CardHeader
        avatar={
          loading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar alt={title} src={avatarUrl} />
          )
        }
        action={
          !loading && (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton animation="wave" height={10} width="80%" sx={{ mb: 1 }} />
          ) : (
            title
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            subheader
          )
        }
      />

      {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={title}
          sx={{ objectFit: "cover" }}
        />
      )}

      <CardContent>
        {loading ? (
          <>
            <Skeleton animation="wave" height={10} sx={{ mb: 1 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </>
        ) : (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default NewsArticle;
