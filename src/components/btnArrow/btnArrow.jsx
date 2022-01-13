import './btnArrow.scss';

export default function BtnArrow({txt, handleClick}) {
    return(
        <div className="btnArrow_block">
            <button className='btnArrow' handleClick={handleClick}> {txt} </button>
            <div className='btnArrow_block_right'>
                
            </div>
        </div>
    )
}