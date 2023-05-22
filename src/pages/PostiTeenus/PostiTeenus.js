import { useEffect } from 'react';
// import PostiDetailid from './PostiDetailid';

const app = document.querySelector('#app');

const PostiTeenus = () => {
    useEffect(() => {
        fetch('http://localhost:8000')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log('Õnnestus!\n', data);
                app.innerHTML = `
                Eesnimi: ${data.eesnimi}<br>
                Perenimi: ${data.perenimi}<br>
                Postituse Pealkiri: ${data.title}
                ${data.desc}
                `
            })
            .catch(function(err) {
                // handle the error
                if (err) {
                    console.log('Ei õnnestunud. Täitsa pekkis!');
                }
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div id="row mx-auto text-center">
            <div className='ContentCard HorizontalMargin'>
                <div className='row'>
                    {/* Uus postitus */}
                    {/* Logi sisse */}
                    {/* Otsi postitust */}
                    {/* postitused */}

                    {/* <PostiDetailid /> */}
                </div>
            </div>
        </div>
    )

}

export default PostiTeenus