/** @format */

import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Switch,
  Button,
  useMediaQuery,
  Grid,
} from "@mui/material";
import {
  useTheme,
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { styled } from "@mui/system";
import MuiLink, { NextLinkComposed } from "../src/components/MuiLink";

//Example one
// const Child = () => {
//   const theme = useTheme();
//   console.log(theme);
//   return <Typography>This is a child</Typography>;
// };

// const Home = () => {
//   // const theme = useTheme();
//   // console.log(theme)

//   const [dark, setDark] = useState(false);

//   const theme = createTheme({
//     palette: {
//       secondary: {
//         main: "#de0909",
//       },
//       mode: dark ? "dark" : "light",
//     },
//   });
//   return (
//     <ThemeProvider theme={theme}>
//       <Paper>
//         <Box>
//           <Typography>This is a Typography component</Typography>
//           <Typography variant="button">
//             This is a Typography component
//           </Typography>
//           <Typography variant="h1" component="p" color="secondary">
//             This is a h1 text
//           </Typography>
//           <Child />
//           <Switch checked={dark} onChange={() => setDark((prev) => !prev)} />
//         </Box>
//       </Paper>
//     </ThemeProvider>
//   );
// };

//Example two

// const Home = () => {
//   return (
//     <Box>
//       <MuiLink href="/about">Go to about page</MuiLink>
//       <Button variant="contained" component={NextLinkComposed} to="/about">
//         Go to about page
//       </Button>
//     </Box>
//   );
// };

//Example three

// const MyContainer = styled("div")((props) => ({
//   height: "400px",
//   background: props.bg, //"yellow",
// }));

// const Home = () => {
//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.up("sm"));
//   //   const matches = useMediaQuery("(min-width:600px)");

//   //console.log(matches);
//   //console.log(theme.breakpoints.up("sm"))

//   const customTheme = responsiveFontSizes(
//     createTheme({
//       breakpoints: {
//         values: {
//           ...theme.breakpoints.values,
//           sm: 700,
//           mobile: 300,
//         },
//       },
//     })
//   );
//   console.log(customTheme);
//   return (
//     <ThemeProvider theme={customTheme}>
//       <MyContainer bg="red">
//         <Box
//           sx={{
//             "& .myBtn": {
//               width: "500px",
//             },
//           }}>
//           <Button
//             className="myBtn"
//             variant="contained"
//             sx={{
//               bgcolor: "secondary.main",
//               p: {
//                 xs: "20px",
//                 sm: "40px",
//                 md: "50px",
//               },
//               "&:hover": {
//                 width: "100px",
//                 bgcolor: (theme) => theme.palette.error.main,
//               },
//               [customTheme.breakpoints.up("sm")]: {
//                 bgcolor: "orange",
//               },
//             }}>
//             Go to about page
//           </Button>
//           <Typography variant="h2"> hello world</Typography>
//         </Box>
//       </MyContainer>
//     </ThemeProvider>
//   );
// };

//exmple four

const Home = () => {
  return (
    <Box>
      <Typography variant="h2"> hello world</Typography>
      <Grid container justifyContent="space-around">
        <Grid xs={10} sm={4} item sx={{ background: "teal" }}>
          1
        </Grid>
        <Grid xs={6} item sx={{ background: "red" }}>
          2
        </Grid>
        <Grid xs={7} item sx={{ background: "orange" }}>
          3
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
