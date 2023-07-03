import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import PrimaryButton from "../atom/PrimaryButton";

type FeaturedForSaleCardProps = {};

const FeaturedForSaleCard: React.FC<FeaturedForSaleCardProps> = () => {
  return (
    <Card sx={{ maxWidth: 345, height: "320px", borderRadius: "15px" }}>
      <CardMedia
        sx={{ height: 200 }}
        component="img"
        src="https://img.freepik.com/foto-gratis/casa-aislada-campo_1303-23773.jpg"
        title="demo house"
      />
      <CardContent sx={{ position: "relative" }}>
        <PrimaryButton
          text="Ver más"
          sx={{
            position: "absolute",
            top: "-20px",
            left: "250px",
            display: "inline-block",
            paddingY: "8px",
            paddingX: "15px",
            fontSize: "0.8rem",
            borderRadius: "12px",
          }}
        />
        <Typography variant="body1" color="text.primary">
          Casa 5 dormitorios en Villa Urquiza
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          fontWeight={"bold"}
          fontSize={"1rem"}
          marginTop={"5px"}
          marginBottom={"5px"}
        >
          Av. Monroe 4511
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex" }}>
            <SquareFootIcon className="primary-light" />
            <Typography>680 m</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <BedIcon className="primary-light" />
            <Typography>5</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <BathtubIcon className="primary-light" />
            <Typography>2</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <DirectionsCarFilledIcon className="primary-light" />
            <Typography>2</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
export default FeaturedForSaleCard;
