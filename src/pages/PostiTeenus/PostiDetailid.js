function PostiDetailid({postitus}) {

    if (postitus.andmed == null) {
        return <h3>Laen andmeid ... </h3>
    }

    return (
        <>
            <h2>
                Tänane ilm linnas {postitus.title}
            </h2>
        </>
    )
}

export default PostiDetailid