import { Box, Typography, TextField, Button } from "@mui/material";
import Link from "../LinkConfig";

export default function RecoveryPassword() {
  return (
    <Box
      display={"flex"}
      height={"100vh"}
      alignItems={"center"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"auto"}
        gap={"20px"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Esqueceu a senha?
          </Typography>
          <Typography
            variant="body2"
            component="span"
            autoComplete
            gutterBottom
          >
            Não se preocupe, lhê mandaremos instruções para recuperação
          </Typography>
        </Box>

        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type={"email"}
          size="small"
          required
        />
        <Button variant="contained">Recuperar Senha</Button>
        <Box>
          <Link
            href={{
              pathname: "/",
            }}
            style={{ textDecoration: "none" }}
          >
            Voltar para Login
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
