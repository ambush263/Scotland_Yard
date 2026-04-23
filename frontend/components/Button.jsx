function Button({onClick,name,primary}){
    const base = {
        fontFamily: "'Playfair Display', serif",
        fontSize: "1rem",
        padding: "0.75rem 2rem",
        border: primary ? "none" : "2px solid #c9a84c",
        borderRadius: "2px",
        cursor: "pointer",
        letterSpacing: "0.08em",
        transition: "all 0.2s ease",
        background: primary ? "#c9a84c" : "transparent",
        color: primary ? "#1a1a2e" : "#c9a84c",
        width: "100%",
    };

    return (
        <button
            style={base}
            onClick={onClick}
            onMouseEnter={e => { e.target.style.opacity = "0.8"; e.target.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.target.style.opacity = "1"; e.target.style.transform = "translateY(0)"; }}
        >
            {name}
        </button>
    );
}

export default Button