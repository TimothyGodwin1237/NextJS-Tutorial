import Header from "./Header"

export default function DashboardLayout({
    children,
    team,
    analytics,
}) {
    return (
        <div className="p-8">
            <Header />
            {children}
            <div className="flex gap-4 py-4">
                {team}
                {analytics}
            </div>
        </div>
    )
}