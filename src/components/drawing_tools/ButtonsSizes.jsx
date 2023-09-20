export default function ButtonsSizes(props) {
    const {updateSizes, dimension} = props

    return (
        <div className="buttons-sizes">
            <button onClick={() => updateSizes(8)}
            style={{
                borderColor: dimension === 8 && '#646cff',
                borderWidth: dimension === 8 ? '2px' : 'initial',
            }}>
                8x8
            </button>

            <button onClick={() =>updateSizes(16)}
            style={{
                borderColor: dimension === 16 && '#646cff',
                borderWidth: dimension === 16 ? '2px' : 'initial',
            }}>
                16x16
            </button>

            <button onClick={() => updateSizes(32)}
            style={{
                borderColor: dimension === 32 && '#646cff',
                borderWidth: dimension === 32 ? '2px' : 'initial',
            }}>
                32x32
            </button>
        </div>
    )
}

/*
<button onClick={() => updateSizes(64)}
            style={{
                borderColor: dimension === 64 && '#646cff',
                borderWidth: dimension === 64 ? '2px' : 'initial',
            }}>
                64x64
            </button>
*/