import { Title, Text, Button, Container, SimpleGrid, Card, Image } from '@mantine/core';

export default function Home() {
  return (
    <Container size="lg">
      {/* HERO SECTION */}
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <Title order={1} size="48px" fw={900}>
          Selamat Datang di <Text span c="blue" inherit>SMK Unggul Digital</Text>
        </Title>
        <Text size="xl" mt="md" c="dimmed">
          Mencetak lulusan kompeten di bidang teknologi informasi dan industri kreatif.
        </Text>
        <Button size="lg" mt="xl" radius="md">Lihat Pendaftaran</Button>
      </section>

      {/* BERITA TERBARU */}
      <Title order={2} mb="lg">Berita Terbaru</Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
        {[1, 2, 3].map((i) => (
          <Card key={i} shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image src="https://placehold.co/600x400" height={160} alt="News" />
            </Card.Section>
            <Text fw={500} mt="md">Kegiatan Workshop Web Development</Text>
            <Text size="sm" c="dimmed" mt="xs">Siswa kelas 12 mengikuti pelatihan pembuatan website kampus...</Text>
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">Baca Selengkapnya</Button>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}