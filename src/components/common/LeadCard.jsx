function LeadCard({ lead, onDelete }) {
  return (
    <div>
      <h3>{lead.name}</h3>
      <p>{lead.company}</p>
      <p>{lead.status}</p>
      <button onClick={() => onDelete(lead.id)}>
        Delete
      </button>
    </div>
  );
}

export default LeadCard;