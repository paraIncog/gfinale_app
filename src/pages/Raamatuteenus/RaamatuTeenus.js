import { useEffect, useState } from "react"
import {loeRaamatuAndmed} from "./loeRaamatuAndmed"

import RaamatuteValik from "./RaamatuteValik";
import RaamatuDetailid from "./RaamatuDetailid";
import LisaRaamat from "./LisaRaamat";

import ase_vprints_kpilt from './kaanepildid/ase_vprints_kpilt.jpg';
import go_1984_kpilt from './kaanepildid/go_1984_kpilt.jpg';
import ml_sinimaed_kpilt from './kaanepildid/ml_sinimaed_kpilt.jpg';

const RaamatuTeenus = () => {
    const [aktiivneRaamat, setAktiivneRaamat] = useState(0)
    const [raamatud, setRaamatud] = useState([
        {
            id: 1,
            pealkiri: 'Väike Prints',
            autor: 'Antoine de Saint-Exupéry',
            avalikustatud: '1943',
            kirjeldus: '„Väike prints“ on kirjandusklassika, mis on olnud 75 aastat järjepidevalt nii laste kui ka täiskasvanute lugemisvaras. Raamatut peetakse maailma tõlgituimaks ja loetuimaks teoseks. Lugu võib käsitleda kui fantaasiajutustust lendurist, kes kohtab teiselt plaanedilt pärit pisikest poisikest; samas on tegu sügava alltekstiga inimese iseloomust ja tõekspidamistest, lugeja jaoks kohati irooniline, kuid tänaseni päevakajaline.',
            kaanepilt: ase_vprints_kpilt
        },
        {
            id: 2,
            pealkiri: '1984',
            autor: 'George Orwell',
            avalikustatud: '1949',
            kirjeldus: 'Winston Smith töötab Okeaania Tõeministeeriumis, kus tema ülesanne on ajalugu ümber kirjutada. Ta on pisike mutter Partei masinavärgis, mida juhib kõikvõimas Suur Vend. Totalitaarses ühiskonnas, kus valitseb propaganda, järelvalve ja tsensuur, leiab Winston kolleeg Julia seltskonnast tuge – armastuse, mõningase vabaduse ja lootuse paremaks tulevikuks. Kuid nad ei tea, et Suur Vend jälgib kõike ja kõiki!',
            kaanepilt: go_1984_kpilt
        },
        {
            id: 3,
            pealkiri: 'Sinimäed 1944. II Maailmasõja lahingud Kirde-Eestis',
            autor: 'Mart Laar',
            avalikustatud: '2006',
            kirjeldus: '1944. aasta kevadel kujunes Narva rinne siia koondatud jõudude kontsentratsiooni poolest kõige kuumemaks kohaks idarindel. Narva all peatati Punaarmee edasitung üheksaks kuuks, siin hukkusid kümned tuhanded sõdurid. Käesolev raamat annab mälestustele ja rikkalikule arhiivimaterjalile tuginedes esimese põhjalikuma ülevaate Narva jõel ja Sinimägedes toimunud lahingutest, kajastades Punaarmee sissetungi Eestis, Punaarmee sillapeade hävitamist Narva jõel, lahinguid Krivasoo sillapeal 1944. aasta märtsis-aprillis, Auvere lahingut, Narva langemist ja lahinguid Sinimägedes.',
            kaanepilt: ml_sinimaed_kpilt
        }
    ])

    const lisaRaamat = (pealkiri, autor, avalikustatud, kirjeldus, kaanepilt) => {
        const uusRaamat = {
            pealkiri: pealkiri,
            autor: autor,
            avalikustatud: avalikustatud,
            kirjeldus: kirjeldus,
            kaanepilt: kaanepilt
        }
        const uusRaamatuMassiiv = [...raamatud, uusRaamat]
        setRaamatud(uusRaamatuMassiiv)
    }

    useEffect(() => {
        console.log('PC can\'t handle the rendering!')
        muudaAktiivsetRaamatut(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const asendaRaamatuAndmed = (raamatuIndex, raamatuAndmed) => {
        const uuedRaamatuAndmed = raamatud.map((raamat, index) => {
            if (index !== raamatuIndex) {
                return raamat
            }

            const raamatx = {
                pealkiri: raamatuAndmed.pealkiri,
                autor: raamatuAndmed.autor,
                avalikustatud: raamatuAndmed.avalikustatud,
                kirjeldus: raamatuAndmed.kirjeldus,
                kaanepilt: raamatuAndmed.kaanepilt
            }

            return { ...raamat, andmed: raamatx }
        })

        setRaamatud(uuedRaamatuAndmed)
    }

    const muudaAktiivsetRaamatut = async (uusAktiivneRaamatuIndex) => {
        setAktiivneRaamat(uusAktiivneRaamatuIndex)
        const valitudRaamat = raamatud[uusAktiivneRaamatuIndex]
        const raamatuAndmed = await loeRaamatuAndmed(
            valitudRaamat.pealkiri,
            valitudRaamat.autor,
            valitudRaamat.avalikustatud,
            valitudRaamat.kirjeldus,
            valitudRaamat.kaanepilt
        )
        asendaRaamatuAndmed(uusAktiivneRaamatuIndex, raamatuAndmed)
    }

    return (
        <div className='row mx-auto p-2'>
            <div className='col-4 ContentCard'>
                <RaamatuteValik
                    raamatud={raamatud}
                    muudaAktiivsetRaamatut={muudaAktiivsetRaamatut}
                />
                <LisaRaamat
                    lisaRaamat={lisaRaamat}
                />
                <div className='col-1' />
            </div>
            <RaamatuDetailid
                raamat={raamatud[aktiivneRaamat]}
            />
        </div>
    )
}

export default RaamatuTeenus