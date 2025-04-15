import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { busData } from "../../api/Busdata";
import { useNavigate, useLocation } from "react-router-dom";

const BookingCards = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const from = query.get("from");
  const to = query.get("to");
  const date = query.get("date");

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "90px",
        marginLeft: "110px",
      }}
    >
      {busData.map((bus) => (
        <Card key={bus.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="160"
              image={bus.image}
              alt={bus.busName}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {bus.busName}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Route: {from} ➡️ {to}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Date: {date}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Timings: {bus.timings.join(" | ")}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ marginTop: 1, fontWeight: "bold" }}
              >
                ₹{bus.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => navigate(`/booking/${bus.id}`)}
            >
              Book Now
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default BookingCards;
