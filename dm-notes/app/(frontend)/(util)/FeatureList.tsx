import Link from 'next/link'

interface Feature {
    id: string,
    name: string
}

export default function FeatureList({ features, pluralLabel }: { features: Array<Feature>, pluralLabel: string }) {
    return (
        <div>
            {(!features || features?.length === 0) && <div>No ${pluralLabel} found.</div>}
            {(features?.length > 0) && (
                <ul className="my-4">
                    {features?.map(f => (
                        <li className="my-1 underline" key={f.id}><Link href={`${pluralLabel}/` + f.id}>{f.name}</Link></li>
                    ))}
                </ul>
            )}
        </div>
    )
}
