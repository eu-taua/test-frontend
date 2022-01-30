import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import Warning from "../Toastify/Warning";
import Sucess from "../Toastify/Sucess";
import { ToastContainer } from "react-toastify";
import ResponsiveDialog from "../ResponsiveDialog";
import ClientModal from "../ClientModal";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nome", headerName: "Nome", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  {
    field: "telefone",
    headerName: "Telefone",
    width: 90,
  },
];

let id = 3;

const handleAdd = (setClientModal, clients, setClients, setOldClient) => {
  setClientModal(true);
  setOldClient();
};

const addClient = (clients, setClients, newClient) => {
  if (!newClient.nome || !newClient.email || !newClient.telefone)
    return Warning("Preencha todos os campos");

  const clientsCopy = [...clients];
  newClient.id = id;
  id++;
  clientsCopy.push(newClient);
  setClients(clientsCopy);
  return Sucess("Cliente Adicionado");
};

const handleEdit = (setClientModal, selected, clients, setOldClient) => {
  if (selected.length === 0) return Warning("Selecione um cliente para editar");
  if (selected.length > 1)
    return Warning("Selecione apenas um cliente para editar");

  const clientsCopy = [...clients];
  setOldClient(clientsCopy.find((client) => client.id === selected[0]));

  setClientModal(true);
};

const editClient = (clients, setClients, selected, setOldClient, newClient) => {
  if (!newClient.nome || !newClient.email || !newClient.telefone)
    return Warning("Preencha todos os campos");

  const clientsCopy = [...clients];
  const index = clientsCopy.findIndex((client) => client.id === selected[0]);
  newClient.id = selected[0];
  clientsCopy[index] = newClient;
  setClients(clientsCopy);
  setOldClient();
  return Sucess("Cliente Editado");
};

const handleDelete = (
  selected,
  setDeleteDialog,
  setDialogTitle,
  setDialogText
) => {
  if (selected.length < 1)
    return Warning("Selecione um ou mais clientes para excluir");

  setDialogTitle(`Excluir ${selected.length === 1 ? "Cliente" : "Clientes"}?`);
  setDialogText(
    `Deseja excluir ${
      selected.length === 1 ? "o cliente" : `os ${selected.length} clientes`
    }?`
  );
  setDeleteDialog(true);
};

const deleteClients = (selected, clients, setClients) => {
  const clientsCopy = [...clients];
  selected.forEach((selection) => {
    const index = clientsCopy.findIndex((client) => client.id === selection);
    clientsCopy.splice(index, 1);
  });

  setClients(clientsCopy);
  return Sucess("Sucesso ao excluir");
};

export default function DataTable() {
  const [clientModal, setClientModal] = React.useState(false);
  const [deleteDialog, setDeleteDialog] = React.useState(false);
  const [dialogTitle, setDialogTitle] = React.useState("");
  const [dialogText, setDialogText] = React.useState("");
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [oldClient, setOldClient] = React.useState();
  const [clients, setClients] = React.useState([
    {
      id: 1,
      nome: "jhon",
      email: "jhon@mail.com",
      telefone: 3599999999,
    },
    {
      id: 2,
      nome: "maria",
      email: "maria@mail.com",
      telefone: 1199999999,
    },
  ]);

  return (
    <Box
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"10px"}
    >
      <Box alignSelf={"flex-start"}>
        <Box display={"flex"} gap={"10px"}>
          <Button
            variant="contained"
            onClick={() => {
              handleAdd(setClientModal, clients, setClients, setOldClient);
            }}
          >
            Novo Cliente
          </Button>
          <Button
            variant="contained"
            onClick={() =>
              handleEdit(setClientModal, selectionModel, clients, setOldClient)
            }
          >
            Editar Cliente
          </Button>
          <Button
            variant="contained"
            onClick={() =>
              handleDelete(
                selectionModel,
                setDeleteDialog,
                setDialogTitle,
                setDialogText
              )
            }
          >
            Deletar Clientes
          </Button>
        </Box>
      </Box>
      <Box style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={clients}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableColumnMenu
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
        />
      </Box>
      <ToastContainer />
      {clientModal && (
        <ClientModal
          setClientModal={setClientModal}
          addClient={addClient}
          editClient={editClient}
          clients={clients}
          setClients={setClients}
          oldClient={oldClient}
          selectionModel={selectionModel}
          setOldClient={setOldClient}
        />
      )}
      <ResponsiveDialog
        deleteDialog={deleteDialog}
        setDeleteDialog={setDeleteDialog}
        title={dialogTitle}
        text={dialogText}
        selectionModel={selectionModel}
        clients={clients}
        setClients={setClients}
        deleteClients={deleteClients}
      />
    </Box>
  );
}
