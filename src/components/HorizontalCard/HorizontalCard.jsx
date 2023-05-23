const HorizontalCard = ({icon, title, content}) => {
    return (
        <div className="horizontal-card primary-card border-0 py-4 d-flex gap-4 h-100" style={{backgroundColor: 'white'}}>
            <span className="material-symbols-rounded" style={{fontSize: 30}} >{icon}</span>

            <div>
                <h3>{title}</h3>
                <p className="fs-4 text-muted">{content}</p>
            </div>
        </div>
    )
}

export default HorizontalCard