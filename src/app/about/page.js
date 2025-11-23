import Link from "next/link";


export default function About() {
    return (
        <>
            <div className="mt-20 flex items-center  flex-col justify-center">
                <h1 className="text-3xl text-white font-extralight">Personal Information</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                    <div>
                        <p className="text-white text-xl">Name: Monowar Hossain</p>
                        <p className="text-white text-xl">State: Khulna</p>
                        <p className="text-white text-xl">Country: Bangladesh</p>
                        <p className="text-white text-xl">Distric: Kushtia</p>
                        <p className="text-white text-xl">Upojela: Bheramara</p>
                    </div>
                    <div>
                        <iframe className="rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29154.277801972443!2d88.96914601389773!3d24.021022722433806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fea4479d868235%3A0x8f55e08c481d5072!2z4Kat4KeH4Kec4Ka-4Kau4Ka-4Kaw4Ka-!5e0!3m2!1sbn!2sbd!4v1756913039433!5m2!1sbn!2sbd" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

            <div className="mt-20 flex items-center  flex-col justify-center">
                <h1 className="text-3xl text-white font-extralight">Personal Information</h1>
                <div className="grid grid-cols-2 gap-4 items-center">
                    <div className="text-white col-span-2 ">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colSpan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <div>
                        <iframe className="rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29154.277801972443!2d88.96914601389773!3d24.021022722433806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fea4479d868235%3A0x8f55e08c481d5072!2z4Kat4KeH4Kec4Ka-4Kau4Ka-4Kaw4Ka-!5e0!3m2!1sbn!2sbd!4v1756913039433!5m2!1sbn!2sbd" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div> */}
                </div>
            </div>
        </>
    )
}