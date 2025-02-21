import { Grid } from "@mui/material";
import NewsArticle from "./NewsArticle";
import withInfiniteScroll from "../hocs/withInfinityScroll";
import { NewsArticleType } from "../../types/commonTypes";
interface ContentAreaProps {
  articles: NewsArticleType[];
}

const ContentArea = ({ articles }: ContentAreaProps) => {
  return (
    <Grid
      container
      spacing={{
        xs: 2,
        sm: 3,
        md: 4,
      }}
      columns={{
        xs: 1,
        sm: 2,
        md: 6,
        lg: 12,
      }}
      justifyContent="center"
      alignItems="center"
    >
      {articles.map((article, index) => (
        <Grid item xs={1} sm={1} md={2} lg={3} key={index}>
          <NewsArticle article={article} />
        </Grid>
      ))}
    </Grid>
  );
};

export default withInfiniteScroll(ContentArea);
