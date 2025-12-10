import WeaponList from "./WeaponList";

export default async function page() {
  const data = await (await (await fetch(`${process.env.SITE_URL}/api/v1/weapons`)).json()).data;
  
  return (
    <div className="text-center m-5">
        <h1 className="text-2xl my-2">Weapons</h1>
        <WeaponList weapons={data} />
    </div>
  )
}