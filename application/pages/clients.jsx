import { Container } from "@mui/material";
import ClientsTable from "../components/ClientsTable";

const Homepage = () => {
  return (
    <Container maxWidth="sm">
      <ClientsTable />
    </Container>
  );
};

export default Homepage;
