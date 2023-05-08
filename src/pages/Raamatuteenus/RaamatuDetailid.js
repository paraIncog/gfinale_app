function RaamatuDetailid({raamat}) {
    if (raamat.andmed == null) {
        return <h2>Laen raamatu andmeid. Palun Oodake!</h2>
    }

    return (
        <div className='ContentCard col-7'>
            <div className='GoodMargin'>
                <div className='row col-12'>
                    <img src={raamat.kaanepilt} alt="Raamatu Kaanekujundus" className='RaamatKujundus' />
                </div>
                <div className='RaamatAndmestik GoodMargin'>
                    <h2>"{raamat.pealkiri}"</h2>
                    <i>{raamat.autor}</i>
                    <p>{raamat.avalikustatud}</p>
                </div>
                <div className='row RaamatKirjeldus'>{raamat.kirjeldus}</div>
            </div>
        </div>
    );
}

export default RaamatuDetailid