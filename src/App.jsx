import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell, Text, Container } from '@mantine/core';

// 1. Impor Komponen Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// 2. Impor Halaman (PASTIKAN FILE INI ADA DI FOLDER src/pages/)
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <AppShell
        header={{ height: 70 }}
        padding="md"
      >
        <AppShell.Header>
          <Header />
        </AppShell.Header>

        <AppShell.Main>
          {/* Container membantu agar konten tidak terlalu lebar ke pinggir */}
          <Container size="lg" pt="xl"> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tentang" element={<About />} />
              <Route path="/berita" element={<News />} />
              <Route path="/kontak" element={<Contact />} />
              
              {/* Fallback jika alamat URL salah */}
              <Route path="*" element={<Text ta="center" mt="xl">Halaman Tidak Ditemukan</Text>} />
            </Routes>
          </Container>
        </AppShell.Main>

        {/* Footer diletakkan di luar Main agar tetap di bawah */}
        <Footer />
      </AppShell>
    </BrowserRouter>
  );
}

export default App;