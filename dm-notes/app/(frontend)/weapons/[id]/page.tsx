import WeaponDetails from "./WeaponDetails";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const weapon = await (await (await fetch(`${process.env.SITE_URL}/api/v1/weapons/${id}`)).json()).data;

    return (
        <div className="text-center mt-4">
            <WeaponDetails weapon={weapon} />
        </div>
    )
}
