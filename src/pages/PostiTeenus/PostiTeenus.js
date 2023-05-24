import { useEffect, useState } from 'react';

const app = document.querySelector('#app');

const PostiTeenus = () => {
    const [matkad,setMatkad] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log('Õnnestus!\n', data);

            setMatkad(data)

            // app.innerHTML = `
            // Eesnimi: ${data.eesnimi}<br>
            // Perenimi: ${data.perenimi}<br>
            // Postituse Pealkiri: ${data.title}
            // ${data.desc}
            // `
        })
        .catch(function(e) {
            // handle the error
            if (e) {
                console.log(`Ei õnnestunud. Täitsa pekkis!\nSiin on viga: ${e}`);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div id="row mx-auto text-center">
            <div className='ContentCard HorizontalMargin'>
                {matkad.map((matk1) => {
                    return <div key={matk1.title} className='row'>
                        {matk1.title}
                    </div>
                })}
                <div className='row'>

                    {/* Uus postitus */}
                    {/* Logi sisse */}
                    {/* Otsi postitust */}
                    {/* postitused */}
                </div>
            </div>
        </div>
    )

}

export default PostiTeenus