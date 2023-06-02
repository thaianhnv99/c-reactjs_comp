import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "src/hooks/useToken";
import { AuthServices } from "src/services";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setToken, token } = useToken();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const bodyReq = {
      email,
      password,
    };
    console.log("🚀 ~ file: Login.tsx:15 ~ handleLogin ~ bodyReq:", bodyReq);

    try {
      const { data, status } = await AuthServices.login(bodyReq);
      if (data && status === 200) {
        setToken("token");
        navigate("/home");
      }
      console.log("data", data);
    } catch (error) {
      setToken("");
      console.log("error", error);
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <Box height="100vh">
        <Box
          sx={{
            width: "400px",
            textAlign: "center",
            position: "relative",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography variant="h3">Login</Typography>
          <TextField
            placeholder="Pls enter email"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            placeholder="Pls enter password"
            size="small"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
              sx={{
                color: "gray",
              }}
            />
            <Typography>Forgot ?</Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              borderRadius: "40px",
            }}
            type="submit"
          >
            Login
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default LoginPage;
