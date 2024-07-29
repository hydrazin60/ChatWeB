import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHidden } from "../components/style/StyledComponents";
import { useInputValidation } from "6pp";
export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };
  const name = useInputValidation(" ");
  const bio = useInputValidation(" ");
  const password = useInputValidation(" ");
  const Username = useInputValidation(" ");
  return (
    <Container
      component={"main"}
      maxWidth={"xs"}
      sx={{
        height: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "auto",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
              Login
            </Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={Username.value}
                onChange={Username.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                sx={{
                  mt: "1rem",
                  width: "100%",
                }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>
              <Button variant="text" fullWidth onClick={toggleLogin}>
                SIGN UP INSTEAD
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
              Create Account
            </Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{ width: "10rem", height: "10rem", objectFit: "contain" }}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    color: "white",
                    bgcolor: "rgba( 0 ,  0 ,  0, 0.5)",
                    ":hover": {
                      bgcolor: "rgba( 0,  0,  0, 0.7)",
                    },
                  }}
                  component="label"
                >
                  <CameraAltIcon />
                  <VisuallyHidden type="file" name="avatar" />
                </IconButton>
              </Stack>

              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={Username.value}
                onChange={Username.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                sx={{
                  mt: "1rem",
                  width: "100%",
                }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign Up
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>
              <Button variant="text" fullWidth onClick={toggleLogin}>
                LOGIN INSTEAD
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
}
