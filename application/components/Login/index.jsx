import { Typography, Button, TextField, Box } from "@mui/material";
import Link from "../LinkConfig";

export default function Login() {
  return (
    <Box
      display={"flex"}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
        <Typography variant="h4" component="h1" gutterBottom>
          Faça login com sua conta
        </Typography>
        <TextField
          size="small"
          id="email"
          label="Email"
          variant="outlined"
          autoComplete
          required
          type={"email"}
        />
        <TextField
          size="small"
          id="senha"
          label="Senha"
          variant="outlined"
          required
          type={"password"}
        />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link
            href={{
              pathname: "/recovery-password",
            }}
            style={{ textDecoration: "none" }}
          >
            Recuperar Senha
          </Link>
          <Button variant="contained">Login</Button>
        </Box>
      </Box>
    </Box>
  );
}
