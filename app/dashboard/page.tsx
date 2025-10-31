import NavLink from "./nav-link"

const fetchCustomers = async () => {
    return new Promise<{id: string , title: string}[]>((resolve) => {
        setTimeout (() => {
            resolve ([
                {id: "1", title: "Customer One"},
                {id: "2", title: "Customer Two"},
                {id: "3", title: "Customer Three"},
            ])
        }, 1000);
    })
}

const fetchCommodity = async () => {
    return new Promise<{id: string , name: string}[]>((resolve) => {
        setTimeout (() => {
            resolve ([
                {id: "a", name: "Commodity A"},
                {id: "b", name: "Commodity B"},
                {id: "c", name: "Commodity C"},
            ])
        }, 500);
    })
}

export default async function Dashboard() {

    await Promise.all([fetchCustomers(), fetchCommodity()]);
    
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Welcome to your Dashboard!
          <NavLink />
        </h1>
      </main>
    </div>
  );
}