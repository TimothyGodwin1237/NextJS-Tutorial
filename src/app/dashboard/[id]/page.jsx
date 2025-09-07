export default async function DashboardPage({ params }) {
  const { id } = await params;
  return <div>Dashboard for User: {id}</div>;
}
