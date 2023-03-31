import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const theme = createTheme();

export default function AddWaste() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    type: "",
    CollectionPoints: "",
    RecyclingCenters: "",
    Tag: "",
    weight: 0,
    wstno: "",
  });

  const { type, CollectionPoints, RecyclingCenters, Tag, weight, wstno } =
    formData;

  const onChange = (e) => {
    console.log("heloooo");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const post_data = {
      Tag: Tag,

      CollectionPoints: CollectionPoints,
      RecyclingCenters: RecyclingCenters,
      type: type,
      weight: weight,
      recyclable: true,
      
    };

     await axios.post(`http://localhost:8000/api/addWaste`, post_data);
    navigate(`/display`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add a new waste
          </Typography>
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="type"
                  label="type"
                  name="type"
                  autoComplete="type"
                  autoFocus
                  onChange={(e) => onChange(e)}
                  value={type}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="CollectionPoints"
                  label="CollectionPoints"
                  name="CollectionPoints"
                  autoComplete="CollectionPoints"
                  autoFocus
                  onChange={(e) => onChange(e)}
                  value={CollectionPoints}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Tag"
                  label="Tag"
                  name="Tag"
                  autoComplete="Tag"
                  autoFocus
                  onChange={(e) => onChange(e)}
                  value={Tag}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  margin="normal"
                  required
                  fullWidth
                  id="RecyclingCenters"
                  label="RecyclingCenters"
                  name="RecyclingCenters"
                  autoComplete="RecyclingCenters"
                  autoFocus
                  onChange={(e) => onChange(e)}
                  value={RecyclingCenters}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  margin="normal"
                  required
                  fullWidth
                  id="weight"
                  label="weight"
                  name="weight"
                  autoComplete="weight"
                  autoFocus
                  onChange={(e) => onChange(e)}
                  value={weight}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  margin="normal"
                  required
                  fullWidth
                  id="wstno"
                  label="wstno"
                  name="wstno"
                  autoComplete="wstno"
                  autoFocus
                  onChange={(e) => onChange(e)}
                  value={wstno}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="success"
            >
              Save
            </Button>
            <Grid container justifyContent="flex-end"></Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
