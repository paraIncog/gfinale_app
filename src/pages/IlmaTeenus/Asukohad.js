function Asukohad({asukohad, muudaAktiivset}) {
    return (
        asukohad.map((asukoht, index) => {
            return (
                <div 
                    className="btn btn-link"
                    key={asukoht.index}
                    onClick={() => muudaAktiivset(index)}
                >
                    {asukoht.nimi}
                </div>
            )
        })

    )
}

export default Asukohad