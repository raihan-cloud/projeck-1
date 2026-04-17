import { Group, Button, Text, Container } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <Container size="lg" h="100%">
      <Group justify="space-between" h="100%">
        {/* Logo Sekolah */}
        <Text size="xl" fw={900} variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
          SMK NEGERI 1
        </Text>

        {/* Menu Navigasi */}
        <Group gap="md">
          <Button variant="subtle" onClick={() => navigate('/')}>Beranda</Button>
          <Button variant="subtle" onClick={() => navigate('/tentang')}>Profil</Button>
          <Button variant="subtle" onClick={() => navigate('/berita')}>Berita</Button>
          <Button variant="filled" onClick={() => navigate('/kontak')}>Kontak</Button>
        </Group>
      </Group>
    </Container>
  );
}