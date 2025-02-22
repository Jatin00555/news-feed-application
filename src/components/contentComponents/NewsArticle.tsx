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
import { newsCardStyling, newsDescStyling } from "../styles";

interface NewsArticleProps {
  isLoading?: boolean;
  article?: NewsArticleType;
}

const NewsArticle = (props: NewsArticleProps) => {
  const { isLoading, article } = props;
  const { title, avatarUrl, subheader, imageUrl, description } = article ?? {};
  return (
    <Card sx={{ ...newsCardStyling, backgroundColor: "primary.main" }}>
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

      <CardContent sx={{ overflow: "hidden" }}>
        {isLoading ? (
          <>
            <Skeleton animation="wave" height={10} sx={{ mb: 1 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </>
        ) : (
          <Typography
            variant="body2"
            sx={newsDescStyling}
            color={"text.primary"}
          >
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default NewsArticle;
