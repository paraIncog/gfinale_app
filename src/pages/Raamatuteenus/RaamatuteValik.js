function RaamatuteValik({raamatud, muudaAktiivsetRaamatut}) {
    return (
        raamatud.map((raamat, index) => {
            return (
                <div
                    className='row col-12 RaamatNimekirjas btn'
                    key={raamat.index}
                    onClick={() => muudaAktiivsetRaamatut(index)}
                    >
                    {raamat.pealkiri}
                </div>
            )
        })
    );
}

export default RaamatuteValik