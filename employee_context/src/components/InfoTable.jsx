const tableStyle = {
    width: '500px',
    margin: '0 auto',
    borderCollapse: 'collapse',
    fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",
    borderRadius: '8px',
    overflow: 'hidden',
    tableLayout: 'fixed',
    userSelect: 'none',
}

const thStyle = {
    backgroundColor: "#f2f2f2",
    color: "#333",
    textAlign: "left",
    padding: '12px 15px',
    borderBottom: "2px solid #ddd",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "0.875rem",
}

const tdStyle = {
    padding: '12px 15px',
    borderBottom: '1px solid #eee',
    textAlign: 'left',
    color:"#555"
}

export const InfoTable = ({info}) => {
    return (
        <>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        {Object.keys(info).map((key,idx) => (
                            <th key={idx} style={thStyle}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {Object.values(info).map((value,idx) => (
                            <td key={idx} style={tdStyle}>{value}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default InfoTable;