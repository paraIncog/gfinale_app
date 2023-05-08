import { useEffect, useState } from 'react';
import Asukohad from './Asukohad';
import AsukohtDetailid from './AsukohtDetailid';
import {loeAndmed} from './kontrollerid/andmed.js'
import LisaAsukoht from './LisaAsukoht';

const IlmaTeenus = () => {
    const [aktiivne, setAktiivne] = useState(0)
    const [asukohad, setAsukohad] = useState([
        {
            nimi: 'Tallinn',
            lat: 59.437,
            long: 24.7536,
            andmed: null
        },
        {
            nimi: 'Tartu',
            lat: 59.378,
            long: 26.729,
            andmed: null
        },
        {
            nimi: 'Pärnu',
            lat: 58.23,
            long: 24.30,
            andmed: null
        },
    ])

    const lisaKoht = (nimi, lat, long) => {
        const uusKoht = {
            nimi: nimi,
            lat: lat,
            long: long,
            andmed: null
        }
        const uusMassiiv = [...asukohad, uusKoht]
        setAsukohad(uusMassiiv)
    }

    useEffect(() => {
        console.log('renderdus!')
        muudaAktiivset(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const asendaIlmaAndmed = (asukohaIndex, ilmaAndmed) => {
        const uuedAndmed = asukohad.map((asukoht, index) => {
            if (index !== asukohaIndex) {
                return asukoht
            }

            const ilm = {
                temperatuur: ilmaAndmed.temperature,
                aeg: ilmaAndmed.time,
                ilmakood: ilmaAndmed.weathercode,
                tuuleKiirus: ilmaAndmed.windspeed,
                kasPaev: ilmaAndmed.is_day,
                tuuleSuund: ilmaAndmed.winddirection
            }

            return { ...asukoht, andmed: ilm }
        })

        setAsukohad(uuedAndmed)
    }

    const muudaAktiivset = async (uusAktiivneIndeks) => {
        setAktiivne(uusAktiivneIndeks)
        const valitudAsukoht = asukohad[uusAktiivneIndeks]
        const ilmaAndmed = await loeAndmed(
            valitudAsukoht.lat,
            valitudAsukoht.long,
        )
        asendaIlmaAndmed(uusAktiivneIndeks, ilmaAndmed)
    }

    return (
        <div className='row mx-auto text-center col-11'>
            <div className='ContentCard HorizontalMargin'>
                <div className='row'>
                    <div className='col-5'>
                        <Asukohad
                            asukohad={asukohad}
                            muudaAktiivset={muudaAktiivset}
                        />
                        <LisaAsukoht lisaKoht={lisaKoht} />
                    </div>
                    <div className='col-7'>
                        <AsukohtDetailid
                            asukoht={asukohad[aktiivne]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IlmaTeenus