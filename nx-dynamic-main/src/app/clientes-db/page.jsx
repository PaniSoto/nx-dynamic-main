import Clientes from "@/components/db-clientes";
import ClienteNuevo from "@/components/db-cliente-nuevo";
import { Suspense } from "react";
import Link from "next/link";
import Fallback from "@/components/fallback";

async function ClientesPage({ searchParams }) {
    const {query} = await searchParams;

    return (
        <section className="min-h-screen max-w-[1024px] mx-auto px-10 py-10">
            <Link href="/" className="fixed text-4xl p-2 bg-orange-300 rounded-full">🏠</Link>

            <h1 className='py-10 text-3xl text-blue-500 text-center border-b-4 border-b-blue-500'>
                CLIENTES
            </h1>
          
            <Suspense fallback={ <Fallback>Nuevo cliente ... </Fallback> }>
                <ClienteNuevo  />
            </Suspense>

            <Suspense fallback={ <Fallback>Obteniendo clientes ... </Fallback> }>
                <Clientes query={query || ''} />
            </Suspense>
        </section>

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))

    );
}

export default ClientesPage;