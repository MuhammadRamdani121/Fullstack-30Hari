import DashboardCard from "../components/DashboardCard";

export default function Dashboard() {
  return (
    <>
      <main>
        <h1>Dashboard</h1>

        <section>
          <DashboardCard title="Total Pengajuan" value="42" />
          <DashboardCard title="Menunggu" value="12" />
          <DashboardCard title="Disetujui" value="25" />
          <DashboardCard title="Ditolak" value="5" />
        </section>
      </main>
    </>
  );
}
