import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import stylesTheme from "../../styles/theme";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: `3px solid ${stylesTheme.palette.primary[200]}`,
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export default function ClientModal({
  setClientModal,
  addClient,
  editClient,
  clients,
  setClients,
  oldClient,
  selectionModel,
  setOldClient,
}) {
  const [nome, setNome] = useState("" || (oldClient && oldClient.nome));
  const [email, setEmail] = useState("" || (oldClient && oldClient.email));
  const [telefone, setTelefone] = useState(
    "" || (oldClient && oldClient.telefone)
  );

  const handleClick = () => {
    setClientModal(false);
    if (!oldClient)
      return addClient(clients, setClients, { nome, email, telefone });

    editClient(clients, setClients, selectionModel, setOldClient, {
      nome,
      email,
      telefone,
    });
  };

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h4" component="h2">
        Dados do Cliente
      </Typography>

      <TextField
        id="filled-basic"
        label="Nome"
        variant="outlined"
        required
        onChange={(e) => setNome(e.target.value)}
        value={nome}
      />

      <TextField
        id="filled-basic"
        label="Email"
        variant="outlined"
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <TextField
        id="filled-basic"
        label="Telefone"
        variant="outlined"
        required
        onChange={(e) => setTelefone(e.target.value)}
        value={telefone}
      />

      <Button
        style={{ backgroundColor: stylesTheme.palette.primary[900] }}
        variant="contained"
        onClick={handleClick}
      >
        Concluido
      </Button>

      <Button
        style={{ backgroundColor: "rgb(251, 6, 21, 0.6)" }}
        variant="contained"
        onClick={() => {
          setClientModal(false);
        }}
      >
        Cancelar
      </Button>
    </Box>
  );
}
