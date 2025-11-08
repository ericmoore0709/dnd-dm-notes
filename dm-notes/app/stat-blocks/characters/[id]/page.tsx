export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <div>Character Details: {id}</div>
}