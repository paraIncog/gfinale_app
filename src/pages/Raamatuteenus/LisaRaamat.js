import { useState } from "react"

import kaanepilt_otsing from './icons/book_unknown.png';

function LisaRaamat({ lisaRaamat }) {
    const [pealkiri, setPealkiri] = useState('')
    const [autor, setAutor] = useState('')
    const [avalikustatud, setAvalikustatud] = useState('')
    const [kirjeldus, setKirjeldus] = useState('')
    const [kaanepilt, setKaanepilt] = useState('')

    const raamatuAndmeteLisamine = (event) => {
        event.preventDefault()
        console.log('Lisa raamat ' + pealkiri + '\n' + autor + '\n' + avalikustatud + '\n')
        lisaRaamat(pealkiri, autor, avalikustatud, kirjeldus, kaanepilt)
        setPealkiri('')
        setAutor('')
        setAvalikustatud('')
        setKirjeldus('')
        setKaanepilt('')
    }

    return (
        <div className="GoodMargin">
            <form onSubmit={raamatuAndmeteLisamine}>
                <div className='row'>
                    <label>*Pealkiri <span>(Max 20 tähemärki)</span>:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={pealkiri}
                        onChange={({ target }) => setPealkiri(target.value)}
                        placeholder="Pealkiri"
                        maxLength={20}
                        required
                    />
                </div>
                <div className='row'>
                    <label>*Autor:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={autor}
                        onChange={({ target }) => setAutor(target.value)}
                        placeholder="Autor"
                        required
                    />
                </div>
                <div className='row'>
                    <label>Avalikustatud:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={avalikustatud}
                        onChange={({ target }) => setAvalikustatud(target.value)}
                        placeholder="Avalikustatud"
                    />
                </div>
                <div className='row'>
                    <label>Lühikirjeldus:</label>
                    <textarea
                        type="text"
                        className="form-control"
                        value={kirjeldus}
                        onChange={({ target }) => setKirjeldus(target.value)}
                        placeholder="Lühikirjeldus"
                        rows={4}
                    />
                </div>
                <div className='row'>
                    <label>Kaanekujundus:</label>
                    <input
                        type="image"
                        src={kaanepilt_otsing}
                        alt=""
                        className="form-control RaamatKujundusInput"
                        value={kaanepilt}
                        onChange={({ target }) => setKaanepilt(target.value)}
                    />
                </div>
                <div>
                    <input
                        className="row btn btn-primary"
                        type="submit"
                        value="Lisa Raamat"
                    />
                </div>
            </form>
        </div>
    );
}

export default LisaRaamat