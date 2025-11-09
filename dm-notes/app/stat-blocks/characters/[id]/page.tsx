export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <div className="text-center mt-4">Character Details: {id}</div>
}