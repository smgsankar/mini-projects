import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { ThemeProvider } from "next-themes";

const App = () => {
  return (
    <ThemeProvider>
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
};

export default App;
