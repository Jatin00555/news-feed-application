import {
  Card,
  CardHeader,
  Skeleton,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { NewsArticleType } from "../../types/commonTypes";

interface NewsArticleProps {
  isLoading?: boolean;
  article?: NewsArticleType;
}

const NewsArticle = (props: NewsArticleProps) => {
  const { isLoading, article } = props;
  const { title, avatarUrl, subheader, imageUrl, description } = article ?? {};
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
          isLoading ? (
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
        title={
          isLoading ? (
            <Skeleton animation="wave" height={10} width="80%" sx={{ mb: 1 }} />
          ) : (
            title
          )
        }
        subheader={
          isLoading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            subheader
          )
        }
      />

      {isLoading ? (
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
        {isLoading ? (
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
