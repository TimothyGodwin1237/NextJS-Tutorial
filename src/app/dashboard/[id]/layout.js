
export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    return {
        title: `${user?.name || 'User'}`,
        // title:{
        //     absolute: `Dashboard - ${user?.name || 'User'}`,
        // },
        description: `This is the dashboard page for user ${user?.name || 'User'}`,
    };
}
export default function DashboardLayout({
    children,
}) {
    return (
        <div className="p-8">
            {children}
        </div>
    )
}