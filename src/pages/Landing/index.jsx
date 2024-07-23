import { Grid } from "@mui/material";
import Left from "../../components/Left/Left";
import Right from "../../components/Right/Right";

function index() {
  return (
    <Grid component="main" container>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { md: "100vh", xs: "80vh" },
          background: "#f2f2f2",
        }}
        item
        xs={12}
        lg={8}
      >
        <Left />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Right />
      </Grid>
    </Grid>
  );
}

export default index;
