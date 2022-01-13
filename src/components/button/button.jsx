import './button.scss';

export default function Button({ txt, style, handlerClick }) {
    return (
        <button className={`btn btn_${style}`} onClick={handlerClick} >
            {txt}
        </button>
    );
}