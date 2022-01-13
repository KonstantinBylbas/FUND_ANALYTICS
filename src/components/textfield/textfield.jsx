import './textfield.scss';

export default function Textfield({ title, body, style }) {
    return (
        <div className={`textfield ${style}`}>
            <h4>
                {title}
            </h4>
            <p>
                {body}
            </p>
        </div>
    )
}