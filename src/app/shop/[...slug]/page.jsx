export default async function ShopPage({ params }) {
    const { slug } = await params;
    return (
        <p className="text-2xl">
            Showing shop path for: <strong>{slug}</strong>
        </p>
    );
}
