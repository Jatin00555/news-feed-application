import { TextField, InputAdornment, SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";

export interface TextFilterProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  sx?: SxProps;
}

const TextFilter = (props: TextFilterProps) => {
  const { placeholder, value, onChange, sx } = props;
  const { t } = useTranslation();
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder ?? t("search")}
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "text.primary" }} />
          </InputAdornment>
        ),
        sx: { borderRadius: 2, height: "40px" },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "text.primary" },
          "&:hover fieldset": { borderColor: "text.secondary" },
        },
        maxWidth: "400px",
        ...sx,
      }}
    />
  );
};

export default TextFilter;
