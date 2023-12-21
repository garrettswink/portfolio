import "../style/MernCard.css"

export default function MernCard(props) {
    return (
        <div className="mern-card-body">
            <div className="mern-card-image">
                <img src={props.logo} alt={props.title} />
                <div className="mern-card-description">
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="mern-card-title">
                <p>{props.title}</p>
            </div>
        </div>
    );
}