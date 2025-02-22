const newsCardStyling = {
  width: "100%",

  boxShadow: 1,
  borderRadius: 2,
  maxHeight: "400px",
};

const newsDescStyling = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 7,
};

const newsAreaContainer = {
  flex: 1,
  alignItems: "center",
  padding: "20px",
  height: "100%",
};

const categoryContainer = {flexDirection:'row', gap:1, flexWrap:'wrap', alignItems:'center', minWidth:'50%'} 

export { newsCardStyling, newsDescStyling, newsAreaContainer, categoryContainer };
