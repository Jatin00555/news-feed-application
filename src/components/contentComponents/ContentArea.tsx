import { Grid } from "@mui/material";
import NewsArticle from "./NewsArticle";
import { FullWidthBoxStack } from "../coreComponents/styledComponents";

// Sample data - replace with your actual articles
const sampleArticles = [
  {
    id: 1,
    title: "New Technology Breakthrough",
    summary: "Scientists discover revolutionary approach to quantum computing.",
    imageUrl: "/api/placeholder/400/250",
    date: "2025-02-20",
  },
  {
    id: 2,
    title: "Global Markets Update",
    summary: "Markets rally as new economic policies take effect worldwide.",
    imageUrl: "/api/placeholder/400/250",
    date: "2025-02-21",
  },
  {
    id: 3,
    title: "Climate Initiative Launched",
    summary: "Major countries agree on ambitious new climate goals.",
    imageUrl: "/api/placeholder/400/250",
    date: "2025-02-21",
  },
  {
    id: 4,
    title: "Sports Championship Results",
    summary: "Underdog team claims victory in dramatic final match.",
    imageUrl: "/api/placeholder/400/250",
    date: "2025-02-19",
  },
];

const ContentArea = () => {
  return (
    <FullWidthBoxStack sx={{ overflow: "auto" }}>
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
        {sampleArticles.map((article) => (
          <Grid item xs={1} sm={1} md={2} lg={3} key={article.id}>
            <NewsArticle />
          </Grid>
        ))}
      </Grid>
    </FullWidthBoxStack>
  );
};

export default ContentArea;
